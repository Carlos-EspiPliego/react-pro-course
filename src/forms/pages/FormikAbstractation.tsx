import { Formik, Form } from "formik"

import * as Yup from 'yup';
import { MyTextInput, MySelect, MyCheckbox } from "../components";

export const FormikAbstractation = () => {

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
                            <MyTextInput
                                label="First Name"
                                name="firstName"
                                placeholder="John"
                            />

                            <MyTextInput
                                label="Last Name"
                                name="lastName"
                                placeholder="Doe"
                            />

                            <MyTextInput
                                label="Email"
                                name="email"
                                placeholder=""
                            />

                            <MySelect label="Job Type" name="jobType">
                                <option value="">Select a job type</option>
                                <option value="designer">Designer</option>
                                <option value="development">Developer</option>
                                <option value="product">Product Manager</option>
                                <option value="other">Other</option>
                            </MySelect>

                            <MyCheckbox name="terms" label="Accept terms and conditions" />
                            
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }

            </Formik>

        </div>
    )
}