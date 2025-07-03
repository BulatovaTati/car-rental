import { forwardRef } from 'react';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

import CommunBtn from '../../CommunBtn/CommunBtn';
import CarInfo from './CarInfo/CarInfo';

import { selectFavorites } from '../../../redux/favorites/selectors';
import { toggleFavoriteCar } from '../../../redux/favorites/slice';

import s from './CatalogCarItem.module.css';

const CatalogCarItem = forwardRef(({ car }, ref) => {
    const favorites = useSelector(selectFavorites);

    const dispatch = useDispatch();

    const { id, year, brand, model, img, rentalPrice } = car;

    const handleIsFavorite = () => {
        dispatch(toggleFavoriteCar(car));
    };

    return (
        <li className={s.carItem} ref={ref}>
            <img className={s.image} src={img} alt={`${brand} ${model}`} loading="lazy" />
            <button type="button" className={s.buttonHeart} onClick={handleIsFavorite}>
                {favorites.some(favCar => favCar && favCar.id === id) ? <IoMdHeart className={s.active} /> : <IoMdHeartEmpty className={s.disabled} />}
            </button>
            <div className={s.titleContainer}>
                <h2 className={s.title}>
                    {brand} <span className={s.model}>{model}</span>, {year}
                </h2>
                <h2 className={s.title}>${rentalPrice}</h2>
            </div>
            <CarInfo {...car} />
            <CommunBtn modClass={s.readMoreBtn} to={`/catalog/${id}`}>
                Read more
            </CommunBtn>
        </li>
    );
});

export default CatalogCarItem;
