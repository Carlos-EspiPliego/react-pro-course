import { NavLink } from 'react-router-dom';
import ReactLogo from '../assets/react.svg';
import { AppRouter, routes } from '../router/AppRouter';

export const Navigation = () => {
    return (
        <div className='main-layout'>
            <nav>
                <img src={ReactLogo} alt='logo' />

                <ul>
                    {
                        routes.map((route) => (
                            <li key={route.path}>
                                <NavLink to={route.to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{route.name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <AppRouter />
        </div>
    )
}
