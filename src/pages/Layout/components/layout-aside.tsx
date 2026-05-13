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
        <>
            <div className="aside-container h-full">
                <div className="logo px-16 py-12 leading-22 text-left border-b-solid border-b-[#0505050f] border-b-1">
                    <img src={LogoPng} alt="logo" className="w-32 h-32" />
                    <span className="logo-text">测试篇</span>
                </div>
                <div>
                    <Menu
                        openKeys={ openKey }
                        selectedKeys={ selectedKey }
                        items={ menus }
                    >
                    </Menu>
                </div>
            </div>
        </>
    )
}

export default LayoutAside;