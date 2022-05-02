import UiExampleBody from "./body";
// import { useState } from "react";
import UiExampleTit from "../common/tit";
import {comaNumber} from 'utils/etcUtils'

function UiExample1() {
    // const [count] = useState(20000);
    const count = 20000
    return (
        <div className="con1__body flex-1 p-5 rounded-md" style={{backgroundColor:'#bbd4fc'}}>
            <UiExampleTit>Right UI</UiExampleTit>
            <UiExampleBody>{comaNumber(count)}</UiExampleBody>
        </div>
    )

}

export default UiExample1;