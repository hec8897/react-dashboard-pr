import LocalTit from "components/molecules/LocalTit";
import UiExample1 from "components/oraganisms/UiExample1";
import UiExample2 from "components/oraganisms/UiExample2";
import AppNav from "components/layouts/Nav";
import AppBody from "components/layouts/body";
import UiExampleTit from "components/molecules/UiTit";

function LayoutMain() {
    const options = ['option1', 'option2'];
    return (
        <div className="main min-h-screen flex gap-1 bg-gray-100">
            <AppNav>
                THIS IS PAGE
            </AppNav>
            <div className="main__body flex-1 box-border py-5 pr-5">
                <div className="body h-full flex-col">
                    <LocalTit>THIS IS PAGE</LocalTit>
                    <AppBody>
                        <UiExample1 >
                            <UiExampleTit options={options} btnSearch={true}>Left UI</UiExampleTit>
                        </UiExample1>
                        <UiExample2>
                            <UiExampleTit>Right UI</UiExampleTit>
                        </UiExample2>
                    </AppBody>
                </div>
            </div>
        </div>
    )

}

export default LayoutMain;