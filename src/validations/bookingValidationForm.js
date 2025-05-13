const bookingValidationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string()
        .email('Must be a valid email!')
        .required('Required')
        .matches(/^(?!.*\.ru$)(?=.*@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Must be a valid email!'),
    bookingDates: Yup.array().of(Yup.date().required('Required')).min(2, 'Please select a start and end date'),
    comment: Yup.string().max(50, 'Too Long!'),
});
