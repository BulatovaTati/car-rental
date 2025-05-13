import { NavLink } from 'react-router-dom';
import buildLinkClass from './buildLinkClass';
import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={s.navList}>
            <NavLink to="/" className={buildLinkClass}>
                Home
            </NavLink>
            <NavLink to="/catalog" className={buildLinkClass}>
                Catalog
            </NavLink>
        </nav>
    );
};

export default Navigation;
