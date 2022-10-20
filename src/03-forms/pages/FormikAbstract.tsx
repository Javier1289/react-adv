import React from 'react';
import * as Yup from 'yup';
import  { Formik, Form } from 'formik';
import { MyTextInput, MySelect, MyCheckbox } from '../components/';
import '../styles/styles.css';


export const FormikAbstract = () => {
  
    return (
        <div>
            <h1>Formik Components Page</h1>

            <Formik
                 initialValues = {{
                    firstName:'',
                    lastName:'',
                    email:'',
                    terms: false,
                    jobType:''
                }}
                
                onSubmit = { values => {
                    console.log( values )
                }}

                validationSchema = { 
                    Yup.object({
                        firstName: Yup.string()
                                        .max(15, 'Must be 15 characters or less')
                                        .required(),
                        lastName: Yup.string()
                                        .max(10, 'Must be 10 characters or less')
                                        .required(),
                        email: Yup.string().email().required(),
                        terms: Yup.boolean()
                                    .oneOf([ true ], 'Must to accept Terms' ),
                        jobType: Yup.string()
                                    .notOneOf(['it-jr'], 'This options is not allowed')
                                    .required()
                         

                    })      
                }

            >

                {
                     formik => (
                        <Form  noValidate >

                            <MyTextInput 
                                label={'First Name'} 
                                name={'firstName'}
                                placeholder={'First name'} 
                            />

                            <MyTextInput 
                                label={'Last Name'} 
                                name={'lastName'}
                                placeholder={'Last name'} 
                            />

                            <MyTextInput 
                                label={'Email'} 
                                name={'email'}
                                placeholder={'jhon@domain.com'} 
                                type="email"
                            />
                            
                            
                            
                            <MySelect name="jobType" label="Job Type" >
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Jr.</option>
                            </MySelect>
                            

                            <MyCheckbox label='Terms and conditions' name={'terms'} />
                            
                            
                            <button type='submit'>Submit</button>
                        
                        </Form>
                     )
                }
            </Formik>

            
        </div>
  )
}
