import { Formik, Field, Form, ErrorMessage } from "formik"

import * as Yup from 'yup';

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={values => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().required('First Name is required'),
                    lastName: Yup.string().required('Last Name is required'),
                    email: Yup.string().email('Invalid email').required('Email is required'),
                    terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
                    jobType: Yup.string().required('Job type is required')
                    .notOneOf(['designer', 'development'], 'Designer and Developer are not allowed')
                })}
            >
                {
                    () => (

                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name="firstName" component="span" />

                            <label htmlFor="lastName">Last name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName" component="span" />

                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email" component="span" />

                            <label>
                                <Field name="terms" type="checkbox" />
                                Terminos y condiciones
                            </label>
                            <ErrorMessage name="terms" component="span" />

                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select">
                                <option value="">Select a job type</option>
                                <option value="designer">Designer</option>
                                <option value="development">Developer</option>
                                <option value="product">Product Manager</option>
                                <option value="other">Other</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span" />


                            <button type="submit">Submit</button>
                        </Form>
                    )
                }

            </Formik>

        </div>
    )
}