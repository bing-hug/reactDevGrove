import { useState, useEffect } from 'react'
import { useImmer } from 'use-immer'
import dayjs, { Dayjs } from 'dayjs'
import { CalendarOutlined } from '@ant-design/icons'
import { queryPlansByDateApi } from "@/apis";
import type { PlanItemInfo } from '@/types'
import HappySvg from '@/assets/happy.svg'
import { Card, DatePicker } from 'antd'
import MainHeader from '@/components/main-header.tsx'
import PlanCard from "@/pages/Home/components/plan-card.tsx";
import CreateTaskModal from '@/pages/Home/components/create-task.tsx'

const { Meta } = Card

const CardTitle = ({ nowDate, onDateChange }: {
    nowDate: Dayjs
    onDateChange: (date: Dayjs | null, dateString: string | null) => void
}) => {
    return (
        <div className="flex items-center space-between gap-10 py-10">
            <div className="flex items-center gap-10">
                <CalendarOutlined />
                <div>{ nowDate.format('YYYY-MM-DD') }</div>
            </div>
            <div className="flex items-center gap-10">
                <DatePicker value={ nowDate } placeholder="请选择开始时间" onChange={onDateChange} />
            </div>
        </div>
    )
}



function HomePage() {
    const [ nowDate, setNowDate ] = useState(dayjs())
    const [ planList, setPlanList ] = useImmer<PlanItemInfo[]>([])
    const [ visible , setVisible ] = useState(false)

    async function fetchPlans(dateString: string) {
        try {
            const res = await queryPlansByDateApi(dateString)
            setPlanList(res.data)
        } catch (error) {
            console.log('请求失败', error)
        }
    }

    async function handleDateChange(date : Dayjs | null, dateString: string | null) {
        if (!dateString) return
        if (date) setNowDate(date)
        await fetchPlans(dateString)
    }

    function headerBtnClick() {
        setVisible(true)
    }

    useEffect(() => {
        fetchPlans(dayjs().format('YYYY-MM-DD'))
    }, [])


    return (
        <div className="home h-full flex flex-col">
          <MainHeader icon={ HappySvg } title="开心每一天" buttonText="添加任务" btnClick={headerBtnClick} />
          <main className="home-main flex-1 overflow-y-scroll p-24">
              <Card hoverable>
                  <Meta title={<CardTitle nowDate={nowDate} onDateChange={handleDateChange} />} />
              </Card>
              <div className="mt-16 space-y-12">
                  { planList.map((item) => <PlanCard key={item.id} planInfo={ item } onRefresh={() => {}} />)}
              </div>
          </main>
          <CreateTaskModal visible={ visible } onCancel={() => setVisible(false)} />
        </div>
    )
}
export default HomePage;