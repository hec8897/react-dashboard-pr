import { AiOutlineEllipsis, AiOutlineSearch } from "react-icons/ai";
import './index.scss'
import Select from 'components/atomic/Select'
import Title from 'components/atomic/Title'
import IconBtn from 'components/atomic/IconBtn'

function UiExampleTit({ children, options, btnSearch, btnMenu }) {
    return (
        <div className="ui-tit">
            <div className="ui-tit__section-left">
                {options ? <Select options={options}></Select> : ""}
                <Title>{children}</Title>
            </div>
            <div className="ui-tit__section-right ">
                {btnSearch ?
                    <IconBtn>
                        <AiOutlineSearch size='24' style={{ strokeWidth: "10px" }} />
                    </IconBtn>
                    : ""
                }
                {btnMenu ?
                    <IconBtn>
                        <AiOutlineEllipsis size='24' style={{ strokeWidth: "10px" }} />
                    </IconBtn>
                    : ""
                }
            </div>
        </div>
    )
}

UiExampleTit.defaultProps = {
    lists: null,
    btnSearch: false,
    btnMenu: true,
}


export default UiExampleTit;
