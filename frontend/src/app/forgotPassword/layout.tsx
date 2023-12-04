import LoginLayout from '@/components/publicLayout/LoginLayout'
import React, { ReactNode } from 'react'

type Props = {
    children : ReactNode
}

const layout = ({children}: Props) => {
  return (
    <LoginLayout>
        {children}
    </LoginLayout>
  )
}

export default layout