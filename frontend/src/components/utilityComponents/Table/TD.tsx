import React, { TdHTMLAttributes, ThHTMLAttributes } from 'react'
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { cva, VariantProps} from "class-variance-authority";
import {FC, forwardRef } from "react";
import { cn } from "@/utils/tailwind";

const tableDataVariants = cva(
    "p-3 text-sm text-gray-500 text-left whitespace-nowrap dark:text-gray-400",
  {
    variants : {
      variant : {
        default :"p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400",
        infoTable : "p-3 text-sm font-medium whitespace-nowrap dark:text-white",
    },
  },
  defaultVariants : {
    variant : "default"
  }
}
)

interface TableDataProps extends TdHTMLAttributes<HTMLTableCellElement>, VariantProps<typeof tableDataVariants>  {
}

const TD: FC<TableDataProps> = forwardRef<HTMLTableCellElement, TableDataProps>(({className, variant, ...props}, ref) => {
    return <td {...props} className={cn(tableDataVariants({variant, className}))} ref={ref}>{props.children}</td>
  })

export default TD