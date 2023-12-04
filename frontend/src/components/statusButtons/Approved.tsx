import React from 'react'

type Props = {}

const Approved = (props: Props) => {
    return (
        <span className="px-3 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
            Approved
        </span>
    )
}

export default Approved