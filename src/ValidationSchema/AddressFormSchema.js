import * as Yup from "yup";

export const AddressSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First Name is required')
        .min(2, 'First Name must be at least 2 characters')
        .max(50, 'First Name cannot exceed 50 characters'),
    lastName: Yup.string()
        .min(2, 'Last Name must be at least 2 characters')
        .max(50, 'Last Name cannot exceed 50 characters'),
    address1: Yup.string()
        .required('Address1 is required')
        .min(5, 'Address1 must be at least 5 characters')
        .max(50, 'Address1 cannot exceed 50 characters'),
    address2: Yup.string()
        .min(5, 'Address2 must be at least 5 characters')
        .max(50, 'Address2 cannot exceed 50 characters'),
    city: Yup.string()
        .required('City is required')
        .min(2, 'City must be at least 2 characters')
        .max(20, 'City cannot exceed 20 characters'),
    state: Yup.string()
        .required('State is required')
        .min(2, 'State must be at least 2 characters')
        .max(20, 'State cannot exceed 20 characters'),
    country: Yup.string()
        .required('Country is required')
        .min(2, 'Country must be at least 2 characters')
        .max(20, 'Country cannot exceed 20 characters'),
    telephone: Yup.string()
        .required('Telephone is required')
        .min(2, 'Telephone must be at least 2 characters')
        .max(20, 'Telephone cannot exceed 20 characters'),
});