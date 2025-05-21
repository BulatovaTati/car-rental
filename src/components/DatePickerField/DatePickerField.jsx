import { forwardRef } from 'react';

import DatePicker from 'react-datepicker';
import s from '../BookingForm/BookingForm.module.css';
import css from './DatePickerField.module.css';

const DatePickerField = forwardRef(({ value, onChange }, ref) => {
    return (
        <DatePicker
            selected={value}
            onChange={onChange}
            className={s.input}
            shouldCloseOnSelect={true}
            wrapperClassName={css.datepickerWrapper}
            minDate={new Date()}
            formatWeekDay={day => day.toUpperCase().slice(0, 3)}
            dateFormat="d MMMM, yyyy"
            placeholderText="Booking date*"
            ref={ref}
        />
    );
});

export default DatePickerField;
