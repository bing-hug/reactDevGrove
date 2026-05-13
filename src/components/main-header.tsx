import { Button } from 'antd'

const MainHeader = ({ icon = '', title = '开心每一天', buttonText = '添加任务' }) => {
    const handleClick = () => console.log('click')
    return (
        <>
            <header className="home-header flex justify-between items-center bg-white p-16 rounded-10">
                <div className="home-header-title flex gap-20 items-center leading-48">
                    <img src={ icon } alt="icon" className="h-48" />
                    <div className="font-24 font-bold theme-color">{ title }</div>
                </div>
                <Button type="primary" onClick={ handleClick }>{ buttonText }</Button>
            </header>
        </>
    )
}
export default MainHeader