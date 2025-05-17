import s from '../CatalogCarItem.module.css';

const CarInfo = ({ address, rentalCompany, type, mileage }) => {
    const addressParts = address.split(', ').slice(1);

    return (
        <div className={s.info}>
            <p className={s.infoText}>
                {addressParts.join(' | ')} | {rentalCompany} |
            </p>
            <p className={s.infoText}>
                {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()} | {mileage.toLocaleString('uk-UA')} km
            </p>
        </div>
    );
};

export default CarInfo;
