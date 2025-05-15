import Section from '../Section/Section';
import Container from '../Container/Container';

import s from './ErroMessage.module.css';

const ErrorMessage = () => {
    return (
        <Section>
            <Container>
                <p className={s.errorMessage}>Stm went wrong, please try reloading the page</p>
            </Container>
        </Section>
    );
};

export default ErrorMessage;
