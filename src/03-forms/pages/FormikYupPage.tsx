import React from 'react';
import * as Yup from 'yup';
import  { useFormik } from 'formik';

import '../styles/styles.css';


export const FormikYupPage = () => {
  
    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:''
        },
        onSubmit: values => {
            console.log( values )
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required(),
            lastName: Yup.string()
                            .max(10, 'Must be 10 characters or less')
                            .required(),
            email: Yup.string().email().required()
        })
    })
  
    return (
        <div>
            <h1>Formik Yup Page</h1>


            <form onSubmit={ handleSubmit } noValidate >

                <label htmlFor="firstName"> First Name </label>
                <input 
                    type="text"
                    { ...getFieldProps('firstName') }  
                />
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

                <label htmlFor="lastName"> Last Name </label>
                <input 
                    type="text"
                    { ...getFieldProps('lastName') }
                />
                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}



                <label htmlFor="email"> Email Address </label>
                <input 
                    type="text"
                    { ...getFieldProps('email') }
                />
                { touched.email && errors.email && <span>{ errors.email }</span>}

                <button type='submit'>Submit</button>
            </form>
        </div>
  )
}
