import HighPriorityIcon from '@/assets/priority/priority_high.svg'
import MediumPriorityIcon from '@/assets/priority/priority_medium.svg'
import LowPriorityIcon from '@/assets/priority/priority_low.svg'

export const priorityEnum = [
  {
    label: '高优先级',
    value: 'HIGH',
    icon: HighPriorityIcon,
    color: '#cf1322'
  },
  {
    label: '中优先级',
    value: 'MEDIUM',
    icon: MediumPriorityIcon,
    color: '#f59f00'
  },
  {
    label: '低优先级',
    value: 'LOW',
    icon: LowPriorityIcon,
    color: '#409eff'
  }
]

export const Mood = {
  // 积极情绪
  ECSTATIC: 'ecstatic', // 狂喜
  JOYFUL: 'joyful', // 欢乐
  HAPPY: 'happy', // 开心
  CONTENT: 'content', // 满足
  GRATEFUL: 'grateful', // 感激
  HOPEFUL: 'hopeful', // 充满希望
  PROUD: 'proud', // 自豪
  EXCITED: 'excited', // 兴奋
  OPTIMISTIC: 'optimistic', // 乐观
  PEACEFUL: 'peaceful', // 平和
  LOVING: 'loving', // 充满爱意
  CONFIDENT: 'confident', // 自信
  AMUSED: 'amused', // 觉得有趣
  INSPIRED: 'inspired', // 受启发

  // 中性情绪
  NEUTRAL: 'neutral', // 一般
  CALM: 'calm', // 平静
  RELAXED: 'relaxed', // 放松
  CONTEMPLATIVE: 'contemplative', // 沉思的
  CURIOUS: 'curious', // 好奇
  SURPRISED: 'surprised', // 惊讶
  NOSTALGIC: 'nostalgic', // 怀旧
  REFRESHED: 'refreshed', // 精神焕发

  // 消极情绪
  TIRED: 'tired', // 疲惫
  BORED: 'bored', // 无聊
  ANXIOUS: 'anxious', // 焦虑
  WORRIED: 'worried', // 担忧
  SAD: 'sad', // 伤心
  LONELY: 'lonely', // 孤独
  DISAPPOINTED: 'disappointed', // 失望
  FRUSTRATED: 'frustrated', // 沮丧
  ANGRY: 'angry', // 生气
  IRRITATED: 'irritated', // 烦躁
  JEALOUS: 'jealous', // 嫉妒
  GUILTY: 'guilty', // 内疚
  ASHAMED: 'ashamed', // 羞愧
  OVERWHELMED: 'overwhelmed', // 不知所措
  STRESSED: 'stressed', // 压力大
  SICK: 'sick', // 不舒服
  FEARFUL: 'fearful', // 害怕
  HURT: 'hurt', // 受伤
  INSECURE: 'insecure', // 不安
  CONFUSED: 'confused', // 困惑
  DISGUSTED: 'disgusted', // 厌恶
  BITTER: 'bitter', // 苦涩
  CYNICAL: 'cynical', // 愤世嫉俗

  // 特殊情绪
  MOTIVATED: 'motivated', // 有动力
  PRODUCTIVE: 'productive', // 高效
  CREATIVE: 'creative', // 有创造力
  FOCUSED: 'focused', // 专注
  ENERGETIC: 'energetic', // 精力充沛
  PLAYFUL: 'playful', // 爱玩
  SILLY: 'silly', // 傻气
  ROMANTIC: 'romantic', // 浪漫
  SENTIMENTAL: 'sentimental', // 多愁善感
  ADVENTUROUS: 'adventurous' // 喜欢冒险
} as const

export interface MoodOption {
  value: (typeof Mood)[keyof typeof Mood]
  label: string
  emoji: string
  category: 'positive' | 'neutral' | 'negative' | 'special'
  color?: string
  intensity?: number // 1-5 强度等级
}

