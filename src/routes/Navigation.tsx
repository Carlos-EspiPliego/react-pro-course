import { NavLink } from 'react-router-dom';
import ReactLogo from '../assets/react.svg';
import { AppRouter } from '../router/AppRouter';

export const Navigation = () => {
    return (
        <div className='main-layout'>
            <nav>
                <img src={ReactLogo} alt='logo' />

                <ul>
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/users' className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                    </li>
                </ul>
            </nav>
            <AppRouter />
        </div>
    )
}
