import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import CatalogCarList from '../../components/CatalogCarList/CatalogCarList';

import { selectError, selectPage, selectTotalPages } from '../../redux/cars/selectors';
import { getAllCars } from '../../redux/cars/operations';

const CatalogPage = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(selectPage);

    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(getAllCars(currentPage));
    }, [dispatch, currentPage]);

    return (
        <Section>
            <Container>
                <CatalogCarList />
            </Container>
        </Section>
    );
};

export default CatalogPage;
