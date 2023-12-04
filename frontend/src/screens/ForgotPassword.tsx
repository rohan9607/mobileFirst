
"use client"
import { Button } from '@/components/utilityComponents/button/Button'
import { Input } from '@/components/utilityComponents/input/Input'
import { Label } from '@/components/utilityComponents/label/Label'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { forgotPassword } from '@/redux/thunks/auth'
import { emailRegex } from '@/validations/registerFormSchema'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}

const ForgotPassword = (props: Props) => {
    const dispatch = useAppDispatch()
    const searchParams : any = useSearchParams()
    const [error, setIsError] = useState("");
    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState<any>("")
    const {isLoading} = useAppSelector(state => state.auth)    
    const handleChnageEmail = (e: any) => {
        const { name, value } = e.target;
        setEmail(value)
    }

    useEffect(() => {
        if (searchParams.has('email')) {           
            setEmail(searchParams.get('email'))
        }
    }, [searchParams])

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const { name, value } = e.target
        if (email.trim() === "") {
            setIsError("Please enter email address");
            return false;
        }
        if (!emailRegex.test(email.trim())) {
            setIsError("Please enter a valid email address");
            return false;
        }
        setIsError("")
        dispatch(forgotPassword({ email: email }))
            .unwrap()
            .then((res : any) => {
                if (res.success === true) {                   
                    setEmailSent({ message: "Password reset link has been sent to " + email + "!", success: true });
                    setEmail("")
                    setIsError("")
                }
                else {
                    setEmail("")
                    setIsError("")
                    setEmailSent({ message: "Something went wrong please try again!", success: false });
                }
            })

    }
    
    return (
        <div className='w-96'>
            {emailSent === ""
                ?
                <>
                    <form onSubmit={handleSubmit}>
                        <Label htmlFor='forgot' className='text-black'>
                            Forgot Password
                        </Label>
                        <Input onChange={handleChnageEmail} disabled={searchParams.has('email')} value={email} type='email' className='bg-white text-black border border-black' placeholder='Email' id='forgot' />
                        <p className='text-red-600 text-sm'>{error !== "" && error}</p>
                        <Button disabled={isLoading} type='submit' className='mt-3 w-32'>{isLoading  ?"Please Wait" :  "Get a Link"}</Button>
                    </form>
                    <small className='mt-3'>
                        We’ll send a verification code to this email if it matches an existing Red Cross Blood Bank account.
                    </small>
                </>
                :
                Object.keys(emailSent)?.length > 0 ?
                    <>
                        <div className='w-96'>
                            <p className='bg-blue-200 p-6 border border-blue-500 rounded-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#5cd6d6" className="w-20 h-w-20 mx-auto">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>
                                {emailSent?.message}
                                <br />
                                Please click on "Reset Password" button to reset password
                                <br />
                            </p>
                            <small>
                                Note : If mail does not displayed in your inbox then please check in spam section
                            </small>
                        </div>
                    </>
                    :
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff1a1a" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        <h1 className='mx-auto'>Something went wrong! Please try again</h1>
                        <Link href={"/login"} className='text-blue-400'>Go To Login</Link>
                    </>
            }
        </div>
    )
}

export default ForgotPassword