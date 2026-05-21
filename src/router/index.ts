import {createBrowserRouter} from "react-router-dom";
import HomeView from '@/pages/Home/home-view.tsx'
import LayoutView from '@/pages/Layout/layout-view.tsx'
import LifeView from '@/pages/LifeRecord/life-view.tsx'
import {getLifeRecordListApi} from '@/apis/lifeRecord.ts'

export const routes = [
    {
        path: '/',
        Component: LayoutView,
        children: [
            {
                index: true,
                handle: { title: '计划', key: 'home', icon: 'mdi:hot-circle'},
                Component: HomeView
            },
            {
                path: 'life-records',
                handle: { title: '点滴', key: 'plan', icon: 'mdi:journal-outline' },
                Component: LifeView,
                loader: async() => {
                    try {
                        const { data, success, error_msg } =  await getLifeRecordListApi()
                        if (success) return { success, data }
                        return { success, errorMessage: error_msg}

                    } catch (error: unknown) {
                        return { success: false, error_msg: error }
                    }
                }
            }
        ]
    }
]

export const router = createBrowserRouter(routes)