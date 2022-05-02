import CommonNav from "./common/CommonNav";
import './LayoutMain.scss';

function LayoutMain({ children }) {
    return (
        <div className="main min-h-screen flex gap-1">
            <CommonNav />
            <div className="main__body flex-1">
                <div className="body h-full flex-col">
                    {children}
                </div>
            </div>
        </div>
    )

}

export default LayoutMain;