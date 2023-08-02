import React, { useEffect } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
import './YoutubeForm.css'



function YoutubeForm() {
    const form = useForm({
        defaultValues: {
            username: "",
            email: "",
            channel: "",
            social: {
                twitter: '',
                facebook: ''
            },
            phoneNumbers: ["", ""],
            phNumbers: [{ number: "" }],
            age: 0,
            dob: new Date()
        }
    })
    const { register, control, handleSubmit, formState, watch, getValues } = form
    const { errors, isDirty, isValid, isSubmitting } = formState;
    const onSubmit = (data) => {
        console.log("form Submission", data)
    }
    const { fields, append, remove } = useFieldArray({
        name: "phNumbers",
        control
    })

    const watchUsers = watch(["username", "email"])
    useEffect(() => {
        const subscription = watch((value) => {
            console.log(value)
        })
        return () => {
            subscription.unsubscribe();
        }
    }, [watch])

    const handleGetValues = () => {
        console.log("get Values", getValues())
    }
    console.log("isSubmitting value ", isSubmitting)
    // console.log("Validate the submit function", isValid)
    return (
        <div className='formhook'>
            {/* <h1>Watched value : {watchUsers}</h1> */}

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='form-control'>
                    <label htmlFor="username">UserName</label>
                    <input type="text" id="username" {...register("username",
                        {
                            required: {
                                value: true,
                                message: "Username is required"
                            }
                        }
                    )} />
                    <p className='error'>{errors.username?.message}</p>
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="text" id="email" {...register("email",
                        {
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Invalid Email format'
                            },
                            validate: {
                                notAdmin: (fieldValue) => {
                                    return fieldValue != "admin@example.com" || "Enter a different email address"
                                },
                                notBlackListed: (fieldValue) => {
                                    return !fieldValue.endsWith("baddomain.com") || "This domain is not supported"
                                }
                            }
                        })} />
                    <p className='error'>{errors.email?.message}</p>
                </div>
                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <input type="text" id="channel" {...register("channel",
                        {
                            required: {
                                value: true,
                                message: "channel is required"
                            }
                        })} />
                    <p className='error'>{errors.channel?.message}</p>
                </div>
                <div className='form-control'>
                    <label htmlFor='twitter'>Twitter</label>
                    <input type="text" id="twitter" {...register("social.twitter", {
                        disabled: watch("channel") === "",
                        required: {
                            value: true,
                            message: "Twitter id is required"
                        }
                    })} />
                    <p className='error'>{errors.social?.twitter?.message}</p>
                </div>
                <div className='form-control'>
                    <label htmlFor='facebook'>Facebook</label>
                    <input type="text" id="facebook" {...register("social.facebook",
                        {
                            required: {
                                value: true,
                                message: "Facebook id is required"
                            }
                        })} />
                    <p className='error'>{errors.social?.facebook?.message}</p>
                </div>
                <div className='form-control'>
                    <label htmlFor='primary-phone'>Primary Phone Number</label>
                    <input type="text" id="primary-phone" {...register("phoneNumbers[0]",
                        {
                            required: {
                                value: true,
                                message: "Primary Phone number is required"
                            }
                        }
                    )} />
                    <p className='error'>{errors.phoneNumbers?.[0]?.message}</p>
                </div>
                <div className='form-control'>
                    <label htmlFor='secondary-phone'>Secondary Phone Number</label>
                    <input type="text" id="secondary-phone" {...register("phoneNumbers[1]",
                        {
                            required: {
                                value: true,
                                message: "Secondary Phone number is required"
                            }
                        })} />
                    <p className='error'>{errors.phoneNumbers?.[1]?.message}</p>
                </div>
                <div>
                    <label>List of phone Numbers</label>
                    <div>
                        {
                            fields.map((field, index) => {
                                return (
                                    <div className='form-control' key={field.id}>
                                        <input type='text' {...register(`phNumbers.${index}.number`)} />
                                        {
                                            index > 0 && (
                                                <button type='button' onClick={() => remove({ index })}>remove</button>
                                            )
                                        }
                                    </div>
                                )
                            })
                        }
                        <button type='button' onClick={() => append({ number: '' })}>Add Phone Number</button>
                    </div>
                    <div className='form-control'>
                        <label htmlFor='age'>Age</label>
                        <input type="text" id="age" {...register("age",
                            {
                                valueAsNumber: true,
                                required: {
                                    value: true,
                                    message: "age is required"
                                }
                            })} />
                        <p className='error'>{errors.age?.message}</p>
                    </div>
                    <div className='form-control'>
                        <label htmlFor='dob'>DOB</label>
                        <input type="date" id="dob" {...register("dob",
                            {
                                valueAsDate: true,
                                required: {
                                    value: true,
                                    message: "dob is required"
                                }
                            })} />
                        <p className='error'>{errors.dob?.message}</p>
                    </div>
                </div>
                <button type="button" onClick={handleGetValues}>Get Values</button>
                <button disabled={!isDirty || !isValid}>Submit</button>
            </form>
            <DevTool control={control} />
        </div>
    )
}

export default YoutubeForm
