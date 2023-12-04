"use client"
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { cva, VariantProps } from "class-variance-authority";
import { FC, ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/tailwind";

const labelVariants = cva(
  `text-sm`,
  {
    variants: {
      variant: {
          default : "font-bold text-[#102030]"
      },
    },
    defaultVariants: {
        variant : "default"
    }
  }
)

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelVariants> { }


const Label: FC<LabelProps> = forwardRef<HTMLLabelElement, LabelProps>(({ className,  variant, ...props }, ref) => {
  return <label {...props} className={cn(labelVariants({  variant, className }))} ref={ref}>{props.children}</label>
})

export { Label, labelVariants };
