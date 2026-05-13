import Http from '@/request'

/**
 * 获取所有任务
 */
export interface Task {
  id?: number
  title: string
  description: string
  start_date: Date
  remark: string
  priority: string
  is_completed: boolean
}

export async function getAllPlansApi() {
  return Http.get<string[]>('/plans')
}

/**
 * 按日期查询
 * @param start_date 开始日期
 */
export async function queryPlansByDateApi(start_date: string) {
  return Http.get<string[]>('/plans/byStartDate', {
    params: { start_date }
  })
}

export async function createPlanApi(task: Task) {
  return Http.post<Task>('/createPlan', {
    data: task
  })
}
/**
 * 设置任务状态
 */
interface setPlanStatusParams {
  id: number
  is_completed: boolean
}
export async function setPlanStatusApi(data: setPlanStatusParams) {
  return Http.post<Task>('/setPlanStatus', {
    data: data
  })
}
/**
 * 更新任务备注
 */
export async function updatePlanRemarkApi(data: {
  id: number
  remark: string
}) {
  return Http.post<Task>('/setPlanRemark', {
    data: data
  })
}

export async function deletePlanApi(id: number) {
  return Http.post<Task>('/delPlan', {
    params: { id }
  })
}
