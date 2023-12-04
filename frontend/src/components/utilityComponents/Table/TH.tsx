import React, { ThHTMLAttributes } from 'react'
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { cva, VariantProps} from "class-variance-authority";
import {FC, forwardRef } from "react";
import { cn } from "@/utils/tailwind";

const tableHeadingVariants = cva(
    "p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400",
  {
    variants : {
      variant : {
        default : "p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
    },
  },
  defaultVariants : {
    variant : "default"
  }
}
)

interface TableHeadingProps extends ThHTMLAttributes<HTMLTableCellElement>, VariantProps<typeof tableHeadingVariants>  {
}

const TH: FC<TableHeadingProps> = forwardRef<HTMLTableCellElement, TableHeadingProps>(({className, variant, ...props},ref) => {
    return <th {...props} className={cn(tableHeadingVariants({variant, className}))} ref={ref}>{props.children}</th>
  })

export default TH