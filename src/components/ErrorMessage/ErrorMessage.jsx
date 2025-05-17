import Section from '../Section/Section';
import Container from '../Container/Container';

import s from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
    return (
        <Section>
            <Container>
                <p className={s.errorMessage}>{message}</p>
            </Container>
        </Section>
    );
};

export default ErrorMessage;
