import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../Loader/Loader';
import CarInfo from '../CarInfo/CarInfo';
import BookingForm from '../BookingForm/BookingForm';
import FeaturesCarList from '../FeaturesCarList/FeaturesCarList';
import CarSpecifications from '../CarSpecifications/CarSpecifications';

import { selectCarDetails, selectIsLoading } from '../../redux/cars/selectors';
import { getCarDetails } from '../../redux/cars/operations';

import s from './CarDetails.module.css';

const CarDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const car = useSelector(selectCarDetails);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(getCarDetails(id));
    }, [dispatch, id]);

    if (isLoading || !car) {
        return <Loader />;
    }

    return (
        <div className={s.wrapper}>
            <div>
                <img className={s.image} src={car.img} alt={car.model} />
                <BookingForm />
            </div>
            <div>
                <CarInfo car={car} />
                <div className={s.infoWrapper}>
                    <FeaturesCarList title="Rental Conditions:" items={car.rentalConditions} />
                    <CarSpecifications {...car} />
                    <FeaturesCarList title="Accessories and Functionalities:" items={[...car.accessories, ...car.functionalities]} />
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
