import { FormikErrors, useFormik } from "formik"

interface FormValues {
    firstName: string,
    lastName: string,
    email: string
}

export const FormikBasicPage = () => {

    const validate = ({ firstName, lastName, email }: FormValues) => {
        const errors: FormikErrors<FormValues> = {};

        if (!firstName) {
            errors.firstName = 'Required';
        } else if (firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!lastName) {
            errors.lastName = 'Required';
        } else if (lastName.length > 20) {
            errors.lastName = 'Must be 20 characters or less';
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validate
    });

    return (
        <div>
            <h1>Formik Basic Form</h1>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    name='firstName'
                    type="text"
                    placeholder="Name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                />

                {
                    touched.firstName && errors.firstName &&
                    <span>{errors.firstName}</span>
                }

                <label htmlFor="lastName">Last name</label>
                <input
                    name='lastName'
                    type="lastName"
                    placeholder="Last Name"
                    onBlur={handleBlur}
                    value={values.lastName}
                    onChange={handleChange}
                />

                {
                    touched.lastName && errors.lastName &&
                    <span>{errors.lastName}</span>
                }

                <label htmlFor="email">Email</label>
                <input
                    name='email'
                    type="email"
                    placeholder="Email"
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
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