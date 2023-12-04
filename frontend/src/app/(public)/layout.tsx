import React, { ReactNode } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

type Props = {
    children : ReactNode
}

const PublicLayout = (props: Props) => {
  return (
    <>
        {props.children}
    </>
  )
}

export default PublicLayout