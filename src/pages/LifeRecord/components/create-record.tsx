import { Drawer, Form, type FormProps, Upload, type UploadFile, message, type UploadProps, Input, Select,DatePicker, Button } from 'antd'
import type { FC } from 'react'
import { spliceImgUrl } from '@/utils/spliceImgUrl.ts'
import { getMoodOptions } from '@/enums/index.ts'
import UeditorPlus from '@/components/ueditor-plus.tsx'
import {createLifeRecordApi} from "@/apis/lifeRecord.ts";

interface Props {
    visible: boolean,
    onSetVisible: (status: boolean) => void,
}

interface FormState {
    cover: string,
    title: string,
    mood: string,
    content: string,
    life_date: string
}
const coverType = ['image/jpeg', 'image/png']
const coverMaxSize = 1024 * 1024 * 5

const moodOptions = getMoodOptions()


const CreateRecord:FC<Props> = ({ visible, onSetVisible }) => {

    const [ form ] = Form.useForm<FormState>()
    const cover = Form.useWatch('cover', form);

    const onFinish:FormProps<FormState>['onFinish'] = async (values) => {
        try {
            const res = await createLifeRecordApi(values)
            console.log(res)
            message.success('添加成功')
        } catch (error) {
            console.log(error)
            message.error('添加失败')
        }
    }

    const onFinishFailed:FormProps<FormState>['onFinishFailed'] = (errorInfo) => {
        console.log(errorInfo)
    }

    const coverBeforeUpload = (file: File) => {
        if (!coverType.includes(file.type)) {
            message.error('不符合图片要求')
            return false
        }
        if (file.size > coverMaxSize) {
            message.error('封面不能大于5M')
            return false
        }
        return true
    }

    const handleUploadChange: UploadProps['onChange'] = (info) => {
        if (info.file.status === 'done') {
            // 上传完成，拿返回值存到 form 里
            form.setFieldValue('cover', info.file.response?.data)
            message.success(`${info.file.name} 上传成功`)
        } else if(info.file.status === 'error') {
            message.error(`${ info.file.name } 上传失败`)
        }
    }

    return (
        <>
            <Drawer open={visible} size={"large"}  className="w-800" onClose={ () => onSetVisible(false)}>
                <div>
                    <Form
                        form={ form }
                        autoComplete="off"
                        labelCol={{ span: 4}}
                        onFinish={ onFinish }
                        onFinishFailed={ onFinishFailed }
                    >
                        <Form.Item<FormState>
                            label="日记封面"
                            name="cover"
                            rules={[{ required: true, 'message': '请选择封面'}]}
                        >
                            <div className="flex gap-10">
                                { cover ? <img src={spliceImgUrl(cover)} alt="封面" className="w-100 h-100 rounded-8 flex-shrink-0 object-cover" /> : null }
                                <Upload
                                    name="file"
                                    action="/api/upload/uploadImg"
                                    listType="picture-card"
                                    showUploadList={ false }
                                    beforeUpload={ coverBeforeUpload }
                                    onChange={ handleUploadChange }
                                >
                                    上传封面
                                </Upload>
                            </div>
                        </Form.Item>

                        <Form.Item<FormState>
                            label="标题"
                            name="title"
                        >
                            <Input placeholder="请输入标题" />
                        </Form.Item>

                        <Form.Item<FormState>
                            label="今天心情"
                            name="mood"
                        >
                            <Select
                                options={ moodOptions }
                                optionRender={(option) => {
                                    return (
                                        <div>
                                            <span>{ option.data?.emoji }</span>
                                            <span style={{ color: option.data?.color}}>
                                                { option.label }
                                            </span>
                                        </div>
                                    )
                                }}
                            >
                            </Select>

                        </Form.Item>

                        <Form.Item<FormState>
                            label="日记日期"
                            name="life_date"
                        >
                            <DatePicker placeholder="请选择日记日期" />
                        </Form.Item>

                        <Form.Item<FormState>
                            label="内容"
                            name="content"
                        >
                            <UeditorPlus />
                        </Form.Item>

                        <Form.Item label={null} labelAlign="right">
                            <Button type="primary" htmlType="submit">
                                提交
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Drawer>
        </>
    )
}

export default CreateRecord