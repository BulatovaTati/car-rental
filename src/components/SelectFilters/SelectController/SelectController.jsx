import { Controller } from 'react-hook-form';
import Select from 'react-select';

const SelectController = ({ name, control, options, placeholder, styles, formatOptionLabel = null }) => (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <Select
                {...field}
                options={options}
                placeholder={placeholder}
                styles={styles}
                isClearable
                formatOptionLabel={formatOptionLabel}
                value={options.find(option => option.value === field.value) || null}
                onChange={selected => field.onChange(selected ? selected.value : null)}
            />
        )}
    />
);

export default SelectController;
