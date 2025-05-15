import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import CatalogCarList from '../../components/CatalogCarList/CatalogCarList';
import Loader from '../../components/Loader/Loader';

import { selectError, selectIsLoading, selectPage } from '../../redux/cars/selectors';
import { getAllCars } from '../../redux/cars/operations';

const CatalogPage = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(selectPage);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(getAllCars(currentPage));
    }, [dispatch, currentPage]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Section>
            <Container>
                <CatalogCarList />
            </Container>
        </Section>
    );
};

export default CatalogPage;
