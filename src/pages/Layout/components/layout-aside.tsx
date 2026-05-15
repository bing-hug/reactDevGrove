import { Menu } from 'antd'
import { useImmer } from 'use-immer'
import LogoPng from '@/assets/logo.png'

const menus = [
    {
        label: 'Home',
        key: 'home',
        icon: 'icon',
        title: 'title'
    },
    {
        label: 'Plan',
        key: 'plan',
        icon: 'icon',
        title: 'title'
    }
]

const LayoutAside = () =>{
    const [ openKey ] = useImmer<string[]>(['home'])
    const [ selectedKey ] = useImmer<string[]>(['home'])

    return (
        <div className="h-full border-r border-solid border-gray-200/50 bg-white">
            <div className="flex items-center gap-10 px-16 py-14 border-b border-solid border-gray-200/50">
                <img src={LogoPng} alt="logo" className="w-32 h-32" />
                <span className="font-16 font-semibold text-gray-800">测试篇</span>
            </div>
            <Menu
                openKeys={ openKey }
                selectedKeys={ selectedKey }
                items={ menus }
            />
        </div>
    )
}

export default LayoutAside;