import UiExampleBody from "./body";


function UiExample1({children}) {
    return (
        <div className="con1__body flex-1 ui-ex p-5">
            {children}
            <UiExampleBody>123123</UiExampleBody>
        </div>
    )

}

export default UiExample1;