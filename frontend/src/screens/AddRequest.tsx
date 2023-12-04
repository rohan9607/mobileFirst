"use client"
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { RootState } from '@/redux/store'
import { getUserDetails } from '@/redux/thunks/auth'
import { requestForBlood } from '@/redux/thunks/main'
import RequestBloodFormSchema from '@/validations/bloodRequestValidationSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

type Props = {}

const AddRequest = (props: Props) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { user } = useAppSelector((state: RootState) => state.auth);
  const { isLoading } = useAppSelector((state: RootState) => state.main);

  useEffect(() => {
    dispatch(getUserDetails());
  }, [])


  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RequestBloodFormSchema),
  });

  const handleAddRequest = (data : any) => {
    dispatch(requestForBlood(data))
    .unwrap()
    .then((res : any) => {
      Swal.fire({
        icon : "success",
        title : "Success",
        text : res?.message
      })
      router.replace("/dashboard/requests")
    })
    .catch((err : any) => {
      Swal.fire({
        icon : "error",
        title : "Error",
        text : err
      })
      router.replace("/dashboard/requests")
    })
  }

  return (
    <>
      <h4 className="mb-4 text-lg font-semibold text-gray-600 dark: my-6">
        Blood Request Form
      </h4>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <form onSubmit={handleSubmit(handleAddRequest)}>
        <label className="block text-sm">
          <span className=" ">Username</span>
          <input
            className="block w-full mt-1 text-sm form-input"
            placeholder="Jane Doe"
            disabled
            value={user?.username}
          />
        </label>
        <label className="block mt-4 text-sm">
          <span className="">Blood Group</span>
          <input
            className="block w-full mt-1 text-sm form-input"
            placeholder="Blood Group"
            disabled
            value={user?.blood_group}
          />
        </label>
        <label className="block mt-4 text-sm">
          <span className=" dark:">Aadhar Card Number</span>
          <input
            className="block w-full mt-1 text-sm form-input"
            placeholder="Jane Doe"
            disabled
            value={user?.aadhar}
          />
        </label>        <label className="block mt-4 text-sm">
          <span className="">Reason of request</span>
          <textarea
            {...register("reason")}
            className="block w-full mt-1 text-sm form-textarea"
            rows={3}
            placeholder="Enter some long form content."
          ></textarea>
          <span className="text-red-600">{errors?.reason?.message}</span>

        </label>
        <label className="block mt-4 text-sm">
          <span className=" dark:">Address as per Aadhar</span>
          <textarea
            className="block w-full mt-1 text-sm form-textarea"
            rows={3}
            placeholder="Enter some long form content."
            {...register("address")}
          ></textarea>
          <span className="text-red-600">{errors?.address?.message}</span>
        </label>
        <div className='flex flex-row justify-between my-4'>
          <button
            onClick={() => router.push("/dashboard/requests")}
            disabled={isLoading}
            className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-500 border border-transparent rounded-lg focus:outline-none my-auto"
          >
            Cancle
          </button>
          <button
            className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg focus:outline-none my-auto"
          >
            {isLoading ? "Please wait.."  : "Request a Blood"}
          </button>
        </div>
        </form>
      </div>
    </>

  )
}

export default AddRequest