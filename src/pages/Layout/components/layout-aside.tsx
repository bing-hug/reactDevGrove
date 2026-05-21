import { useNavigate, useLocation } from 'react-router'
import { Menu } from 'antd'
import LogoPng from '@/assets/logo.png'
import { routes } from '@/router'
import { Icon } from '@iconify/react'

const LayoutAside = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const menuItems = routes[0].children.map((route) => ({
        key: route.handle?.key,
        label: route.handle?.title,
        icon: <Icon icon={route.handle?.icon} />,
        path: route.index ? '/' : route.path,
    }))

    const selectedKey = (() => {
        const route = routes[0].children.find((r) => {
            if (r.index) return location.pathname === '/'
            return r.path && location.pathname.includes(r.path)
        })
        return route?.handle?.key || 'home'
    })()

    return (
        <div className="h-full border-r border-solid border-gray-200/50 bg-white">
            <div className="flex items-center gap-10 px-16 py-14 border-b border-solid border-gray-200/50">
                <img src={LogoPng} alt="logo" className="w-32 h-32" />
                <span className="font-16 font-semibold text-gray-800">测试篇</span>
            </div>
            <Menu
                selectedKeys={[selectedKey]}
                items={menuItems}
                onClick={({ key }) => {
                    const item = menuItems.find((m) => m.key === key)
                    if (item?.path) navigate(item.path)
                }}
            />
        </div>
    )
}

export default LayoutAside;