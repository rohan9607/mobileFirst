import React from 'react'

type Props = {}

const Rejected = (props: Props) => {
    return (
        <span className="px-3 py-1 font-semibold leading-tight text-red-700 bg-red-200 rounded-full">
            Rejected
        </span>
    )
}

export default Rejected