import LoginLayout from '@/components/publicLayout/LoginLayout'
import React, { ReactNode } from 'react'

type Props = {
    children : ReactNode
}

const layout = (props: Props) => {
  return (
    <LoginLayout>
        {props.children}
    </LoginLayout>
  )
}

export default layout