import React from 'react'
import { useRef, useState } from 'react'


const FormHandling = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const ageRef = useRef();
    const deptRef = useRef();
    const isAgreedRef = useRef();
    const [nameErr, setNameErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [deptErr, setDeptErr] = useState("")
    const [isAgreedErr, setIsAgreedErr] = useState("")


    const resetForm = () => {
        //console.log("On reset fn")
        nameRef.current.value = "";
        emailRef.current.value = "";
        deptRef.current.value = '';
        isAgreedRef.current.checked = "";
        setNameErr("");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log("on submit fn")
        let isFormValid = validateForm();
        if (isFormValid) {
            submitForm()
            setEmailErr("")
            setDeptErr("")
            setIsAgreedErr("")
        }
    }
    const submitForm = () => {
        console.log("Full Name: " + nameRef.current.value)
        console.log("Email: " + emailRef.current.value)
        console.log("Dept: " + deptRef.current.value)
        console.log("Is Agreed to T&C: " + isAgreedRef.current.checked)
        resetForm();
    }
    const validateForm = () => {
        let isValid = false;
        let fullName = nameRef.current.value;
        let email = emailRef.current.value;
        let dept = deptRef.current.value;
        let isAgreed = isAgreedRef.current.checked;
        //Fullanem,email,dept fields should be required
        //Email should be in standard format
        //User has to check the checkbox
        if (fullName.trim() === "") {
            setNameErr("Full name is required")
            nameRef.current.focus();
        }
        else if (email.trim() === "") {
            setNameErr("");
            setEmailErr("Email is required")
            emailRef.current.focus();
        } else if (!validEmail(email)) {
            setNameErr("");
            setEmailErr("Email is not valid")
            emailRef.current.focus();
        } else if (dept.trim() === "") {
            setEmailErr("")
            setDeptErr("Department is required")
            deptRef.current.focus();
        } else if (!isAgreed) {
            setDeptErr("")
            setIsAgreedErr("Please agree with Terms and Conditions")
            isAgreedRef.current.focus();
        } else {
            setIsAgreedErr("")
            isValid = true;
        }
        return isValid;
    }

    const validEmail = (email) => {
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            return true;
        }
        return false;
    }
    return (
        <div className='App' >
            <h1>Form Handling</h1>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <div className={`form-group ${nameErr.length > 0 ? 'err' : null}`}>
                        <label htmlFor='fname'>First Name</label>
                        <input type="text" id="fname" className='form-control' ref={nameRef} />
                        <span className='error'>{nameErr}</span>
                    </div>
                    <div className={`form-group ${emailErr.length > 0 ? 'err' : null}`}>
                        <label htmlFor='email'>Email</label>
                        <input type="text" id="email" className='form-control' ref={emailRef} />
                        <span className='error'>{emailErr}</span>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='age'>Age</label>
                        <input type="number" id="age" className='form-control' ref={ageRef} />
                    </div>
                    <div className={`form-group ${deptErr.length > 0 ? 'err' : null}`}>
                        <label htmlFor='dept'>Department</label>
                        <select className='form-control' id="dept" ref={deptRef}>
                            <option value="">Select</option>
                            <option value="finance">Finance</option>
                            <option value="hr">HR</option>
                            <option value="it">IT</option>
                            <option value="rmg">RMG</option>
                            <option value="transport">Transport</option>
                        </select>
                        <span className='error'>{deptErr}</span>
                    </div>
                    <div className={`form-group ${isAgreedErr.length > 0 ? 'err' : null}`}>
                        <div className='checkbox-input'>
                            <input type="checkbox" ref={isAgreedRef} />
                            <label>Agree with terms and conditions?</label>
                            <span className='error-checked'>{isAgreedErr}</span>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary'> Submit</button>
                    <button type='button' className='btn btn-default' onClick={resetForm}> Reset</button>
                </form>
            </div>
        </div>
    )
}

export default FormHandling
