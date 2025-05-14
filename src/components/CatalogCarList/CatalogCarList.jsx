import { useSelector } from 'react-redux';

import CatalogCarItem from './CatalogCarItem/CatalogCarItem';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

import { selectAllCars, selectError, selectIsLoading, selectPage, selectTotalPages } from '../../redux/cars/selectors';

import s from './CatalogCarList.module.css';

const CatalogCarList = () => {
    const cars = useSelector(selectAllCars);
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    return (
        <>
            <ul className={s.carsList}>
                {cars.map(car => (
                    <CatalogCarItem key={car.id} car={car} />
                ))}
            </ul>
            <LoadMoreBtn />
        </>
    );
};

export default CatalogCarList;
