import { Link } from 'react-router-dom';
import logo from '../../../public/RentalCarLogo.svg';
import s from './Logo.module.css';

const Logo = () => {
    return (
        <>
            <Link className={s.logo} to="/">
                <img src={logo} alt="Rental Car Logo" />
            </Link>
        </>
    );
};

export default Logo;
