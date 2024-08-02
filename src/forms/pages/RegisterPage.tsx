import { FormEvent } from 'react'

import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

export const RegisterPage = () => {

    const { name, email, password1, password2, formData, onChange, isValidEmail, resetForm } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }


    return (
        <div>
            <h1> Register page </h1>
            
            <form noValidate onSubmit={  onSubmit }>
                <input
                    name='name'
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={onChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {
                    name.trim().length === 0 &&
                    <span>Este campo es obligatorio</span>
                }

                <input
                    name='email'
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />

                {
                    !isValidEmail(email) &&
                    <span>Invalid email</span>
                }

                <input
                    name='password1'
                    type="password"
                    placeholder="Password"
                    value={password1}
                    onChange={onChange}
                />

                {
                    password1.length < 6 &&
                    <span>Password must be at least 6 characters long</span>
                }
                {
                    password1.length <= 0 &&
                    <span>This field is required</span>
                }

                <input
                    name='password2'
                    type="password"
                    placeholder="Repeat password"
                    value={password2}
                    onChange={onChange}
                />
                {
                    password2.length < 6 &&
                    <span>Password must be at least 6 characters long</span>
                }
                {
                    password2.length <= 0 &&
                    <span>This field is required</span>
                }

                <button type="submit">Register</button>
                <button type="button" onClick={resetForm}>Reset</button>
            </form>
        </div>
    )
}