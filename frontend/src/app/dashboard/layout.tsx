import Dashboard from '@/layouts/Dashboard'
import React from 'react'

type Props = {
    children : React.ReactNode
}

const layout = (props: Props) => {
  return (
    <>

    <Dashboard>
        {props.children}
    </Dashboard>
    </>
  )
}

export default layout