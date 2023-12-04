"use client"
import React, { useEffect } from 'react'
import "../../public/css/tailwind.output.css"
import DashboardHeader from './DashboardHeader'
import DashboardSideBar from './DashboardSideBar'
import { useAppDispatch } from '@/redux/hooks'
import { getUserDetails } from '@/redux/thunks/auth'

type Props = {
  children: React.ReactNode
}

const Dashboard = ({ children }: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserDetails());
  }, [])

  return (
    <div
      className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-auto"
    >
      <DashboardSideBar />
      <div className="flex flex-col flex-1">
        <DashboardHeader />
        <main className="h-full pb-16 overflow-y-auto">
          <div className="grid px-6 mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>

  )
}

export default Dashboard