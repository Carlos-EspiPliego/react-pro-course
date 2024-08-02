import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import formJson from '../data/custom-form.json';
import { MyCheckbox, MySelect, MyTextInput } from '../components';


const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if ( !input.validations ) continue;

    let schema = Yup.string();

    for ( const rule of input.validations ) {
        if ( rule.type === 'required' ) {
            schema = schema.required("This field is required");
        }

        if ( rule.type === 'email' ) {
            schema = schema.email("Invalid email");
        }

        if ( rule.type === 'minLength' ) {
            schema = schema.min(rule.value, `This field must be at least ${rule.value} characters long`);
        }

        if ( rule.type === 'maxLength' ) {
            schema = schema.max(rule.value, `This field must be at most ${rule.value} characters long`);
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object(requiredFields);

export const DynamicForm = () => {

    return (
        <div>
            <h1> Dynamic Form </h1>

            <Formik
                initialValues={initialValues}
                validationSchema={ validationSchema }
                onSubmit={(values) => {
                    console.log(values)
                }}


            >
                {
                    ({ handleReset }) => (
                        <Form noValidate>
                            {
                                formJson.map(({ label, name, type, placeholder, options }) => {

                                    if (type === 'select') {
                                        return (
                                            <MySelect
                                                key={name}
                                                label={label}
                                                name={name}
                                            >
                                                <option value="">Select an option</option>
                                                {
                                                    options?.map((option) => (
                                                        <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))
                                                }
                                            </MySelect>
                                        )
                                    } else if (type === 'text' || type === 'email' || type === 'password') {

                                        return (
                                            <MyTextInput
                                                key={name}
                                                label={label}
                                                name={name}
                                                type={type as any}
                                                placeholder={placeholder}
                                            />
                                        )
                                    } else if (type === 'checkbox') {
                                        return (
                                            <MyCheckbox
                                                key={name}
                                                label={label}
                                                name={name}
                                            />
                                        )
                                    }
                                })
                            }
                            <button type="submit">Submit</button>
                            <button type="button" onClick={handleReset}>Reset</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}