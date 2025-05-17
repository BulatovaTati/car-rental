import { FaHeart } from 'react-icons/fa';
import FavoritesModal from '../FavoritesModal/FavoritesModal';
import s from './FavoritesButton.module.css';

const FavoritesButton = ({ onClick }) => {
    return (
        <button className={s.btn} onClick={onClick}>
            <FaHeart className={s.icon} />
        </button>
    );
};

export default FavoritesButton;
