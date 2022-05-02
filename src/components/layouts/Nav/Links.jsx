import { NavLink } from 'react-router-dom';

const Navs = ({ children, path }) => {
    return (
        <NavLink to={path}>
            <li className='flex box-border'>
                <span className='flex-1 ml-3 text-xl whitespace-nowrap text-indigo-500'>{children}</span>
            </li>
        </NavLink>
    )

}

Navs.defaultProps = {
    path: '/'
}

export default Navs;