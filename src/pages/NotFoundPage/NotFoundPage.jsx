import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';

import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <Section>
            <Container>
                <p className={s.title}>Woops, the page does not exist</p>
            </Container>
        </Section>
    );
};

export default NotFoundPage;
