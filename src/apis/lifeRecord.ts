import Http from '@/request'
import type { LifeRecordItem } from '@/types'

/**
 * 获取生活日志
 */

export function getLifeRecordListApi() {
  return Http.get<LifeRecordItem[]>('/lifeRecords')
}

/**
 * 创建生活日志
 */
interface CreateRecordData {
  title: string
  mood: string
  cover: string
  content: string
  life_date: string
}
export function createLifeRecordApi(data: CreateRecordData) {
  return Http.post('/createLifeRecord', { data })
}
