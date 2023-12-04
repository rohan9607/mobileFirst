"use client"
import { useAppSelector } from '@/redux/hooks'
import { RootState } from '@/redux/store'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}

const DashboardHeader = (props: Props) => {

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const {user} = useAppSelector((state : RootState) => state.auth)
  const router = useRouter();

  const handelLogout = () => {
    Cookies.remove("token");
    router.replace("/login");
  };


  return (
    <>
    <header className="z-10 py-4 bg-gray-700 shadow-md dark:bg-gray-800">
          <div
            className="container flex items-center justify-between h-full px-6 mx-auto text-red-600"
          >

            <div className="flex justify-center flex-1 lg:mr-32">

            </div>
            <ul className="flex items-center flex-shrink-0 space-x-6">
              <li className="relative">
                <button
                  className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                  onClick={() => setShowProfileMenu((prev) => !prev)}
                >
                  <img
                    className="object-cover w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    alt=""
                  />
                </button>
                  {showProfileMenu && <ul
                    className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-gray-200 rounded-md shadow-md"
                  >                    
                    <li className="flex">
                      <a  
                        role='button' href={"/forgotPassword?email=" + user?.email}
                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                        // onClick={handelLogout}
>
                        <svg
                          className="w-4 h-4 mr-3"
                          aria-hidden="true"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                          ></path>
                        </svg>
                        <span>Forgot Password</span>
                      </a>
                    </li>
                    <li className="flex">
                      <a  
                        role='button' href="#"
                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                        onClick={handelLogout}
>
                        <svg
                          className="w-4 h-4 mr-3"
                          aria-hidden="true"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                          ></path>
                        </svg>
                        <span>Log out</span>
                      </a>
                    </li>
                  </ul>}
              </li>
            </ul>
          </div>
        </header>
    </>
  )
}

export default DashboardHeader