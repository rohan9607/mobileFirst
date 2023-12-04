"use client"
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { cva, VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { cn } from "@/utils/tailwind";

const formVariants = cva(
  `grid grid-cols-1`,
  {
    variants: {
      variant: {
        default: `p-4`,
        },
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

interface ButtonProps extends React.FormHTMLAttributes<HTMLFormElement>, VariantProps<typeof formVariants> { }


const Form: FC<ButtonProps> = forwardRef<HTMLFormElement, ButtonProps>(({ className,  variant, ...props }, ref) => {
  return <form {...props} className={cn(formVariants({  variant, className }))} ref={ref}>{props.children}</form>
})

// className={`py-3 px-5 rounded-md text-white text-sm font-medium active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  ${styles.primary_bg_btn}`} onClick={action}
export { Form, formVariants };
