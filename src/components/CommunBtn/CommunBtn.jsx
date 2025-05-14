import { Link } from 'react-router-dom';
import s from './CommunBtn.module.css';

const CommunBtn = ({ children, to, modClass }) => {
    return (
        <Link className={`${s.button} ${modClass}`} to={to}>
            {children}
        </Link>
    );
};

export default CommunBtn;
