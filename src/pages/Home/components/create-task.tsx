import React from 'react'
import { priorityEnum } from "@/enums";
import type { Dayjs} from 'dayjs'
import { createPlanApi } from '@/apis/index.ts'
import {Modal, Form, Input, DatePicker, Select, Button, message, type FormProps} from 'antd'

interface Props {
    visible: boolean,
    onCancel: () => void,
}

interface FormState {
    title: string
    description: string
    priority: string
    startDate: Dayjs
    remark: string
}

const options = priorityEnum.map((item) => ({
    label: item.label,
    value: item.value,
}));


const CreateTask:React.FC<Props> = ({ visible, onCancel }) => {
    const [ form ] = Form.useForm<FormState>();

    const onFinish:FormProps<FormState>['onFinish'] = async (values) => {
        const params = {
            ...values,
            start_date: values.startDate.toDate(), // 后面需要改动，这个时间显示有问题
            is_completed: false
        }
        try {
            const res = await createPlanApi(params)
            if (res.success) {
                message.success('添加任务成功')
                onCancel()
            }
        }catch (e) {
            console.log(e)
        }
    }

    const onFinishFailed:FormProps<FormState>['onFinishFailed'] = (errorInfo) => {
        console.log(errorInfo)
    }

    return (
        <>
            <Modal title="添加任务" open={ visible } onCancel={onCancel} footer={null}>
                <div className="task-create-form">
                    <Form form={ form } autoComplete="off" labelCol={{ span: 4 }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                        <Form.Item<FormState>
                            label="任务名称"
                            name="title"
                            rules={[{ required: true, 'message': '请输入任务名称'}]}
                        >
                            <Input  />
                        </Form.Item>

                        <Form.Item<FormState>
                            label="任务描述"
                            name="description"
                            rules={[{ required: true, message: '请输入任务描述'}]}
                        >
                            <Input.TextArea placeholder="请输入任务描述" />
                        </Form.Item>

                        <Form.Item<FormState>
                            label="开始时间"
                            name="startDate"
                            rules={[{ required: true, message: '请输入开始时间' }]}
                        >
                            <DatePicker placeholder="请选择开始时间" />
                        </Form.Item>

                        <Form.Item<FormState>
                            label="优先级"
                            name="priority"
                            rules={[{ required: true, message: '请选择任务优先级' }]}
                        >
                            <Select options={options} optionRender={(option) => {
                                const item = priorityEnum.find(p => p.value === option.value)
                                return (
                                    <div className="flex items-center gap-10">
                                        <img src={item?.icon} alt={item?.label || ''} className="w-24" />
                                        <div>{item?.label}</div>
                                    </div>
                                )
                            }}>
                            </Select>
                        </Form.Item>
                        <Form.Item<FormState>
                            label="备注"
                            name="remark"
                        >
                            <Input placeholder="请输入备注（可选）" />
                        </Form.Item>

                        <Form.Item label={ null }>
                            <div className="flex items-center justify-end gap-10">
                                <Button onClick={onCancel}>取消</Button>
                                <Button type="primary" htmlType="submit">
                                    创建
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    )
}

export default CreateTask