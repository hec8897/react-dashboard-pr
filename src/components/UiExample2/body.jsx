function UiExampleBody({ children }) {
    return (
        <div className="ui-ex__body p-10">
            <div className="body__count flex justify-center">
                <span className="text-5xl">
                    &#x20a9; {children}
                </span>
            </div>
        </div>
    )
}

export default UiExampleBody;
