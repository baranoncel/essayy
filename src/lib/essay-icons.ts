// Essay icon generator - creates emoji icons based on essay properties

// Essay type emojis
const essayTypeEmojis: Record<string, string> = {
  'argumentative': '⚔️',
  'analytical': '🔍',
  'expository': '📋',
  'persuasive': '🎯',
  'narrative': '📖',
  'descriptive': '🎨',
  'compare and contrast': '⚖️',
  'research paper': '🔬',
  'critical essay': '🤔',
  'reflective': '🪞',
  'informative': 'ℹ️',
  'explanatory': '💡'
}

// Topic-based emoji keywords
const topicKeywords: Record<string, string> = {
  // Education & Learning
  'education': '🎓',
  'school': '🏫',
  'learning': '📚',
  'teacher': '👨‍🏫',
  'student': '👨‍🎓',
  'university': '🏛️',
  'knowledge': '🧠',
  'study': '📖',

  // Technology & AI
  'technology': '💻',
  'artificial intelligence': '🤖',
  'ai': '🤖',
  'computer': '💻',
  'internet': '🌐',
  'digital': '📱',
  'software': '💾',
  'robotics': '🤖',
  'innovation': '💡',
  'data': '📊',

  // Science & Research
  'science': '🔬',
  'research': '📊',
  'biology': '🧬',
  'chemistry': '⚗️',
  'physics': '⚛️',
  'medicine': '⚕️',
  'health': '❤️',
  'psychology': '🧠',

  // Environment & Nature
  'environment': '🌍',
  'climate': '🌡️',
  'nature': '🌿',
  'pollution': '🏭',
  'sustainability': '♻️',
  'green': '🍃',
  'ocean': '🌊',
  'forest': '🌲',
  'animals': '🐾',

  // Society & Culture
  'society': '👥',
  'culture': '🎭',
  'history': '📜',
  'politics': '🏛️',
  'government': '🏢',
  'democracy': '🗳️',
  'religion': '⛪',
  'philosophy': '🤔',
  'ethics': '⚖️',

  // Business & Economics
  'business': '💼',
  'economics': '📈',
  'marketing': '📢',
  'finance': '💰',
  'money': '💵',
  'trade': '🤝',
  'economy': '💹',
  'job': '👔',
  'work': '⚒️',

  // Arts & Literature
  'art': '🎨',
  'literature': '📚',
  'music': '🎵',
  'poetry': '✍️',
  'writing': '✒️',
  'book': '📗',
  'novel': '📔',
  'drama': '🎭',
  'film': '🎬',

  // Sports & Health
  'sports': '⚽',
  'fitness': '💪',
  'exercise': '🏃‍♂️',
  'nutrition': '🥗',
  'mental health': '🧘‍♀️',
  'wellness': '🌸',

  // Travel & Geography
  'travel': '✈️',
  'geography': '🗺️',
  'country': '🏳️',
  'city': '🏙️',
  'tourism': '📸',

  // Communication & Media
  'communication': '📞',
  'social media': '📱',
  'journalism': '📰',
  'media': '📺',
  'language': '🗣️',

  // Food & Agriculture
  'food': '🍎',
  'agriculture': '🚜',
  'farming': '🌾',
  'cooking': '👨‍🍳',

  // General concepts
  'future': '🔮',
  'success': '🏆',
  'leadership': '👑',
  'change': '🔄',
  'problem': '❓',
  'solution': '✅',
  'development': '📈',
  'growth': '🌱',
  'impact': '💥',
  'relationship': '💝',
  'community': '🏘️',
  'global': '🌍',
  'modern': '🏢',
  'traditional': '🏺',
  'creative': '💫',
  'critical': '🔍'
}

// Fallback emojis for different categories
const fallbackEmojis = [
  '📝', '📄', '📋', '📰', '📑', '📜', '📔', '📕', '📗', '📘', 
  '📙', '📚', '💭', '💡', '🎯', '🔍', '⭐', '✨', '🌟', '💫'
]

export function getEssayIcon(essay: any): string {
  // If there's a custom emoji, use it first
  if (essay?.custom_emoji) {
    return essay.custom_emoji
  }
  
  const topic = (essay?.topic || '').toLowerCase()
  const essayType = (essay?.essay_type || '').toLowerCase()
  
  // First, try to match by essay type
  const typeEmoji = essayTypeEmojis[essayType]
  if (typeEmoji) {
    return typeEmoji
  }
  
  // Then, try to match by topic keywords
  for (const [keyword, emoji] of Object.entries(topicKeywords)) {
    if (topic.includes(keyword.toLowerCase())) {
      return emoji
    }
  }
  
  // If no match found, use a consistent fallback based on essay properties
  const combinedString = `${topic}${essayType}` || 'default'
  // @ts-ignore - TypeScript error on next line, but it works correctly
  const hash = hashString(combinedString)
  return fallbackEmojis[hash % fallbackEmojis.length]
}

// Simple hash function for consistent emoji selection
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return Math.abs(hash)
} 