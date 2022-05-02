import { AiOutlineSearch, AiOutlineMenu, AiFillSetting } from "react-icons/ai";
import './LocalTit.scss'
function LocalTit({ children }) {
    const settingClick = () => {
        console.log('setting btn')
    }
    const searhClick = () => {
        console.log('searhClick')
    }
    const menuClick = () => {
        console.log('menuClick')
    }
    return (
        <div className="local__tit">
            <AiFillSetting size='24' className="cursor-pointer" onClick={settingClick} />
            <h2 className="text-xl">{children}</h2>
            <div className="local__tit__icons">
                <AiOutlineSearch size='24' className="cursor-pointer" onClick={searhClick} />
                <AiOutlineMenu size='24' className="cursor-pointer" onClick={menuClick} />
            </div>
        </div>
    )
}

export default LocalTit;