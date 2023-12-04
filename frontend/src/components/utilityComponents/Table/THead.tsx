import React, { TdHTMLAttributes, ThHTMLAttributes } from 'react'
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { cva, VariantProps} from "class-variance-authority";
import {FC, forwardRef } from "react";
import { cn } from "@/utils/tailwind";

const TableHeadVariants = cva(
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

interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement>, VariantProps<typeof TableHeadVariants>  {
}

const THead: FC<TableHeadProps> = forwardRef<HTMLTableSectionElement, TableHeadProps>(({className, variant, ...props}, ref) => {
    return <thead {...props} className={cn(TableHeadVariants({variant, className}))} ref={ref}>{props.children}</thead>
  })

export default THead