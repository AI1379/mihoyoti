import { questions, sections, finalQuestion } from './data/questions.js'
import { results } from './data/results.js'

// --- State ---
const scores = {}
Object.keys(results).forEach(k => { scores[k] = 0 })
let currentIdx = 0
let isFinalQuestion = false
let isHiddenPath = false
let forcedResult = null  // hidden Q20 option B forces flyme result
let transitioning = false

// --- DOM refs ---
const $ = id => document.getElementById(id)
const startScreen = $('start-screen')
const quizScreen = $('quiz-screen')
const calcScreen = $('calc-screen')
const resultScreen = $('result-screen')
const progressFill = $('progress-fill')
const progressText = $('progress-text')
const sectionLabel = $('section-label')
const qContainer = $('question-container')
const crtOverlay = $('crt-overlay')

// --- Start ---
$('start-btn').addEventListener('click', () => {
  startScreen.classList.remove('active')
  startScreen.classList.add('hidden')
  quizScreen.classList.remove('hidden')
  quizScreen.classList.add('active')
  showQuestion(0)
})

// --- Question flow ---
function showQuestion(idx) {
  currentIdx = idx
  const q = questions[idx]
  updateProgress(idx)
  renderCard(q)
}

function updateProgress(idx) {
  const total = questions.length + 1
  progressFill.style.width = `${(idx / total) * 100}%`
  progressText.textContent = `${idx + 1} / ${total}`
  const sec = sections.find(s => idx + 1 >= s.start && idx + 1 <= s.end)
  sectionLabel.textContent = sec ? sec.title : ''
}

function renderCard(q, extraClass = '') {
  const card = document.createElement('div')
  card.className = `question-card entering ${extraClass}`

  const optionsHtml = q.options.map((o, i) => `
    <button class="option" data-idx="${i}" data-points="${o.points.join(',')}">
      <span class="opt-label">${o.label}</span>
      <span class="opt-text">${o.text}</span>
      <span class="opt-arrow">→</span>
    </button>
  `).join('')

  card.innerHTML = `
    <div class="q-number">Q${q.id}</div>
    <div class="q-text">${q.text}</div>
    <div class="q-options">${optionsHtml}</div>
  `

  card.querySelectorAll('.option').forEach(btn => {
    btn.addEventListener('click', () => onAnswer(btn, card))
  })

  // Animate out old card
  const old = qContainer.querySelector('.question-card:not(.entering)')
  if (old) {
    old.classList.add('exiting')
    const removeOld = () => { if (old.parentNode) old.remove() }
    old.addEventListener('transitionend', removeOld, { once: true })
    setTimeout(removeOld, 500) // fallback
  }

  qContainer.appendChild(card)

  // Force reflow then trigger enter animation
  void card.offsetHeight
  card.classList.remove('entering')
}

function onAnswer(btn, card) {
  if (transitioning) return
  transitioning = true

  // Visual feedback — disable all buttons, highlight selected
  card.querySelectorAll('.option').forEach(b => {
    b.style.pointerEvents = 'none'
    b.style.opacity = '0.4'
  })
  btn.classList.add('selected')
  btn.style.opacity = '1'

  // Score
  const pts = btn.dataset.points.split(',')
  pts.forEach(k => {
    if (scores[k] !== undefined) scores[k]++
  })

  // Hidden Q20 option B → directly force flyme result
  if (isHiddenPath && pts.includes('flyme')) {
    forcedResult = 'flyme'
  }

  setTimeout(() => {
    if (isFinalQuestion) {
      goToCalculating()
    } else if (currentIdx < questions.length - 1) {
      showQuestion(currentIdx + 1)
    } else {
      showFinalQuestion()
    }
    transitioning = false
  }, 500)
}

// --- Final question with hidden trigger ---
function showFinalQuestion() {
  isFinalQuestion = true

  const sorted = Object.entries(scores)
    .filter(([k]) => k !== 'flyme')
    .sort((a, b) => b[1] - a[1])

  const hg2Rank = sorted.findIndex(([k]) => k === 'hg2')
  isHiddenPath = hg2Rank >= 0 && hg2Rank <= 1 && Math.random() < 0.8

  const q = isHiddenPath ? finalQuestion.hidden : finalQuestion.standard

  // Update UI
  const total = questions.length + 1
  progressFill.style.width = `${(questions.length / total) * 100}%`
  progressText.textContent = `${total} / ${total}`
  sectionLabel.textContent = isHiddenPath ? '??? 隐藏题目 ???' : '灵魂拷问'

  if (isHiddenPath) {
    activateCRT()
  }

  renderCard(q, isHiddenPath ? 'crt-card' : '')
}

