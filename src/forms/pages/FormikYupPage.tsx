import { useFormik } from "formik"

import * as Yup from 'yup';

export const FormikYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last Name is required'),
            email: Yup.string().email('Invalid email').required('Email is required')
        })
    });

    return (
        <div>
            <h1>Formik Basic Form</h1>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    { ...getFieldProps('firstName') }
                    
                    
                />

                {
                    touched.firstName && errors.firstName &&
                    <span>{errors.firstName}</span>
                }

                <label htmlFor="lastName">Last name</label>
                <input
                    type="lastName"
                    { ...getFieldProps('lastName') }
                />

                {
                    touched.lastName && errors.lastName &&
                    <span>{errors.lastName}</span>
                }

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    { ...getFieldProps('email') }
                />

                {
                    touched.email && errors.email &&
                    <span>{errors.email}</span>
                }

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}