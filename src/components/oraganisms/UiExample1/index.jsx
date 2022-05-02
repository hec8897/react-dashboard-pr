import UiExampleTit from "../../molecules/UiTit";
import UiExampleBody from "./body";


function UiExample1() {
    const options = ['option1', 'option2']
    return (
        <div className="con1__body flex-1 ui-ex p-5">
            <UiExampleTit options={options} btnSearch={true}>Left UI</UiExampleTit>
            <UiExampleBody>123123</UiExampleBody>
        </div>
    )

}

export default UiExample1;