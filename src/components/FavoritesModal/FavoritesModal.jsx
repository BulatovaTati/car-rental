import Modal from 'react-modal';
import { MdCancel } from 'react-icons/md';

import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';

import s from './FavoritesModal.module.css';

Modal.setAppElement('#root');

const FavoritesModal = ({ isOpen, onClose }) => {
    const favorites = useSelector(selectFavorites);

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} aria-modal="true" className={s.modal} overlayClassName={s.overlay} shouldCloseOnOverlayClick={true}>
            <button onClick={onClose} className={s.cancelBtn}>
                <MdCancel />
            </button>
            <h2 className={s.title}>Your Favorite Cars</h2>
            <div className={s.favoritesList}>
                {favorites.length === 0 ? (
                    <p>No favorites yet.</p>
                ) : (
                    favorites.map(({ id, img, model, brand, year, rentalPrice }) => (
                        <div key={id} className={s.carItem}>
                            <img className={s.image} src={img} alt={`${brand} ${model}`} />
                            <div className={s.titleContainer}>
                                <h2 className={s.title}>
                                    {brand} <span className={s.model}>{model}</span>, {year}
                                </h2>
                                <h2 className={s.title}>${rentalPrice}</h2>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </Modal>
    );
};

export default FavoritesModal;
