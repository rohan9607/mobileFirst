"use client";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { cva, VariantProps } from "class-variance-authority";
import { FC, forwardRef, HTMLAttributes } from "react";
import { cn } from "@/utils/tailwind";

const paraGraphVariant = cva(`text-sm`, {
  variants: {
    variant: {
      default: "text-pink-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface paragraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paraGraphVariant> {}

const P: FC<paragraphProps> = forwardRef<HTMLParagraphElement, paragraphProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <p
        {...props}
        className={cn(paraGraphVariant({ variant, className }))}
        ref={ref}
      >
        {props.children}
      </p>
    );
  }
);

export { P, paraGraphVariant };
