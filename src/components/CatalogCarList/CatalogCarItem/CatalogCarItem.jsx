import { useDispatch } from 'react-redux';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';

import CommunBtn from '../../CommunBtn/CommunBtn';

import s from './CatalogCarItem.module.css';

const CatalogCarItem = ({ car }) => {
    const { id, year, brand, model, type, img, rentalPrice, address, rentalCompany, mileage } = car;

    const addressParts = address.split(', ').slice(1);

    return (
        <li className={s.carItem}>
            <img className={s.image} src={img} alt={`${brand} ${model}`} />
            <button type="button" className={s.buttonHeart}>
                <IoMdHeartEmpty className={s.disabled} />
            </button>
            <div className={s.titleContainer}>
                <h2 className={s.title}>
                    {brand} <span className={s.model}>{model}</span>, {year}
                </h2>
                <h2 className={s.title}>${rentalPrice}</h2>
            </div>

            <div className={s.info}>
                <p className={s.infoText}>
                    {addressParts.join(' | ')} | {rentalCompany} |
                </p>
                <p className={s.infoText}>
                    {type} | {mileage.toLocaleString('uk-UA')} km
                </p>
            </div>
            <CommunBtn modClass={s.readMoreBtn} to={`/catalog/${id}`}>
                Read more
            </CommunBtn>
        </li>
    );
};

export default CatalogCarItem;
