import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

import NumericFormatInput from '../NumericFormatInput/NumericFormatInput';

import { selectCarsBrands } from '../../redux/cars/selectors';
import { addFilters } from '../../redux/filters/slice';

import s from './SelectFilters.module.css';
import { customStylesBrand } from './customStylesBrand.js';
import { customStylesPrice } from './customStylesPrice.js';

const SelectFilters = () => {
    const dispatch = useDispatch();
    const brands = useSelector(selectCarsBrands);

    const { control, handleSubmit, watch } = useForm({
        defaultValues: {
            brand: '',
            price: null,
            mileageFrom: null,
            mileageTo: null,
        },
    });

    const price = watch('price');

    const brandOptions = brands?.map(brand => ({ label: brand, value: brand })) || [];
    const priceOptions = [30, 40, 50, 60, 70, 80, 90, 100].map(price => ({
        label: price.toString(),
        value: price,
    }));

    const onSubmit = data => {
        console.log('data: ', data);
        dispatch(addFilters(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.filtersForm}>
            <div className={s.filterGroup}>
                <label className={s.label}>Car brand</label>
                <Controller
                    name="brand"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={brandOptions}
                            placeholder="Choose a brand"
                            isSearchable
                            styles={customStylesBrand}
                            value={brandOptions.find(option => option.value === field.value) || null}
                            onChange={selected => field.onChange(selected?.value || '')}
                        />
                    )}
                />
            </div>
            <div className={s.filterGroup}>
                <label className={s.label}>Price / 1 hour</label>
                <Controller
                    name="price"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={priceOptions}
                            styles={customStylesPrice}
                            getOptionLabel={option => option.label}
                            formatOptionLabel={option => (price ? `To $${option.value}` : option.label)}
                            value={priceOptions.find(option => option.value === field.value) || ''}
                            placeholder="Choose a price"
                            onChange={selected => field.onChange(selected?.value || '')}
                        />
                    )}
                />
            </div>
            <div className={s.filterGroup}>
                <label className={s.label}>Car mileage / km</label>
                <div className={s.mileageInputs}>
                    <div className={s.mileageInputGroup}>
                        <span className={s.mileageLabel}>From</span>
                        <Controller
                            name="mileageFrom"
                            control={control}
                            render={({ field }) => (
                                <NumericFormatInput
                                    value={field.value}
                                    onBlur={field.onBlur}
                                    name={field.name}
                                    thousandSeparator
                                    className={s.input}
                                    onValueChange={({ floatValue }) => {
                                        field.onChange(floatValue ?? null);
                                    }}
                                />
                            )}
                        />
                    </div>
                    <div className={s.mileageInputGroup}>
                        <span className={s.mileageLabel}>To</span>
                        <Controller
                            name="mileageTo"
                            control={control}
                            render={({ field }) => (
                                <NumericFormatInput
                                    value={field.value}
                                    onBlur={field.onBlur}
                                    name={field.name}
                                    thousandSeparator
                                    className={s.input}
                                    onValueChange={({ floatValue }) => {
                                        field.onChange(floatValue ?? null);
                                    }}
                                />
                            )}
                        />
                    </div>
                </div>
            </div>
            <button type="submit" className={s.button}>
                Search
            </button>
        </form>
    );
};

export default SelectFilters;
