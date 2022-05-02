const AppBody = ({ children }) => {
    return (
        <div className="bg-white">
            <div className="main-content flex px-10 py-5">
                {children}
            </div>
        </div>
    )
}

export default AppBody