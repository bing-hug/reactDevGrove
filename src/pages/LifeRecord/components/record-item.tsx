import { Card } from 'antd'
import { useMemo } from "react";
import { spliceImgUrl } from '@/utils/spliceImgUrl.ts'
import { getSingleMood } from '@/enums'
import type { LifeRecordItem } from "@/types";
import styles from '@/pages/LifeRecord/life-view.module.scss'

interface Props {
    record: LifeRecordItem
}

const { Meta } = Card
const RecordItem = ({ record }: Props) => {

    const recordMood = useMemo(() => {
        return getSingleMood(record.mood)
    }, [record])

    const CustomTitle = () => {
        return (
            <>
                <img src={ spliceImgUrl(record.cover )} alt="封面" className="w-full" />
            </>
        )
    }

    return (
        <>
            <Card className={`${ styles.recordItem } record-item max-w-320`}>
                <Meta title={CustomTitle()}></Meta>

                <div className="content">
                    <div className="title">标题：{record.title }</div>
                </div>

                <div className="mood">
                    <span>心情：</span>
                    <span style={{ color: recordMood?.color}}>
                        { recordMood?.emoji } { recordMood?.label }
                    </span>
                </div>

                <div className="time">
                    <span>记录时间：{ record.life_date }</span>
                </div>

                <div className={`${ styles.description } max-h-100 overflow-y-scroll overflow-x-hidden break-all`}>
                    <span dangerouslySetInnerHTML={{ __html: record.content }}></span>
                </div>
            </Card>
        </>
    )
}

export default RecordItem