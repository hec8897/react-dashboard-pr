const Title = ({ children, size }) => <h3 className={size}>{children}</h3>

Title.defaultProps = {
    size: 'text-xl'
}

export default Title;