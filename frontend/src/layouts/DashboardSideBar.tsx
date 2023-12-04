"use client"
import Link from 'next/link'
import React from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css';
import { FaClock, FaHistory, FaSyringe, FaTint } from "react-icons/fa"
import { usePathname } from 'next/navigation';
type Props = {}
const DashboardSideBar = (props: Props) => {
  const pathname = usePathname(); 
    return (
        <>
        <aside
        className="z-20 w-64 overflow-y-auto bg-gray-700 dark:bg-gray-800 flex-shrink-0 block text-gray-200"
      >
        <div className="py-4">
          <a
            className="ml-6 text-lg font-bold text-gray-200 flex flex-row align-middle justify-center"
            href="#"
          >
            <img alt='error' src='/images/1631336315049.jpg' height={100} width={100} className='mr-3'/> 
            <h6 className='my-auto'>
              MobileFirst
            </h6>
          </a>
          <ul className="mt-6">
            <li className="relative px-6 py-3">
            {pathname === "/dashboard" && <span
                className="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>}
              <Link
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150"
                href="/dashboard"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
                <span className="ml-4">Profile</span>
              </Link>
            </li>
            <li className="relative px-6 py-3">
            {pathname === "/dashboard/images" && <span
                className="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>}
              <Link
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150"
                href="/dashboard/images"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
                <span className="ml-4">Images</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
        </>
    )
}

export default DashboardSideBar