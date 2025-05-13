import s from './Section.module.css';

const Section = ({ children, modClass }) => {
    return <section className={`${s.section} ${modClass}`}>{children}</section>;
};

export default Section;
