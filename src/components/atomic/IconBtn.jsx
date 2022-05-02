const IconBtn = ({children}) => {
    return (
        <div className="cursor-pointer p-1 rounded hover:bg-slate-100 active:bg-slate-100 active:shadow-inner">
            {children}
        </div>
    )
}

export default IconBtn;