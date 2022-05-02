import { NavLink } from 'react-router-dom';
import Title from 'components/atomic/Title'
import './index.scss';
import Links from './Links';

function CommonNav({ children }) {
    return (
        <nav className='nav'>
            <div className="nav__body">
                <Title size={"text-2xl"}>{children}</Title>
                <ul className="nav__body-lists mt-5">
                    <Links path='/'>Home</Links>
                    <NavLink to='/page1'>
                        <li className="nav__body-lists__list">
                            <span>User</span>
                        </li>
                    </NavLink>
                    <NavLink to='/page2'>
                        <li className="nav__body-lists__list">
                            <span>Board</span>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
}

export default CommonNav;