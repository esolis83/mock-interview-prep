export interface RoundMeta {
  color: string
  name: string
  desc: string
}

export interface Question {
  id: number
  round: number
  roundName: string
  category: string
  question: string
  options: string[]
  correct: number
  explanation: string
}

export type Screen   = 'home' | 'quiz' | 'results'
export type Outcome  = 'correct' | 'incorrect'

export interface RoundCard {
  round: number
  count: number
  selected: boolean
}

export interface RoundRow {
  round: number
  correct: number
  total: number
  pct: number
  color: string
}
