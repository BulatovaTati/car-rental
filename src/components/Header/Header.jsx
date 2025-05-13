import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <header className={s.header}>
            <Container>
                <Logo />
                <nav>
                    <Navigation />
                </nav>
            </Container>
        </header>
    );
};

export default Header;
