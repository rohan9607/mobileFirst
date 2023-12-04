"use client"
import { Button } from '@/components/utilityComponents/button/Button';
import { useAppDispatch } from '@/redux/hooks';
import { changePassword, resetPassword } from '@/redux/thunks/auth';
import ResetPasswordValidationSchema from '@/validations/resetPasswordSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

type Props = {}

const ResetPassword = (props: Props) => {
    const params : any = useSearchParams()
    const pathname = usePathname()
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [resData, setResData] = useState<any>(null)
    
    const token = params.get('token') ?? undefined
    const email = params.get('email') ?? undefined


    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(ResetPasswordValidationSchema),
    });

    const submitForm = (data : any) => {
        const obj : changePassword = {
            password : data.password,
            email : email,
            token : token
        }

        dispatch(resetPassword(obj))
        .unwrap()
        .then((res : any) => {
            if (res.success) {
                setResData("Done")
                router.replace(pathname)
            }
            else{
                router.replace(pathname)
            }
        })
        .catch((err : any) => {
            router.replace(pathname)
        })
        
    }
  return (
    <>
    {
        token && email && resData === null
        ? 
    <form onSubmit={handleSubmit(submitForm)}>
        <h1 className='font-semibold text-lg'>Reset Password</h1>
        <label className=" text-sm font-bold text-[#102030]">
                            New Password
                        </label>
                        <input
                            type="password"
                            {...register("password")}
                            className={`w-full text-sm border-2  rounded-xl p-2  bg-transparent`}
                            placeholder="Enter your Password"
                        />
                        <p className="text-red-500 text-sm">
                            {errors.password?.message}
                        </p>
                        <label className=" text-sm font-bold text-[#102030]">
                            Confirm New Password
                        </label>
                        <input
                            type="password"
                            {...register("password_confirmation")}
                            className={`w-full text-sm border-2  rounded-xl p-2  bg-transparent`}
                            placeholder="Enter your Password"
                        />
                        <p className="text-red-500 text-sm">
                            {errors.password_confirmation?.message}
                        </p>
                        <Button type='submit' className='mt-3 mx-auto'>Submit</Button>
    </form>
    :
    resData !== null ? 
    <>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#5cd6d6" className="w-20 h-w-20 mx-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    <h1 className='mx-auto'>Password has been changed successfully</h1>
                    <Button onClick={() => {router.push("/login")}} className=' w-60'>Login To Dashboard</Button>
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
    </>
  )
}

export default ResetPassword