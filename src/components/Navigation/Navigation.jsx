import { NavLink } from 'react-router-dom';
import buildLinkClass from './buildLinkClass';

const Navigation = () => {
    return (
        <>
            <NavLink to="/" className={buildLinkClass}>
                Home
            </NavLink>
            <NavLink to="/catalog" className={buildLinkClass}>
                Catalog
            </NavLink>
        </>
    );
};

export default Navigation;
