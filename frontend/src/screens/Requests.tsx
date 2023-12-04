"use client"
import DateTimeFormattor from '@/components/dateTimeFormattor/DateTimeFormattor'
import Approved from '@/components/statusButtons/Approved'
import Completed from '@/components/statusButtons/Completed'
import Pending from '@/components/statusButtons/Pending'
import Rejected from '@/components/statusButtons/Rejected'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { resetIsDeleted } from '@/redux/slices/main'
import { RootState } from '@/redux/store'
import { getUserDetails } from '@/redux/thunks/auth'
import { deleteRequestById, getMyAllRequests } from '@/redux/thunks/main'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

type Props = {}

const Requests = (props: Props) => {

    const dispatch = useAppDispatch();

    const [bloodRequests, setBloodRequests] = useState<any[]>([]);

    const { user} = useAppSelector((state: RootState) => state.auth);
    const {isDeleted} = useAppSelector((state: RootState) => state.main);

    useEffect(() => {
        dispatch(getUserDetails());
    }, [])

    useEffect(() => {
        dispatch(getMyAllRequests())
            .unwrap()
            .then((res: any) => {
                setBloodRequests(res.data)
            })
    }, [isDeleted])

    const handleDeleteRequest = (id : number) => {
        Swal.fire({
            icon: "question",
            title: "Are you sure?",
            text: "Do you really want to drop your request ?",
            showCancelButton: true,
            showCloseButton: true
        })
            .then((res) => {
                if (res?.isConfirmed) {
                    dispatch(deleteRequestById({id}))
                    dispatch(resetIsDeleted());
                    Swal.fire({
                        icon : "success",
                        text : "Request was successfully deleted",
                        title : "Deleted"
                    })
                }
            })
    }

    return (
        <>
            <div className='flex flex-row justify-between align-middle'>
                <h2
                    className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
                >
                    Your Blood Requests
                </h2>
                <Link
                    href={"/dashboard/requests/add"}
                    className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-500 border border-transparent rounded-lg focus:outline-none my-auto"
                >
                    Request a Blood
                </Link>
            </div>
            {/* <h4
                className="my-6 mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
            >
                Table with actions
            </h4> */}
            <div className="w-full overflow-hidden rounded-lg shadow-xs border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="w-full overflow-x-auto">
                    <table className="w-full whitespace-no-wrap">
                        <thead>
                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                <th className="px-4 py-3">ID</th>
                                <th className="px-4 py-3">Blood Group</th>
                                {/* <th className="px-4 py-3">Amount</th> */}
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Date of Request</th>
                                <th className="px-4 py-3">Action</th>
                                {/* <th className="px-4 py-3">Date</th>
                                <th className="px-4 py-3">Actions</th> */}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                            {/* <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                    <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                    <img
                                                className="object-cover w-full h-full rounded-full"
                                                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                                alt=""
                                                loading="lazy"
                                            />
                                            <div
                                                className="absolute inset-0 rounded-full shadow-inner"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold">Hans Burger</p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                10x Developer
                                            </p>
                                        </div>
                                    </div>
                                </td> */}
                            {
                                bloodRequests?.length > 0 && bloodRequests.map(request => (
                                    <tr className="text-gray-700 dark:text-gray-400">
                                        <td className="px-4 py-3 text-sm">{request?.id}</td>
                                        <td className="px-4 py-3 text-sm">{user?.blood_group}</td>
                                        <td className="px-4 py-3 text-xs">
                                            {
                                                request?.status === '0'
                                                    ? <Pending />
                                                    :
                                                    request?.status === '1'
                                                        ?
                                                        <Approved />
                                                        :
                                                        request?.status === '2'
                                                            ?
                                                            <Rejected />
                                                            :
                                                            <Completed />
                                            }
                                        </td>
                                        <td className="px-4 py-3 text-sm"><DateTimeFormattor dateString={request?.created_at} /></td>
                                        <td className="px-4 py-3 text-sm flex flex-row">
                                            <Link
                                                href={"/dashboard/requests/" + request?.id}
                                                title='Show Details'
                                                className=" mr-3 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-slate-600  border border-transparent rounded-lg focus:outline-none my-auto"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>

                                            </Link>
                                            <button
                                                title='Delete Request'
                                                className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600/80 border border-transparent rounded-lg focus:outline-none my-auto"
                                                onClick={() => handleDeleteRequest(request?.id)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>

                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                            {/* <td className="px-4 py-3">
                                    <div className="flex items-center space-x-4 text-sm">
                                        <button
                                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                            aria-label="Edit"
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                            </svg>
                                        </button>
                                        <button
                                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                            aria-label="Delete"
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </td> */}
                        </tbody>
                    </table>
                </div>
                <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                    <span className="flex items-center col-span-3">Showing 21-30 of 100</span>
                    <span className="col-span-2" />
                    <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                        <nav aria-label="Table navigation">
                            <ul className="inline-flex items-center">
                                <li>
                                    <button
                                        className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                                        aria-label="Previous"
                                    >
                                        <svg
                                            className="w-4 h-4 fill-current"
                                            aria-hidden="true"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                        4
                                    </button>
                                </li>
                                <li>
                                    <span className="px-3 py-1">...</span>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                        8
                                    </button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                        9
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                                        aria-label="Next"
                                    >
                                        <svg
                                            className="w-4 h-4 fill-current"
                                            aria-hidden="true"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </span>
                </div>
            </div>
        </>


    )
}

export default Requests