import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import CommunBtn from '../../components/CommunBtn/CommunBtn';

import s from './HomePage.module.css';

const HomePage = () => {
    return (
        <Section modClass={s.hero}>
            <Container modClass={s.heroContainer}>
                <h1 className={s.title}>Find your perfect rental car</h1>
                <p className={s.text}>Reliable and budget-friendly rentals for any journey</p>
                <CommunBtn to="/catalog">View Catalog</CommunBtn>
            </Container>
        </Section>
    );
};

export default HomePage;
