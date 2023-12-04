"use client"
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { cva, VariantProps } from "class-variance-authority";
import { FC, ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/tailwind";

const inputVariants = cva(
  `text-sm`,
  {
    variants: {
      variant: {
          default : "w-full border-2  border-gray-100 rounded-md p-3 mt-1 bg-transparent"
      },
    },
    defaultVariants: {
        variant : "default"
    }
  }
)

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> { }


const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({ className,  variant, ...props }, ref) => {
  return <input {...props} className={cn(inputVariants({  variant, className }))} ref={ref}>{props.children}</input>
})

// className={`py-3 px-5 rounded-md text-white text-sm font-medium active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  ${styles.primary_bg_btn}`} onClick={action}
export { Input, inputVariants };
