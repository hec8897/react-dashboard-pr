import LocalTit from "../components/common/LocalTit";
import UiExample1 from "../components/common/UiExample1";
import UiExampleTit from "../components/common/UiExample1/tit";
import UiExampleBody from "../components/common/UiExample1/body";
import LayoutMain from "../layouts/LayoutMain";
function MainPage() {
    return (
        <LayoutMain>
            <LocalTit>THIS IS PAGE</LocalTit>
            <div className="bg-white">
                <div className="main-content flex px-10 py-5">
                    <UiExample1>
                        <UiExampleTit>Left UI</UiExampleTit>
                        <UiExampleBody>123123</UiExampleBody>
                    </UiExample1>
                    <UiExample1>
                        <UiExampleTit>Right UI</UiExampleTit>
                        <UiExampleBody>123123</UiExampleBody>
                    </UiExample1>
                </div>
            </div>
        </LayoutMain>
    );
}

export default MainPage