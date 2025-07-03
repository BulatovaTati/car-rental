import Modal from 'react-modal';
import { MdCancel, MdDelete } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';
import { toggleFavoriteCar } from '../../redux/favorites/slice';

import s from './FavoritesModal.module.css';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

const FavoritesModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const favorites = useSelector(selectFavorites);

    const handleDelete = id => {
        onClose();
        dispatch(toggleFavoriteCar(id));
    };

    const handleNavigate = id => {
        onClose();
        navigate(`/catalog/${id}`);
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} preventScroll={false} className={s.modal} overlayClassName={s.overlay} shouldCloseOnOverlayClick={true}>
            <button onClick={onClose} className={s.cancelBtn}>
                <MdCancel />
            </button>
            <h2 className={s.title}>Your Favorite Cars</h2>

            {favorites.length === 0 ? (
                <p className={s.emptyMessage}>No favorites yet.</p>
            ) : (
                <ul className={s.favoritesList}>
                    {favorites.map(({ id, img, model, brand, year }) => (
                        <li key={id} className={s.carItem} onClick={() => handleNavigate(id)} tabIndex={0}>
                            <div className={s.imageWrapper}>
                                <img className={s.image} src={img} alt={`${brand} ${model}`} />
                                <span className={s.tooltip}>Click to read more</span>
                            </div>
                            <div className={s.titleContainer}>
                                <h2 className={s.brandTitle}>
                                    {brand} <span className={s.model}>{model}</span>, {year}
                                </h2>
                                <button
                                    onClick={e => {
                                        e.stopPropagation();
                                        handleDelete({ id });
                                    }}
                                    className={s.deleteBtn}
                                    aria-label={`Remove ${brand} ${model} from favorites`}
                                >
                                    <MdDelete size={24} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </Modal>
    );
};

export default FavoritesModal;
