import LocalTit from "../components/molecules/LocalTit";
import UiExample1 from "../components/oraganisms/UiExample1";
import UiExample2 from "../components/oraganisms/UiExample2";
import LayoutMain from "../layouts/LayoutMain";
function MainPage() {
    return (
        <LayoutMain>
            <LocalTit>THIS IS PAGE</LocalTit>
            <div className="bg-white">
                <div className="main-content flex px-10 py-5">
                    <UiExample1 />
                    <UiExample2 />
                </div>
            </div>
        </LayoutMain>
    );
}

export default MainPage