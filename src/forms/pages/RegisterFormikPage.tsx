import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { MyTextInput } from '../components';

import '../styles/styles.css'

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1> Register Formik Page </h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('This field is required'),
                    email: Yup.string().email('Invalid email').required('This field is required'),
                    password1: Yup.string().min(6, 'Password must be at least 6 characters long').required('This field is required'),
                    password2: Yup.string().min(6, 'Password must be at least 6 characters long').required('This field is required')
                    .oneOf([Yup.ref('password1')], 'Passwords must match')
                })}
            >

                {
                    ({handleReset}) => (
                        <Form>
                            <MyTextInput
                                label="Name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                            />
                            
                            <MyTextInput
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                            />

                            <MyTextInput
                                label="Password"
                                name="password1"
                                type="password"
                                placeholder="Enter your password"
                            />

                            <MyTextInput
                                label="Confirm password"
                                name="password2"
                                type="password"
                                placeholder="Confirm your password"
                            />

                            <button type="submit">Register</button>
                            <button type="button" onClick={handleReset}>Reset</button>
                        </Form>
                    )
                }

            </Formik>
            
            

        </div>
    )
}