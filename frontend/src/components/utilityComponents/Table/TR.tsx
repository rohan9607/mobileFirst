import React, { HtmlHTMLAttributes, ThHTMLAttributes } from 'react'
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { cva, VariantProps} from "class-variance-authority";
import {FC, forwardRef } from "react";
import { cn } from "@/utils/tailwind";

const tableRowVariants = cva(
    "border-b",
  {
    variants : {
      variant : {
        default : "bg-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700",
        tableHeader : " bg-gray-100 p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 dark:bg-gray-800"
    },
  },
  defaultVariants : {
    variant : "default"
  }
}
)

interface TableRowElementProps extends HtmlHTMLAttributes<HTMLTableRowElement>, VariantProps<typeof tableRowVariants>  {
}

const TR: FC<TableRowElementProps> = forwardRef<HTMLTableRowElement, TableRowElementProps>(({className, variant, ...props}, ref) => {
    return <tr {...props} className={cn(tableRowVariants({variant, className}))} ref={ref}>{props.children}</tr>
  })

export default TR