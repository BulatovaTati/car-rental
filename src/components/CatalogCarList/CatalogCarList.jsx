import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import CatalogCarItem from './CatalogCarItem/CatalogCarItem';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { selectAllCars, selectError } from '../../redux/cars/selectors';

import s from './CatalogCarList.module.css';

const CatalogCarList = () => {
    const cars = useSelector(selectAllCars);

    const error = useSelector(selectError);
    const firstCardRef = useRef(null);

    useEffect(() => {
        if (cars.length > 12) {
            const { height: cardHeight } = firstCardRef.current.getBoundingClientRect();
            window.scrollBy({
                top: cardHeight,
                behavior: 'smooth',
            });
        }
    }, [cars]);

    if (error) {
        return <ErrorMessage message="Stm went wrong, please try reloading the page" />;
    }

    if (cars.length === 0) {
        return <ErrorMessage message="Opps there is any car found" />;
    }

    return (
        <>
            <ul className={s.carsList}>
                {cars.map((car, idx) => (
                    <CatalogCarItem key={`${car.id + idx}`} car={car} ref={idx === 0 ? firstCardRef : null} />
                ))}
            </ul>
            <LoadMoreBtn />
        </>
    );
};

export default CatalogCarList;
