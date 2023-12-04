"use client"
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { cva, VariantProps } from "class-variance-authority";
import { FC, forwardRef, HTMLAttributes } from "react";
import { cn } from "@/utils/tailwind";

const textareaVariants = cva(
  "text-sm",
  {
    variants: {
      variant: {
          default : "w-full border-2  border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md p-3 mt-1 bg-transparent",
      },
    },
    defaultVariants: {
        variant : "default"
    }
  }
)

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> { }


const TextArea: FC<TextAreaProps> = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ className,  variant, ...props }, ref) => {
  return <textarea {...props} className={cn(textareaVariants({  variant, className }))} ref={ref}>{props.children}</textarea>
})

export { TextArea, textareaVariants };
