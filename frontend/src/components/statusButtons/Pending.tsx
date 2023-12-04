import React from 'react'

type Props = {}

const Pending = (props: Props) => {
    return (
        <span className="px-3 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-400/25 rounded-full">
            Pending
        </span>
    )
}

export default Pending