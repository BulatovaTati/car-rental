import 'react-datepicker/dist/react-datepicker.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import clsx from 'clsx';

import DatePickerField from '../DatePickerField/DatePickerField';
import { bookingValidationSchema } from '../../validations/bookingValidationForm';
import { showToast } from '../CustomToaster/CustomToaster';

import s from './BookingForm.module.css';

const BookingForm = () => {
    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(bookingValidationSchema),
        defaultValues: {
            name: '',
            email: '',
            bookingDate: null,
            comment: '',
        },
    });

    const onSubmit = async data => {
        try {
            showToast('success', 'Sending...');
            await new Promise(resolve => setTimeout(resolve, 1000));
            showToast('success', 'Form submitted successfully!');
            reset();
        } catch (e) {
            showToast('error', e?.message || 'Network Error!');
        }
    };

    return (
        <div className={s.box}>
            <h2 className={s.formTitle}>Book your car now</h2>
            <p className={s.formText}> Stay connected! We are always ready to help you.</p>

            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <div className={s.inputContainer}>
                    <input className={s.input} {...register('name')} type="text" placeholder="Name*" />
                    {errors.name && <p className={s.error}>{errors.name.message}</p>}{' '}
                </div>
                <div className={s.inputContainer}>
                    <input className={s.input} {...register('email')} type="text" placeholder="Email*" />
                    {errors.email && <p className={s.error}>{errors.email.message}</p>}
                </div>
                <div className={s.inputContainer}>
                    <Controller control={control} name="bookingDate" render={({ field }) => <DatePickerField {...field} />} />
                    {errors.bookingDate && <p className={s.error}>{errors.bookingDate.message}</p>}
                </div>
                <div className={s.inputContainer}>
                    <textarea className={clsx(s.input, s.comment)} {...register('comment')} placeholder="Comment" />
                    {errors.comment && <p className={s.error}>{errors.comment.message}</p>}{' '}
                </div>
                <button className={s.button} type="submit">
                    Send
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
