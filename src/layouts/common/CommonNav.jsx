import { NavLink } from 'react-router-dom';
import './CommonNav.scss';

function CommonNav() {
    return (
        <nav className='nav'>
            <div className="nav__body">
                <h1 className='nav__body-tit'>Lorem Ipsum</h1>
                <ul className="nav__body-lists">
                    <NavLink to='/'>
                        <li className='nav__body-lists__list'>
                            <span>Home</span>
                        </li>
                    </NavLink>
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