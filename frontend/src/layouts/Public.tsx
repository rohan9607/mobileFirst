import Footer from '@/components/publicLayout/Footer'
import NavOne from '@/components/publicLayout/NavOne'
import NavTwo from '@/components/publicLayout/NavTwo'
import React from 'react'

type Props = {
    children : React.ReactNode
}

const Public = (props: Props) => {
  return (
    <>
    <NavOne/>
    <NavTwo/>
    {props.children}
    <Footer/>
    </>
  )
}

export default Public