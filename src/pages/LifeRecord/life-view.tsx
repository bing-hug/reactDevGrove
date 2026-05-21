import { useState } from "react";
import RecordIcon from '@/assets/record.svg'
import MainHeader from "@/components/main-header.tsx";
import { useLoaderData } from "react-router-dom";
import { Empty } from 'antd'
import RecordItem from '@/pages/LifeRecord/components/record-item.tsx'
import CreateRecord from "@/pages/LifeRecord/components/create-record.tsx";
import type { LifeRecordItem } from "@/types";

const LifeView = () => {
    const recordRes = useLoaderData();
    const [visible, setVisible] = useState(false)

    return (
        <>
            <div className="life-container">
                <MainHeader icon={RecordIcon} title="生活点点滴滴" buttonText="添加日志" btnClick={ () => setVisible(true) } />
                <main className="grid mt-20" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr)'}}>
                    {recordRes.success && recordRes.data.length ? recordRes.data.map((item: LifeRecordItem) => (<RecordItem record={item} key={item.id} />)): <Empty description="没有数据" />}
                </main>
            </div>

            <CreateRecord visible={ visible } onSetVisible={ (status: boolean) => setVisible(status) } />
        </>
    )
}

export default LifeView