// --- Calculating ---
function goToCalculating() {
  quizScreen.classList.remove('active')
  quizScreen.classList.add('hidden')

  // Deactivate CRT for calculating phase (unless flyme wins)
  deactivateCRT()

  calcScreen.classList.remove('hidden')
  calcScreen.classList.add('active')

  setTimeout(() => {
    calcScreen.classList.remove('active')
    calcScreen.classList.add('hidden')
    showResult()
  }, 2500)
}

// --- Result ---
function computeTotalOptions() {
  const totals = {}
  Object.keys(results).forEach(k => { totals[k] = 0 })

  questions.forEach(q => {
    q.options.forEach(opt => {
      opt.points.forEach(game => {
        if (totals[game] !== undefined) totals[game]++
      })
    })
  })

  // Include whichever final question was actually shown
  const finalQ = isHiddenPath ? finalQuestion.hidden : finalQuestion.standard
  finalQ.options.forEach(opt => {
    opt.points.forEach(game => {
      if (totals[game] !== undefined) totals[game]++
    })
  })

  return totals
}

function showResult() {
  const totals = computeTotalOptions()

  // Build ratios for ranking — exclude flyme
  const ratios = Object.keys(scores)
    .filter(k => k !== 'flyme')
    .map(k => ({
      key: k,
      selected: scores[k],
      total: totals[k],
      ratio: totals[k] > 0 ? scores[k] / totals[k] : 0,
    }))
    .sort((a, b) => b.ratio - a.ratio)

  const topKey = forcedResult || ratios[0].key
  const r = results[topKey]

  const scoreBars = ratios.map(({ key, ratio }) => {
    const game = results[key]
    const pct = Math.round(ratio * 100)
    return `
      <div class="score-row">
        <span class="score-name">${game.name}</span>
        <div class="score-bar-track">
          <div class="score-bar-fill" style="width: 0%; background: ${game.color};" data-target="${pct}"></div>
        </div>
        <span class="score-val">${pct}%</span>
      </div>
    `
  }).join('')

  resultScreen.innerHTML = `
    <div class="result-card entering" style="--accent: ${r.color};">
      <div class="result-badge">${r.hidden ? '✦ 隐藏款 ✦' : '你的灵魂归处'}</div>
      <img class="result-logo" src="${r.icon}" alt="${r.name}">
      <h2 class="result-name">${r.name}</h2>
      <div class="result-name-en">${r.nameEn}</div>
      <div class="result-divider" style="background: ${r.color};"></div>
      <div class="result-subtitle">${r.subtitle}</div>
      <div class="result-tagline">${r.tagline}</div>
      <div class="result-traits">${r.traits}</div>
      <div class="result-scores">
        <div class="scores-title">各世界共鸣度</div>
        ${scoreBars}
      </div>
      <button class="restart-btn" onclick="location.reload()">重新测试</button>
    </div>
  `

  resultScreen.classList.remove('hidden')
  resultScreen.classList.add('active')

  // Trigger result card animation
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const card = resultScreen.querySelector('.result-card')
      if (card) card.classList.remove('entering')

      // Animate score bars
      resultScreen.querySelectorAll('.score-bar-fill').forEach((bar, i) => {
        setTimeout(() => {
          bar.style.width = bar.dataset.target + '%'
        }, 300 + i * 80)
      })
    })
  })

  // CRT for hidden result
  if (r.hidden) {
    activateCRT()
  }
}

// --- CRT Effects ---
function activateCRT() {
  crtOverlay.classList.add('active')
  crtOverlay.classList.add('crt-on')
  document.body.classList.add('crt-active')
  setTimeout(() => crtOverlay.classList.remove('crt-on'), 600)
}

function deactivateCRT() {
  crtOverlay.classList.remove('active')
  crtOverlay.classList.remove('crt-on')
  document.body.classList.remove('crt-active')
}
