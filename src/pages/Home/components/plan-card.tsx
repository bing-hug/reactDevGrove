import { useImmer } from "use-immer";
import { Tag, Input, Button, message } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useMemo, useState, useRef, type ChangeEvent } from 'react'
import { priorityEnum } from "@/enums";
import { debounce } from 'lodash'
import { setPlanStatusApi, deletePlanApi, updatePlanRemarkApi } from '@/apis/index.ts'
import type { PlanItemInfo } from "@/types";

interface PlanCardProps {
    planInfo: PlanItemInfo,
    onRefresh: () => void,
}

const PlanCard = ({ planInfo, onRefresh }: PlanCardProps) => {
    const [remarkVal, setRemarkVal] = useImmer(planInfo.remark)
    const [completing, setCompleting] = useState(false)
    const [deleting, setDeleting] = useState(false)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRemarkVal(e.target.value)
        updatePlanRemark(e.target.value)
    }

    const updatePlanRemark = useRef(debounce(async (str: string) =>  {
        if (!str) return
        try {
            const res = await updatePlanRemarkApi({
                id: planInfo.id,
                remark: str
            })
            if (res.success) {
                message.success('更新备注成功')
            }
        } catch (error) {
            console.log(error)
        }
    }, 500)).current

    async function togglePlanStatus() {
        setCompleting(true)
        try {
            const res = await setPlanStatusApi({
                id: planInfo.id,
                is_completed: !planInfo.is_completed
            })
            if (res.success) {
                onRefresh()
            }
        } finally {
            setCompleting(false)
        }
    }

    async function handleDeletePlan() {
        setDeleting(true)
        try {
            const res = await deletePlanApi(planInfo.id)
            if (res.success) {
                onRefresh()
            }
        } catch (err) {
            console.error(err)
        } finally {
            setDeleting(false)
        }
    }

    const priority = useMemo(() => {
        const priorityItem = priorityEnum.find((item) => item.value === planInfo.priority)
        return priorityItem ? priorityItem : {
            label: '无',
            color: 'default',
            icon: ''
        };
    }, [planInfo])

    const buttonStyle = useMemo(() => {
        if (planInfo.is_completed) {
            return {
                backgroundColor: 'rgb(82, 196, 26)',
                borderColor: 'rgb(82, 196, 26)',
                color: 'rgb(255, 255, 255)',
                boxShadow: 'rgba(111, 207, 151, 0.5) 0px 2px 4px'
            }
        }
        return {
            backgroundColor: 'rgb(24, 144, 255)',
            borderColor: 'rgb(24, 144, 255)',
            color: 'rgb(255, 255, 255)',
            boxShadow: 'rgba(24, 144, 255, 0.5) 0px 2px 4px'
        }
    }, [planInfo])

    return (
        <div className="group rounded-12 border border-gray-200/50 bg-white p-16 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-2">
            <div className="flex items-start gap-12">
                {priority.color !== 'default' && (
                    <div
                        className="w-4 shrink-0 rounded-4 transition-colors duration-300"
                        style={{ backgroundColor: priority.color }}
                    />
                )}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-8 mb-12">
                        {priority.icon && (
                            <img src={priority.icon} alt={`${priority.label}优先级`} className="w-18 h-18" />
                        )}
                        <div className={`font-semibold truncate ${planInfo.is_completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                            {planInfo.title}
                        </div>
                        <Tag color={priority.color} className="shrink-0">
                            {priority.label || '无'}
                        </Tag>
                        <Tag color={planInfo.is_completed ? 'success' : 'processing'} className="shrink-0">
                            {planInfo.is_completed ? '已完成' : '未完成'}
                        </Tag>
                    </div>
                    <div className="flex items-start gap-16">
                        <div className="flex-1 min-w-0">
                            <div className="min-h-60 rounded-8 bg-gray-50 px-12 py-10 text-sm text-gray-600 leading-relaxed border border-gray-100">
                                {planInfo.description || (
                                    <span className="text-gray-300 italic">暂无描述</span>
                                )}
                            </div>
                            <div className="mt-8">
                                <Input
                                    value={remarkVal}
                                    placeholder="添加备注..."
                                    onChange={handleInputChange}
                                    size="small"
                                />
                            </div>
                        </div>
                        <div className="flex gap-8 shrink-0">
                            <Button
                                type="primary"
                                className="rounded-6 transition-all duration-200 hover:shadow-md cursor-pointer"
                                style={buttonStyle}
                                onClick={togglePlanStatus}
                                loading={completing}
                            >
                                {planInfo.is_completed ? '回滚' : '完成'}
                            </Button>
                            <Button
                                type="text"
                                className="transition-all duration-200 text-gray-400 hover:!text-red-500 cursor-pointer"
                                onClick={handleDeletePlan}
                                loading={deleting}
                                icon={<DeleteOutlined />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanCard
