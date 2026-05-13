import { Outlet } from 'react-router'
import { Layout as AntLayout } from 'antd'
import LayoutAside from '@/pages/Layout/components/layout-aside.tsx'
const { Sider, Content } = AntLayout

const Layout = () => {
    return (
        <>
            <AntLayout className="h-full">
                <Sider>
                    <div className="pr-8 border-r-1 border-r-solid border-r-[#0505050f] bg-transparent">
                        <LayoutAside/>
                    </div>
                </Sider>

                <Content className="px-40 pt-32">
                    <Outlet />
                </Content>
            </AntLayout>
        </>
    )
}
export default Layout