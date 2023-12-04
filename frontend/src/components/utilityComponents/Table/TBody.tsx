import React, { TdHTMLAttributes, ThHTMLAttributes } from 'react'
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { cva, VariantProps} from "class-variance-authority";
import {FC, forwardRef } from "react";
import { cn } from "@/utils/tailwind";

const TableBodyVariants = cva(
    "",
  {
    variants : {
      variant : {
        default :""
    },
  },
  defaultVariants : {
    variant : "default"
  }
}
)

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement>, VariantProps<typeof TableBodyVariants>  {
}

const TBody: FC<TableBodyProps> = forwardRef<HTMLTableSectionElement, TableBodyProps>(({className, variant, ...props}, ref) => {
    return <tbody {...props} className={cn(TableBodyVariants({variant, className}))} ref={ref}>{props.children}</tbody>
  })

export default TBody