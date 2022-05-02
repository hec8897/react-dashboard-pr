const Title = ({ children, size, color }) => <h3 className={size} style={{color}}>{children}</h3>

Title.defaultProps = {
    size: 'text-xl',
    color:'#444'
}

export default Title;