import { Outlet } from 'react-router'
import { Layout as AntLayout } from 'antd'
import LayoutAside from '@/pages/Layout/components/layout-aside.tsx'
const { Sider, Content } = AntLayout

const Layout = () => {
    return (
        <>
            <AntLayout className="h-full">
                <Sider>
                    <LayoutAside/>
                </Sider>

                <Content className="px-40 pt-32">
                    <Outlet />
                </Content>
            </AntLayout>
        </>
    )
}
export default Layout