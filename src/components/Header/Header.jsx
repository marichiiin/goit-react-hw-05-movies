import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
    return (
        <header className={css.header}>
            <nav className={css.nav}>
                <NavLink
                    to="/"
                    end
                    // NavLink can accept an isActive parameter inside a callback function to apply dynamic styles to active links
                    className={({ isActive }) => (isActive ? css.linkActive : css.link)}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/movies"
                    className={({ isActive }) => (isActive ? css.linkActive : css.link)}
                >
                    Movies
                </NavLink>
            </nav>
        </header>
    );
};