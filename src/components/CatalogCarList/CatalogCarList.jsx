import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import CatalogCarItem from './CatalogCarItem/CatalogCarItem';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErroMessage/ErroMessage';

import { selectAllCars, selectError, selectIsLoading } from '../../redux/cars/selectors';

import s from './CatalogCarList.module.css';

const CatalogCarList = () => {
    const cars = useSelector(selectAllCars);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const firstCardRef = useRef(null);

    useEffect(() => {
        if (cars.length > 12) {
            const { height: cardHeight } = firstCardRef.current.getBoundingClientRect();
            window.scrollBy({
                top: cardHeight * 2,
                behavior: 'smooth',
            });
        }
    }, [cars]);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorMessage />;
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
