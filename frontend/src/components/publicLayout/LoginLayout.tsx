import React, { ReactNode } from 'react'
import "./loginlayout.css"
type Props = {
    children: ReactNode
}

const LoginLayout = ({ children }: Props) => {
    return (
        <section className="flex w-full h-screen bg-gray-50">
            <div className="w-full flex-col flex items-center justify-center">
                <div className="bg-white px-6 py-6 rounded-3xl border-2 border-gray-200">
                    <img className="w-16 mb-3" src="./img/fav-icon.png" alt="" />
                    {children}
                </div>
            </div>
        </section>

    )
}

export default LoginLayout