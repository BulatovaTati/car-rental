import { Link } from 'react-router-dom';
import s from './CommunBtn.module.css';

const CommunBtn = ({ children, to }) => {
    return (
        <Link className={s.button} to={to}>
            {children}
        </Link>
    );
};

export default CommunBtn;
