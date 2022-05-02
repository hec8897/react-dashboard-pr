import { AiOutlineEllipsis, AiOutlineSearch } from "react-icons/ai";

import './tit.scss'

function UiExampleTit({ children, options, btnSearch, btnMenu }) {
    return (
        <div className="ui-tit">
            <div className="ui-tit__section-left">
                {
                    options ?
                        <select name="select_box" className="w-1/4">
                            {options.map((ele, i) => <option value={ele} key={i}>{ele}</option>)}
                        </select> : ""
                }

                <h3 className="text-xl">{children}</h3>
            </div>
            <div className="ui-tit__section-right ">
                <div className="ui-tit__section-right__btn">
                    {btnSearch ? <AiOutlineSearch size='24' style={{ strokeWidth: "10px" }} /> : ""}
                    {btnMenu ? <AiOutlineEllipsis size='24' style={{ strokeWidth: "10px" }} /> : ""}
                </div>
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
