import { BsCalendar2Week, BsCarFront, BsFuelPump } from 'react-icons/bs';
import { GoGear } from 'react-icons/go';

import s from '../FeaturesCarList/FeaturesCarList.module.css';

const CarSpecifications = ({ year, type, fuelConsumption, engineSize }) => {
    const specs = [
        { icon: <BsCalendar2Week />, label: 'Year', value: year },
        { icon: <BsCarFront />, label: 'Type', value: type.charAt(0).toUpperCase() + type.slice(1).toLowerCase() },
        { icon: <BsFuelPump />, label: 'Fuel Consumption', value: fuelConsumption },
        { icon: <GoGear />, label: 'Engine Size', value: engineSize },
    ];

    return (
        <div className={s.listContainer}>
            <h3 className={s.subtitle}>Car Specifications:</h3>
            <ul className={s.list}>
                {specs.map((item, index) => (
                    <li key={index} className={s.item}>
                        {item.icon}
                        <p>
                            {item.label}: {item.value}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarSpecifications;
