import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import CatalogCarList from '../../components/CatalogCarList/CatalogCarList';
import SelectFilters from '../../components/SelectFilters/SelectFilters';
import Loader from '../../components/Loader/Loader';
import FavoritesButton from '../../components/FavoritesButton/FavoritesButton';
import FavoritesModal from '../../components/FavoritesModal/FavoritesModal';

import { selectIsLoading, selectPage } from '../../redux/cars/selectors';
import { getAllCars, getCarsBrands } from '../../redux/cars/operations';
import { resetFilters } from '../../redux/filters/slice';
import { selectFilters } from '../../redux/filters/selectors';

const CatalogPage = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(selectPage);
    const filters = useSelector(selectFilters);
    const isLoading = useSelector(selectIsLoading);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        dispatch(
            getAllCars({
                brand: filters.brand || undefined,
                rentalPrice: filters.price || undefined,
                minMileage: filters.mileageFrom || undefined,
                maxMileage: filters.mileageTo || undefined,
                page: currentPage,
            })
        );
    }, [dispatch, currentPage, JSON.stringify(filters)]);

    useEffect(() => {
        dispatch(resetFilters());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getCarsBrands());
    }, [dispatch]);

    if (isLoading) {
        return <Loader />;
    }

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            <Section>
                <Container>
                    <SelectFilters />
                    <CatalogCarList />
                </Container>
            </Section>
            <FavoritesButton onClick={handleOpenModal} />
            <FavoritesModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    );
};

export default CatalogPage;
