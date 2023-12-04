"use client"
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { RootState } from '@/redux/store'
import { getRequestById } from '@/redux/thunks/main'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {
    id: number
}

const RequestDetails = ({ id }: Props) => {
    const dispatch = useAppDispatch()
    const {user} = useAppSelector((state : RootState) => state.auth);
    const [requestDetails, setRequestDetails] = useState<any>(null);

    useEffect(() => {
        dispatch(getRequestById({id}))
        .unwrap()
        .then((res : any) => {
            if (res.success) {
                setRequestDetails(res.data)
            }
        })
    }, [id])
    
    return (
        <>
            <h4 className="mb-4 text-lg font-semibold text-gray-600 dark: my-6">
                Blood Request Details
            </h4>
            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <label className="block text-sm">
                    <span className=" ">Username</span>
                    <input
                        className="block w-full mt-1 text-sm form-input"
                        placeholder="Jane Doe"
                        value={user?.username}
                        disabled
                    />
                </label>
                <label className="block mt-4 text-sm">
                    <span className="">Blood Group</span>
                    <input
                        className="block w-full mt-1 text-sm form-input"
                        placeholder="Blood Group"
                        value={user?.blood_group}
                        disabled
                    />
                </label>
                <label className="block mt-4 text-sm">
                    <span className=" dark:">Aadhar Card Number</span>
                    <input
                        className="block w-full mt-1 text-sm form-input"
                        placeholder="Jane Doe"
                        value={user?.aadhar}
                        disabled
                    />
                </label>
                <label className="block mt-4 text-sm">
                    <span className="">Reason of request</span>
                    <textarea
                        className="block w-full mt-1 text-sm form-textarea"
                        rows={3}
                        placeholder="Enter some long form content."
                        value={requestDetails?.reason}
                    ></textarea>

                </label>
                <label className="block mt-4 text-sm">
                    <span className=" dark:">Address as per Aadhar</span>
                    <textarea
                        className="block w-full mt-1 text-sm form-textarea"
                        rows={3}
                        placeholder="Enter some long form content."
                        value={requestDetails?.address}
                    ></textarea>
                </label>
                <div className='my-6'>
                <Link
                    href={"/dashboard/requests"}
                    className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-slate-500 border border-transparent rounded-lg focus:outline-none"
                >
                    Back
                </Link>
                </div>
            </div>
        </>
    )
}

export default RequestDetails