export const getMoodOptions = (): MoodOption[] => [
  // 积极情绪 (绿色系)
  {
    value: Mood.ECSTATIC,
    label: '狂喜',
    emoji: '🤩',
    category: 'positive',
    color: '#4CAF50',
    intensity: 5
  },
  {
    value: Mood.JOYFUL,
    label: '欢乐',
    emoji: '😄',
    category: 'positive',
    color: '#8BC34A',
    intensity: 4
  },
  {
    value: Mood.HAPPY,
    label: '开心',
    emoji: '😊',
    category: 'positive',
    color: '#CDDC39',
    intensity: 3
  },
  {
    value: Mood.CONTENT,
    label: '满足',
    emoji: '😌',
    category: 'positive',
    color: '#FFEB3B',
    intensity: 2
  },
  {
    value: Mood.GRATEFUL,
    label: '感激',
    emoji: '🙏',
    category: 'positive',
    color: '#FFC107',
    intensity: 3
  },
  {
    value: Mood.HOPEFUL,
    label: '充满希望',
    emoji: '✨',
    category: 'positive',
    color: '#FF9800',
    intensity: 3
  },
  {
    value: Mood.PROUD,
    label: '自豪',
    emoji: '🦚',
    category: 'positive',
    color: '#FF5722',
    intensity: 3
  },
  {
    value: Mood.EXCITED,
    label: '兴奋',
    emoji: '🎉',
    category: 'positive',
    color: '#F44336',
    intensity: 4
  },
  {
    value: Mood.OPTIMISTIC,
    label: '乐观',
    emoji: '🌈',
    category: 'positive',
    color: '#E91E63',
    intensity: 3
  },
  {
    value: Mood.PEACEFUL,
    label: '平和',
    emoji: '☮️',
    category: 'positive',
    color: '#9C27B0',
    intensity: 2
  },
  {
    value: Mood.LOVING,
    label: '充满爱意',
    emoji: '❤️',
    category: 'positive',
    color: '#673AB7',
    intensity: 3
  },
  {
    value: Mood.CONFIDENT,
    label: '自信',
    emoji: '💪',
    category: 'positive',
    color: '#3F51B5',
    intensity: 3
  },
  {
    value: Mood.AMUSED,
    label: '觉得有趣',
    emoji: '😆',
    category: 'positive',
    color: '#2196F3',
    intensity: 2
  },
  {
    value: Mood.INSPIRED,
    label: '受启发',
    emoji: '💡',
    category: 'positive',
    color: '#03A9F4',
    intensity: 3
  },

  // 中性情绪 (蓝色系)
  {
    value: Mood.NEUTRAL,
    label: '一般',
    emoji: '😐',
    category: 'neutral',
    color: '#9E9E9E',
    intensity: 1
  },
  {
    value: Mood.CALM,
    label: '平静',
    emoji: '🧘',
    category: 'neutral',
    color: '#607D8B',
    intensity: 1
  },
  {
    value: Mood.RELAXED,
    label: '放松',
    emoji: '😎',
    category: 'neutral',
    color: '#795548',
    intensity: 1
  },
  {
    value: Mood.CONTEMPLATIVE,
    label: '沉思',
    emoji: '🤔',
    category: 'neutral',
    color: '#FF5722',
    intensity: 2
  },
  {
    value: Mood.CURIOUS,
    label: '好奇',
    emoji: '🧐',
    category: 'neutral',
    color: '#FF9800',
    intensity: 2
  },
  {
    value: Mood.SURPRISED,
    label: '惊讶',
    emoji: '😲',
    category: 'neutral',
    color: '#FFC107',
    intensity: 3
  },
  {
    value: Mood.NOSTALGIC,
    label: '怀旧',
    emoji: '📸',
    category: 'neutral',
    color: '#FFEB3B',
    intensity: 2
  },
  {
    value: Mood.REFRESHED,
    label: '精神焕发',
    emoji: '💦',
    category: 'neutral',
    color: '#CDDC39',
    intensity: 2
  },

  // 消极情绪 (红色/灰色系)
  {
    value: Mood.TIRED,
    label: '疲惫',
    emoji: '😫',
    category: 'negative',
    color: '#9E9E9E',
    intensity: 2
  },
  {
    value: Mood.BORED,
    label: '无聊',
    emoji: '😑',
    category: 'negative',
    color: '#757575',
    intensity: 1
  },
  {
    value: Mood.ANXIOUS,
    label: '焦虑',
    emoji: '😰',
    category: 'negative',
    color: '#607D8B',
    intensity: 3
  },
  {
    value: Mood.WORRIED,
    label: '担忧',
    emoji: '😟',
    category: 'negative',
    color: '#795548',
    intensity: 2
  },
  {
    value: Mood.SAD,
    label: '伤心',
    emoji: '😢',
    category: 'negative',
    color: '#2196F3',
    intensity: 3
  },
  {
    value: Mood.LONELY,
    label: '孤独',
    emoji: '🚶‍♀️',
    category: 'negative',
    color: '#3F51B5',
    intensity: 3
  },
  {
    value: Mood.DISAPPOINTED,
    label: '失望',
    emoji: '😞',
    category: 'negative',
    color: '#673AB7',
    intensity: 3
  },
  {
    value: Mood.FRUSTRATED,
    label: '沮丧',
    emoji: '😤',
    category: 'negative',
    color: '#9C27B0',
    intensity: 4
  },
  {
    value: Mood.ANGRY,
    label: '生气',
    emoji: '😠',
    category: 'negative',
    color: '#E91E63',
    intensity: 4
  },
  {
    value: Mood.IRRITATED,
    label: '烦躁',
    emoji: '😣',
    category: 'negative',
    color: '#F44336',
    intensity: 3
  },
  {
    value: Mood.JEALOUS,
    label: '嫉妒',
    emoji: '🤢',
    category: 'negative',
    color: '#FF5722',
    intensity: 3
  },
  {
    value: Mood.GUILTY,
    label: '内疚',
    emoji: '😔',
    category: 'negative',
    color: '#FF9800',
    intensity: 3
  },
  {
    value: Mood.ASHAMED,
    label: '羞愧',
    emoji: '😳',
    category: 'negative',
    color: '#FFC107',
    intensity: 4
  },
  {
    value: Mood.OVERWHELMED,
    label: '不知所措',
    emoji: '😵',
    category: 'negative',
    color: '#FFEB3B',
    intensity: 4
  },
  {
    value: Mood.STRESSED,
    label: '压力大',
    emoji: '😓',
    category: 'negative',
    color: '#CDDC39',
    intensity: 4
  },
  {
    value: Mood.SICK,
    label: '不舒服',
    emoji: '🤒',
    category: 'negative',
    color: '#8BC34A',
    intensity: 3
  },
  {
    value: Mood.FEARFUL,
    label: '害怕',
    emoji: '😨',
    category: 'negative',
    color: '#4CAF50',
    intensity: 4
  },
  {
    value: Mood.HURT,
    label: '受伤',
    emoji: '💔',
    category: 'negative',
    color: '#009688',
    intensity: 4
  },
  {
    value: Mood.INSECURE,
    label: '不安',
    emoji: '😖',
    category: 'negative',
    color: '#00BCD4',
    intensity: 3
  },
  {
    value: Mood.CONFUSED,
    label: '困惑',
    emoji: '😕',
    category: 'negative',
    color: '#03A9F4',
    intensity: 2
  },
  {
    value: Mood.DISGUSTED,
    label: '厌恶',
    emoji: '🤮',
    category: 'negative',
    color: '#2196F3',
    intensity: 4
  },
  {
    value: Mood.BITTER,
    label: '苦涩',
    emoji: '☕',
    category: 'negative',
    color: '#3F51B5',
    intensity: 3
  },
  {
    value: Mood.CYNICAL,
    label: '愤世嫉俗',
    emoji: '😒',
    category: 'negative',
    color: '#673AB7',
    intensity: 3
  },

  // 特殊情绪 (紫色/金色系)
  {
    value: Mood.MOTIVATED,
    label: '有动力',
    emoji: '🔥',
    category: 'special',
    color: '#FF9800',
    intensity: 4
  },
  {
    value: Mood.PRODUCTIVE,
    label: '高效',
    emoji: '⚡',
    category: 'special',
    color: '#FFC107',
    intensity: 4
  },
  {
    value: Mood.CREATIVE,
    label: '有创造力',
    emoji: '🎨',
    category: 'special',
    color: '#FFEB3B',
    intensity: 3
  },
  {
    value: Mood.FOCUSED,
    label: '专注',
    emoji: '🎯',
    category: 'special',
    color: '#CDDC39',
    intensity: 3
  },
  {
    value: Mood.ENERGETIC,
    label: '精力充沛',
    emoji: '💥',
    category: 'special',
    color: '#8BC34A',
    intensity: 4
  },
  {
    value: Mood.PLAYFUL,
    label: '爱玩',
    emoji: '😝',
    category: 'special',
    color: '#4CAF50',
    intensity: 3
  },
  {
    value: Mood.SILLY,
    label: '傻气',
    emoji: '🤪',
    category: 'special',
    color: '#009688',
    intensity: 2
  },
  {
    value: Mood.ROMANTIC,
    label: '浪漫',
    emoji: '💕',
    category: 'special',
    color: '#00BCD4',
    intensity: 3
  },
  {
    value: Mood.SENTIMENTAL,
    label: '多愁善感',
    emoji: '💭',
    category: 'special',
    color: '#03A9F4',
    intensity: 2
  },
  {
    value: Mood.ADVENTUROUS,
    label: '喜欢冒险',
    emoji: '🧗',
    category: 'special',
    color: '#2196F3',
    intensity: 4
  }
]

const moodOptions = getMoodOptions()

export const getSingleMood = (value: string): MoodOption | null => {
  return moodOptions.find((item) => item.value === value) || null
}
