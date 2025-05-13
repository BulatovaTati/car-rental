import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <Container modClass={s.headerContainer}>
                <Logo />
                <Navigation />
            </Container>
        </header>
    );
};

export default Header;
