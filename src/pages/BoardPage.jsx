import AppNav from "components/layouts/Nav";

function LayoutBord() {
    return (
        <div className="main min-h-screen flex gap-1 bg-gray-100">
            <AppNav />
            <div className="main__body flex-1 box-border py-5 pr-5">
                <div className="body h-full flex-col">
                    사용자페이지
                </div>
            </div>
        </div>
    )

}

export default LayoutBord;