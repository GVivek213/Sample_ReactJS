import React from 'react'
import { useFormik } from 'formik'
import './DemoFormik.css'

const initialValues = {
    name: '',
    email: '',
    channel: ''
}
const onSubmit = (values) => {
    console.log("Form Data", values)
}
const validate = (values) => {
    //values.name , values.email and values.channel
    let errors = {}
    if (!values.name) {
        errors.name = "Required"
    }
    if (!values.email) {
        errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email format"
    }
    if (!values.channel) {
        errors.channel = "Required"
    }
    return errors;
}
function DemoFormik() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,

    })

    console.log("form touched", formik.touched)
    return (
        <div className='demo'>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <lable htmlFor="name">Name</lable>
                    <input type='text' id="name"
                        name="name" onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name} />
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>
                <div className='form-control'>
                    <lable htmlFor="email">Email</lable>
                    <input type='text' id="email"
                        name="email" onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email} />
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>
                <div className='form-control'>
                    <lable htmlFor="channel">Channel</lable>
                    <input type='text' id="channel"
                        name="channel" onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.channel} />
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default DemoFormik
