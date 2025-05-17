import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import CatalogCarList from '../../components/CatalogCarList/CatalogCarList';
import SelectFilters from '../../components/SelectFilters/SelectFilters';
import Loader from '../../components/Loader/Loader';

import { selectIsLoading, selectPage } from '../../redux/cars/selectors';
import { getAllCars, getCarsBrands } from '../../redux/cars/operations';
import { resetFilters } from '../../redux/filters/slice';

const CatalogPage = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(selectPage);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(resetFilters());
        dispatch(getAllCars({ page: currentPage }));
    }, [dispatch, currentPage]);

    useEffect(() => {
        dispatch(getCarsBrands());
    }, [dispatch]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Section>
            <Container>
                <SelectFilters />
                <CatalogCarList />
            </Container>
        </Section>
    );
};

export default CatalogPage;
