import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';

import '../styles/styles.css';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterPage = () => {
    


    return (
  
        <div>

            <h1>RegisterPage</h1>


            <Formik 
                
                initialValues = {{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}

                onSubmit = { values => {
                    console.log( values )
                }}

                validationSchema = { 
                    Yup.object({
                        name: Yup.string()
                                        .min(2,'Must be 2 characters or more')
                                        .max(15, 'Must be 15 characters or less')
                                        .required(),
                        email: Yup.string().email().required(),
                        password1: Yup.string()
                                        .min(6,'Must be 6 characters or more')
                                        .required(),
                        password2: Yup.string()
                                        .min(6,'Must be 6 characters or more')
                                        .oneOf([Yup.ref('password1')], 'Password1 and password2 must be equals')
                                        .required(),
                    })      
                }

            >
                {
                     ({ handleReset }) => (
                        <Form  noValidate >

                            <MyTextInput 
                                label={'Name'} 
                                name={'name'}
                                placeholder="Name"
                            />
                            <MyTextInput 
                                label={'Email'} 
                                name={'email'}
                                placeholder="Email"
                            />
                            <MyTextInput 
                                label={'Password'} 
                                name={'password1'}
                                placeholder="Password"
                                type="password"
                            />
                            <MyTextInput 
                                label={'Repeat Password'} 
                                name={'password2'}
                                placeholder="Repeat Password"
                                type="password"
                            />

                            <button type='submit'>Create</button>
                            <button type ='button' onClick={ handleReset }>Reset</button>
                            
                        </Form>
                     )
                }

            </Formik>
            
        </div>
    
    )
        
}
