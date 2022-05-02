import { AiOutlineSearch, AiOutlineMenu, AiFillSetting } from "react-icons/ai";
import './index.scss'
import Title from 'components/atomic/Title'
import IconBtn from 'components/atomic/IconBtn'

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
            <IconBtn>
                <AiFillSetting size='24' className="cursor-pointer" onClick={settingClick} />
            </IconBtn>
            <Title size={"text-xl"}>{children}</Title>
            <div className="local__tit__icons">
                <IconBtn>
                    <AiOutlineSearch size='24' className="cursor-pointer" onClick={searhClick} />
                </IconBtn>
                <IconBtn>
                    <AiOutlineMenu size='24' className="cursor-pointer" onClick={menuClick} />
                </IconBtn>
            </div>
        </div>
    )
}

export default LocalTit;