import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First Name is required')
        .min(2, 'First Name must be at least 2 characters')
        .max(50, 'First Name cannot exceed 50 characters'),
    lastName: Yup.string()
        .min(2, 'Last Name must be at least 2 characters')
        .max(50, 'Last Name cannot exceed 50 characters'),
    phoneNumber: Yup.string()
        .required('Phone Number is required')
        .matches(/^[0-9]{10}$/, 'Phone Number must be exactly 10 digits'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});

export const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});
