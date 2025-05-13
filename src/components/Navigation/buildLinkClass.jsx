import clsx from 'clsx';
import s from '../Navigation/Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
    return clsx(s.navLink, isActive && s.isActive);
};

export default buildLinkClass;
