import { FaRegCircleCheck } from 'react-icons/fa6';
import s from './FeaturesCarList.module.css';

const FeaturesCarList = ({ title, items }) => {
    return (
        <div className={s.listContainer}>
            <h3 className={s.subtitle}>{title}</h3>
            <ul className={s.list}>
                {items.map((text, index) => (
                    <li className={s.item} key={index}>
                        <FaRegCircleCheck />
                        <p>{text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeaturesCarList;
