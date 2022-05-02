const Select = ({ options,widthClass }) => {
    return (
        <select name="select_box" className={widthClass}>
            {options.map((ele, i) => <option value={ele} key={i}>{ele}</option>)}
        </select>
    )
}

Select.defaultProps = {
    widthClass:'w-1/4'
}

export default Select