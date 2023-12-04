import { ReactPortal, ReactElement, FC, forwardRef } from 'react'

type Props = {
    children: ReactElement
}

const Table: FC<Props> = ({ children }) => {
    return (
        <div className="grid grid-cols-1 p-3">
            <div className="">
                <div className="relative overflow-x-auto block w-full">
                    <table className="w-full">
                        {children}
                    </table>
                </div>
            </div>
        </div>

    )
}
export default Table