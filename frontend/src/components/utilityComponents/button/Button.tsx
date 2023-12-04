"use client"
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { cva, VariantProps } from "class-variance-authority";
import { FC, ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/tailwind";

const buttonVariants = cva(
  `font-medium active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all`,
  {
    variants: {
      variant: {
        default: `rounded-md text-white text-sm bg-red-600 py-2 px-4 w-28`,
        submit: `rounded-md text-white text-sm bg-green-600 py-2 px-4  w-20`,
        view: `bg-gray-400/50 w-20 flex justify-center hover:bg-gray-400 text-gray-800 text-[11px] font-medium px-2.5 py-0.5 rounded h-5 inline-flex items-center dark:bg-gray-400 dark:hover:bg-gray-200`,
        edit: `bg-blue-400/50 w-20 flex justify-center hover:bg-blue-300 text-gray-800 text-[11px] font-medium px-2.5 py-0.5 rounded h-5 inline-flex items-center dark:bg-gray-400 dark:hover:bg-gray-200`,
        delete: `bg-red-600/25 text-red-600 w-20 flex justify-center hover:bg-red-200 text-[11px] font-medium px-2.5 py-0.5 rounded h-5 inline-flex items-center dark:bg-red-600/50 dark:text-white dark:hover:bg-gray-200 dark:hover:text-red-500`,
        cancel: `rounded-md text-white text-sm bg-rose-600 py-2 px-4 w-20`,
        noStyle: ``,
        addButton: "py-1 px-3 flex text-justify items-center rounded-sm text-white bg-[#102030] text-sm font-light",
        LeftPaginate : "h-10 border border-gray-300 dark:border-gray-700 w-10 hover:bg-pink-600 text-gray-600 hover:text-white px-3 dark:text-white",
        LeftMostPaginate : "h-10 border border-r-0 border-gray-300 dark:border-gray-700 w-10 hover:bg-pink-600 text-gray-600 hover:text-white px-3 rounded-l-lg dark:text-white",
        rightPaginate : "h-10  border border-gray-300 dark:border-gray-700 w-10 hover:bg-pink-600 text-gray-600 hover:text-white px-3 dark:text-white",      
        rightMostPaginate : "h-10  border border-gray-300 dark:border-gray-700 w-10 hover:bg-pink-600 text-gray-600 hover:text-white px-3 rounded-r-lg dark:text-white" ,     
        paginationNumber : "h-10 mb-0 border border-gray-300 dark:border-gray-700 w-10 dark:text-white hover:bg-pink-600 text-slate dark:text-white"  ,    
        tabActive : "inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500",
        tabInactive : "inline-block p-4 rounded-t-lg border-b-2 border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 border-gray-100 hover:border-gray-300 dark:border-gray-700"
      },
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { }


const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({ className,  variant, ...props }, ref) => {
  return <button {...props} className={cn(buttonVariants({  variant, className }))} ref={ref}>{props.children}</button>
})

// className={`py-3 px-5 rounded-md text-white text-sm font-medium active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  ${styles.primary_bg_btn}`} onClick={action}
export { Button, buttonVariants };
