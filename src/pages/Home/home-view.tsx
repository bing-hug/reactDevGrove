import HappySvg from '@/assets/happy.svg'
import { Card, DatePicker } from 'antd'
import { useState, useEffect } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { CalendarOutlined } from '@ant-design/icons'
import MainHeader from '@/components/main-header.tsx'
import { queryPlansByDateApi } from "@/apis";

const { Meta } = Card

const CardTitle = () => {
    const [ nowDate, setNowDate ] = useState(new Date())

    async function handleDateChange(_ :null | Date, dateString: string | null) {
        try {
            if (dateString) {
                const res = await queryPlansByDateApi(dateString)
                console.log(res)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="flex items-center space-between gap-10 py-10">
                <div className="flex items-center gap-10">
                    <CalendarOutlined />
                    <div>{ dayjs(nowDate).format('YYYY-MM-DD') }</div>
                </div>
                <div className="flex items-center gap-10">
                    <DatePicker value={ nowDate } placeholder="请选择开始时间" onChange={handleDateChange}   />
                </div>
            </div>
        </>
    )
}

function HomePage() {
    return (
        <>
            <div className="home h-full flex flex-col">
              <MainHeader icon={ HappySvg }></MainHeader>
              <main className="home-main flex-1 overflow-y-scroll p-24 ">
                  <Card hoverable={ true }>
                      <Meta title={<CardTitle/>}></Meta>
                  </Card>
              </main>
            </div>
        </>
    )
}
export default HomePage;