import { SlLocationPin } from 'react-icons/sl';

import s from './CarInfo.module.css';

const CarInfo = ({ car }) => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <h2 className={s.title}>
                    {car.brand} {car.model}, {car.year}
                </h2>
                <p className={s.id}>Id: {car.id}</p>
            </div>
            <div className={s.textWrapper}>
                <div className={s.addressWrapper}>
                    <SlLocationPin />
                    <p className={s.address}>{car.address.split(', ').slice(1).join(', ')}</p>
                </div>
                <p className={s.mileage}>Mileage: {car.mileage}</p>
            </div>
            <p className={s.price}>${car.rentalPrice}</p>
            <p className={s.description}>{car.description}</p>
        </div>
    );
};
export default CarInfo;
