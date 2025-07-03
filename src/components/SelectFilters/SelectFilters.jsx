import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../Loader/Loader';
import SelectController from './SelectController/SelectController';
import MileageInputController from './MileageInputController/MileageInputController';

import { selectCarsBrands, selectIsLoading } from '../../redux/cars/selectors';
import { addFilters, resetFilters } from '../../redux/filters/slice';
import { selectFilters } from '../../redux/filters/selectors';

import { customStylesBrand } from './customStylesBrand';
import { customStylesPrice } from './customStylesPrice';
import s from './SelectFilters.module.css';

const SelectFilters = () => {
    const dispatch = useDispatch();
    const brands = useSelector(selectCarsBrands);
    const filters = useSelector(selectFilters);
    const isLoading = useSelector(selectIsLoading);

    const { control, handleSubmit, formState, reset } = useForm({
        defaultValues: filters,
    });

    const handleClear = () => {
        reset();
        dispatch(resetFilters());
    };

    const { dirtyFields } = formState;
    const isDisabled = Object.keys(dirtyFields).length === 0;
    const hasFilters = !isDisabled;

    const brandOptions = brands?.map(brand => ({ label: brand, value: brand })) || [];
    const priceOptions = [30, 40, 50, 60, 70, 80, 90, 100].map(price => ({
        label: price.toString(),
        value: price,
    }));

    const onSubmit = data => dispatch(addFilters(data));

    if (isLoading) {
        return <Loader />;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.filtersForm}>
            <div className={s.filterGroup}>
                <label className={s.label}>Car brand</label>
                <SelectController name="brand" control={control} options={brandOptions} placeholder="Choose a brand" styles={customStylesBrand} />
            </div>
            <div className={s.filterGroup}>
                <label className={s.label}>Price / 1 hour</label>
                <SelectController
                    name="price"
                    control={control}
                    options={priceOptions}
                    placeholder="Choose a price"
                    styles={customStylesPrice}
                    isClearable
                    formatOptionLabel={option => (control._formValues.price ? `To $${option.value}` : option.label)}
                />
            </div>
            <div className={s.filterGroup}>
                <label className={s.label}>Car mileage / km</label>
                <div className={s.mileageInputs}>
                    <div className={s.mileageInputGroup}>
                        <span className={s.mileageLabel}>From</span>
                        <MileageInputController name="mileageFrom" control={control} className={s.input} />
                    </div>
                    <div className={s.mileageInputGroup}>
                        <span className={s.mileageLabel}>To</span>
                        <MileageInputController name="mileageTo" control={control} className={s.input} />
                    </div>
                </div>
            </div>
            <div className={s.btnContainer}>
                <button type="submit" className={s.button} disabled={isDisabled}>
                    Search
                </button>
                {hasFilters && (
                    <button type="button" className={s.button} onClick={handleClear}>
                        Clear
                    </button>
                )}
            </div>
        </form>
    );
};

export default SelectFilters;
