import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';

function ContactForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required!'),
            email: Yup.string().email('Invalid Email!').required('Required!'),
            phone: Yup.string()
                .min(8, 'The length of a valid phone number is between 8-12!')
                .max(12, 'The length of a valid phone number is between 8-12!')
                .required('Required!'),
            message: Yup.string().required('Required!')
        }),
        onSubmit: (values) => {
            console.log({...values});
            alert('Add contact success');
        }
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h1>Contact Form</h1>
                <div>
                    <label>Name</label>
                    <input 
                        name='name'
                        id='name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type='text'
                    />
                    {formik.errors.name && formik.touched.name ? (
                        <p>{formik.errors.name}</p>
                    ) : (
                        null
                    )}
                </div>
                <div>
                    <label>Email</label>
                    <input 
                        name='email'
                        id='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type='text'
                    />
                    {formik.errors.email && formik.touched.email ? (
                        <p>{formik.errors.email}</p>
                    ) : (
                        null
                    )}
                </div>
                <div>
                    <label>Phone</label>
                    <input 
                        name='phone'
                        id='phone'
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type='text'
                    />
                    {formik.errors.phone && formik.touched.phone ? (
                        <p>{formik.errors.phone}</p>
                    ) : (
                        null
                    )}
                </div>
                <div>
                    <label>Message</label>
                    <input 
                        name='message'
                        id='message'
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type='text'
                    />
                    {formik.errors.message && formik.touched.message ? (
                        <p>{formik.errors.message}</p>
                    ) : (
                        null
                    )}
                </div>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default ContactForm;