import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CarInfo from '../CarInfo/CarInfo';

import { selectCarDetails, selectIsLoading } from '../../redux/cars/selectors';
import { getCarDetails } from '../../redux/cars/operations';

import s from './CarDetails.module.css';

const CarDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const car = useSelector(selectCarDetails);

    const loader = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(getCarDetails(id));
    }, [dispatch, id]);

    return (
        <div className={s.wrapper}>
            <div>
                <img className={s.image} src={car.img} alt={car.model} />
                {/* <BookingForm /> */}
            </div>
            <div>
                <CarInfo car={car} />
                <div className={s.infoWrapper}>
                    {/* <RentalConditions conditions={car.rentalConditions} />
                    <Specifications year={car.year} type={s.type} fuelConsumption={car.fuelConsumption} engineSize={car.engineSize} />
                    <Accessories accessories={car.accessories} functionalities={car.functionalities} /> */}
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
