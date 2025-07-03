import { Controller } from 'react-hook-form';
import NumericFormatInput from '../../NumericFormatInput/NumericFormatInput';

const MileageInputController = ({ name, control, className }) => (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <NumericFormatInput
                value={field.value}
                onBlur={field.onBlur}
                name={field.name}
                thousandSeparator
                className={className}
                onValueChange={({ floatValue }) => {
                    field.onChange(floatValue ?? null);
                }}
            />
        )}
    />
);

export default MileageInputController;
