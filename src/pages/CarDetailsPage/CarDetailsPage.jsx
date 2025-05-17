import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import CarDetails from '../../components/CarDetails/CarDetails';

import s from './CarDetailsPage.module.css';

const CarDetailsPage = () => {
    const navigate = useNavigate();

    return (
        <Section>
            <Container>
                <button className={s.backBtn} onClick={() => navigate('/catalog')}>
                    <IoArrowBack className={s.backIcon} />
                </button>
                <CarDetails />
            </Container>
        </Section>
    );
};

export default CarDetailsPage;
