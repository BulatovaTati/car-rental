import * as Yup from 'yup';

export const bookingValidationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Name is required'),
    email: Yup.string()
        .email('Must be a valid email!')
        .required('Email is required')
        .matches(/^(?!.*\.ru$)(?=.*@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Must be a valid email!'),
    bookingDate: Yup.date().required('Booking date is required'),
    comment: Yup.string().max(200, 'Too Long!'),
});
