export interface LifeRecordItem {
  content: string
  cover: string
  created_at: string
  id: number
  life_date: string
  mood: string
  title: string
}
export interface PlanItemInfo {
  id: number
  title: string
  description: string
  start_date: Date
  priority: string
  remark: string
  is_completed: boolean
  created_at: Date
}