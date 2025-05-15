import { forwardRef } from 'react';

import DatePicker from 'react-datepicker';
import s from '../BookingForm/BookingForm.module.css';

const DatePickerField = forwardRef(({ value, onChange }, ref) => {
    return <DatePicker selected={value} onChange={onChange} className={s.input} minDate={new Date()} dateFormat="d MMMM, yyyy" placeholderText="Booking date" ref={ref} />;
});

export default DatePickerField;
