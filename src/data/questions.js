export const sections = [
  { id: 1, title: '生活方式与审美偏好', start: 1, end: 4 },
  { id: 2, title: '战斗与游戏核心体验', start: 5, end: 8 },
  { id: 3, title: '情感与价值观', start: 9, end: 12 },
  { id: 4, title: '世界观与身份认同', start: 13, end: 15 },
  { id: 5, title: '趣味与日常', start: 16, end: 19 },
]

export const questions = [
  // 第一部分：生活方式与审美偏好
  {
    id: 1,
    section: 1,
    text: '终于迎来了周末，你最理想的度过方式是？',
    options: [
      { label: 'A', text: '必须出门走走，去户外探险看风景。', points: ['genshin'] },
      { label: 'B', text: '在网上冲浪发癫，和朋友互发表情包。', points: ['starrail'] },
      { label: 'C', text: '彻底躺平，养花逗狗，喝茶放空。', points: ['haven'] },
      { label: 'D', text: '钻研一个烧脑的谜题或看一部悬疑大片。', points: ['varsapura'] },
    ],
  },
  {
    id: 2,
    section: 1,
    text: '你更偏爱哪种视觉美术风格？',
    options: [
      { label: 'A', text: '鲜亮生动的二次元奇幻风。', points: ['genshin', 'starrail'] },
      { label: 'B', text: '潮酷街头，复古与前卫碰撞。', points: ['zzz'] },
      { label: 'C', text: '次世代写实都市风，科幻与奇幻感交织。', points: ['varsapura'] },
      { label: 'D', text: '精致浪漫的唯美画风，卡面细节拉满。', points: ['themis'] },
    ],
  },
  {
    id: 3,
    section: 1,
    text: '当一个亲近的人对你撒谎时，你的第一反应是——',
    options: [
      { label: 'A', text: '感到受伤，比起谎言本身，更在意对方的情绪和动机。', points: ['themis'] },
      { label: 'B', text: '瞬间捕捉到逻辑漏洞，像解谜一样试图还原真相。', points: ['themis', 'varsapura'] },
      { label: 'C', text: '有些受伤但假装不知道，相信对方也有自己的苦衷。', points: ['genshin', 'starrail'] },
      { label: 'D', text: '只要不是非常重要的谎言，那么就随他去吧。', points: ['haven'] },
    ],
  },
  {
    id: 4,
    section: 1,
    text: '在朋友圈里，你通常扮演什么样的角色？',
    options: [
      { label: 'A', text: '"整活大师"，经常发一些莫名其妙但好笑的图。', points: ['starrail'] },
      { label: 'B', text: '"人间观察者"，很少发动态，但会认真看别人的长文并精准评论。', points: ['themis'] },
      { label: 'C', text: '"旅行博主"，分享大自然的风景或最近吃到的好东西。', points: ['genshin', 'haven'] },
      { label: 'D', text: '只转发自己喜欢的硬核冷门内容，不在意别人是否看得懂。', points: ['hg2', 'varsapura'] },
    ],
  },

  // 第二部分：战斗与游戏核心体验
  {
    id: 5,
    section: 2,
    text: '面对战斗，你的真实想法是——',
    options: [
      { label: 'A', text: '"我要亲自搓招，为了所有的美好而战！"', points: ['hi3'] },
      { label: 'B', text: '"动作游戏手残，给我回合制或自走棋慢慢算。"', points: ['starrail', 'nexus'] },
      { label: 'C', text: '"你玩游戏难道就是为了攒满六个豆长按鼠标左键？"', points: ['zzz'] },
      { label: 'D', text: '"可以不打架吗？我只想种田 / 谈恋爱。"', points: ['haven', 'themis'] },
    ],
  },
  {
    id: 6,
    section: 2,
    text: '你最看重游戏里的哪个核心体验？',
    options: [
      { label: 'A', text: '宏大的世界观和旅途中的感触。', points: ['genshin'] },
      { label: 'B', text: '陪伴感强，能到处收集可爱的小生物。', points: ['nexus'] },
      { label: 'C', text: '跌宕起伏、刀刀致命的硬核剧情。', points: ['hi3', 'hg2'] },
      { label: 'D', text: '高智商的解谜与超自然设定的沉浸感。', points: ['varsapura'] },
    ],
  },
  {
    id: 7,
    section: 2,
    text: '如果你获得了一份力量，你最想用它来做什么？',
    options: [
      { label: 'A', text: '成为众人的支柱，建立一个秩序井然的乐园。', points: ['genshin'] },
      { label: 'B', text: '去拯救那些注定凋零的美好，即便代价是自己。', points: ['hi3'] },
      { label: 'C', text: '和可爱的小生物们建立契约，自由地游历世界。', points: ['nexus'] },
      { label: 'D', text: '保护身边的几个人，让他们在混乱的世界里有个遮风避雨的家。', points: ['zzz'] },
    ],
  },
  {
    id: 8,
    section: 2,
    text: '在养成方面，你最容易沉迷于什么？',
    options: [
      { label: 'A', text: '刷圣遗物/遗器/驱动盘，追求极致面板。', points: ['genshin', 'starrail', 'zzz'] },
      { label: 'B', text: '收集各种精灵，给它们进化搭配阵容。', points: ['nexus'] },
      { label: 'C', text: '装修自己的小家，安排作息和农作物。', points: ['haven'] },
      { label: 'D', text: '收集心仪对象的每一张卡面，拉满好感度。', points: ['themis'] },
    ],
  },

  // 第三部分：情感与价值观
  {
    id: 9,
    section: 3,
    text: '当游戏剧情向你抛出一把刀子，你的反应——',
    options: [
      { label: 'A', text: '痛哭流涕，但依然觉得剧情封神，甘之如饴。', points: ['hi3', 'starrail'] },
      { label: 'B', text: '转移注意力，赶紧去玩点轻松的整活支线回血。', points: ['nexus'] },
      { label: 'C', text: '我拒绝刀子！请给我治愈和岁月静好。', points: ['haven'] },
      { label: 'D', text: '冷静分析背后的逻辑，试图找出反转的伏笔。', points: ['varsapura', 'themis'] },
    ],
  },
  {
    id: 10,
    section: 3,
    text: '你认为最浪漫的场景是？',
    options: [
      { label: 'A', text: '华灯初上，与心意相通的人在法庭或办公室并肩作战，守护心中的正义。', points: ['themis'] },
      { label: 'B', text: '日出而作，在洒满阳光的窗台上摆一盆亲手种的花。', points: ['haven'] },
      { label: 'C', text: '月光下，一个少女独自跳向空中，试图触摸月球。', points: ['hg2'] },
      { label: 'D', text: '坐在行驶在银河里的列车窗边，眺望远方的星空。', points: ['starrail'] },
      { label: 'E', text: '即使世界已经行至末日，也要化身为光，为身边的人与下一个世代的人而战。', points: ['hi3'] },
      { label: 'F', text: '在旅途的终点，与自己的至亲重逢，守望永恒的花海。', points: ['genshin'] },
    ],
  },
  {
    id: 11,
    section: 3,
    text: '如果世界变得越来越复杂，你是否会怀念最初那种简单甚至笨拙的快乐？',
    options: [
      { label: 'A', text: '会，越简单的东西往往越纯粹。', points: ['hg2'] },
      { label: 'B', text: '不会，我更喜欢技术和画质都在不断进步的新世界。', points: ['varsapura', 'zzz'] },
      { label: 'C', text: '只有怀念是没用的，重要的是如何在这个复杂的世界里活得开心。', points: ['starrail'] },
      { label: 'D', text: '只要还有人在我身边，简不简单无所谓。', points: ['themis', 'hi3', 'genshin'] },
    ],
  },
  {
    id: 12,
    section: 3,
    text: '当生活让你感到极度疲惫时，你的"精神避风港"是？',
    options: [
      { label: 'A', text: '彻底断网，去山里住几天或者在游戏里种地。', points: ['haven'] },
      { label: 'B', text: '找朋友吐槽，用幽默消解痛苦，哪怕是自嘲。', points: ['starrail'] },
      { label: 'C', text: '训练、变强、正面硬刚，直到把问题解决。', points: ['hi3', 'genshin'] },
      { label: 'D', text: '沉浸在幻想世界里，重温那些经典的老故事，从中获取精神力量。', points: ['hg2'] },
    ],
  },

  // 第四部分：世界观与身份认同
  {
    id: 13,
    section: 4,
    text: '如果你穿越到游戏世界，你希望自己的身份是？',
    options: [
      { label: 'A', text: '见证一切的旅行者，扛起拯救世界的重任。', points: ['genshin', 'hi3'] },
      { label: 'B', text: '没心没肺的开拓者，翻垃圾桶第一名。', points: ['starrail'] },
      { label: 'C', text: '经营一处世外桃源的农场主 / 村长。', points: ['haven'] },
      { label: 'D', text: '在超自然都市中寻找真相的调查员。', points: ['varsapura'] },
    ],
  },
  {
    id: 14,
    section: 4,
    text: '你独自走在深夜空无一人的旧街区，你更享受哪种氛围？',
    options: [
      { label: 'A', text: '涂鸦、录像带店和若有若无的节奏蓝调。', points: ['zzz'] },
      { label: 'B', text: '积水倒映着霓虹灯，某种超自然的神秘感正在蔓延。', points: ['varsapura'] },
      { label: 'C', text: '荒凉、寒冷，有一种世界末日般的寂静美感。', points: ['hg2'] },
      { label: 'D', text: '想快点回家，这地方太危险了。', points: ['haven'] },
    ],
  },
  {
    id: 15,
    section: 4,
    text: '如果你面前有一扇被锁死的门，背后隐藏着危险的真相，你会——',
    options: [
      { label: 'A', text: '搜集所有的线索，分析风险，制定严密的计划后再开。', points: ['themis', 'varsapura'] },
      { label: 'B', text: '既然有门，那就直接踢开，我相信我的操作。', points: ['zzz', 'hi3'] },
      { label: 'C', text: '敲敲门，看看能不能叫个强大的伙伴来帮我。', points: ['nexus', 'starrail'] },
      { label: 'D', text: '坐在门口发呆，也许这扇门本身就是风景。', points: ['haven'] },
    ],
  },

  // 第五部分：趣味与日常
  {
    id: 16,
    section: 5,
    text: '你对"复古怀旧"的态度是？',
    options: [
      { label: 'A', text: '它是时代的眼泪，但我依然怀念最初始的纯正二次元味道。', points: ['hg2'] },
      { label: 'B', text: '复古就是新潮！我喜欢CRT电视和录像带的质感。', points: ['zzz'] },
      { label: 'C', text: '我更喜欢向前看，追求最顶尖的技术和画质。', points: ['varsapura'] },
      { label: 'D', text: '顺其自然，只要角色好看、剧情好笑就行。', points: ['starrail', 'genshin'] },
    ],
  },
  {
    id: 17,
    section: 5,
    text: '你最喜欢的音乐风格是——',
    options: [
      { label: 'A', text: '气势磅礴的交响乐搭配不同地区的民族乐器。', points: ['genshin'] },
      { label: 'B', text: '动感洗脑的电子乐、Lo-Fi或嘻哈。', points: ['zzz'] },
      { label: 'C', text: '燃向Vocal神曲，听了就想拯救世界。', points: ['hi3'] },
      { label: 'D', text: '轻松治愈的白噪音和原声吉他。', points: ['haven'] },
    ],
  },
  {
    id: 18,
    section: 5,
    text: '对于"日常任务"，你的忍耐度是——',
    options: [
      { label: 'A', text: '习惯了，每天上线清体力是我生活的一部分。', points: ['genshin', 'hi3'] },
      { label: 'B', text: '越快越好，最好能一键扫荡或者全自动。', points: ['starrail', 'nexus'] },
      { label: 'C', text: '无所谓，我在游戏里就是在过日常，享受生活。', points: ['haven'] },
      { label: 'D', text: '我只关心主线剧情和探案，日常有点枯燥。', points: ['themis'] },
    ],
  },
  {
    id: 19,
    section: 5,
    text: '如果有一段空闲的假期，你会怎么安排虚拟生活？',
    options: [
      { label: 'A', text: '去提瓦特大陆的每个角落寻找宝箱和神瞳。', points: ['genshin'] },
      { label: 'B', text: '去控制局的"里世界"对抗超自然力量。', points: ['varsapura'] },
      { label: 'C', text: '带着我的精灵伙伴在海边小镇闲逛、冲浪。', points: ['nexus'] },
      { label: 'D', text: '在六分街吃碗拉面，去电玩城打个街机。', points: ['zzz'] },
    ],
  },
]

export const finalQuestion = {
  standard: {
    id: 20,
    text: '如果你要为自己的这段旅程画上句号，你希望它停在哪里？',
    options: [
      { label: 'A', text: '停在旅途的终点，找到属于自己的旅途的答案。', points: ['genshin'] },
      { label: 'B', text: '停在温馨的农场，过上平静的退休生活。', points: ['haven'] },
      { label: 'C', text: '停在列车的下一站，因为探索永无止境。', points: ['starrail'] },
      { label: 'D', text: '停在真相大白的那一刻，正义得到了伸张。', points: ['themis'] },
    ],
  },
  hidden: {
    id: 20,
    text: '你在废墟中发现了一个破旧的游戏机，来自计算机刚刚发明的那个时代，你是否愿意按下启动键，即便这意味着你会看到画面最粗糙、操作最简陋的那个世界？',
    options: [
      { label: 'A', text: '算了，过去的东西就让它留在过去吧，我更看重现在。', points: ['hg2'] },
      { label: 'B', text: '愿意，我想看看这一切的奇迹，最初是从哪一点微光开始的。', points: ['flyme'] },
    ],
  },
}
