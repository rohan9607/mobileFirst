"use client";
import { cva, VariantProps } from "class-variance-authority";
import { FC, forwardRef, HTMLAttributes } from "react";
import { cn } from "@/utils/tailwind";

const spanVariants = cva(`text-sm`, {
  variants: {
    variant: {
      default: "text-gray",
      error: "text-red-500",
      required: "text-red-500",
      active:
        "bg-green-600/5 text-green-500 text-[11px] font-medium px-2.5 py-0.5 rounded h-5",
      pending:
        "bg-yellow-200/25 text-yellow-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5",
      InActive:
        "bg-red-600/5 text-red-500 text-[11px] font-medium px-2.5 py-0.5 rounded h-5",
      InProgress:
        "bg-gray-600/5 text-black-500 text-[11px] font-medium px-2.5 py-0.5 rounded h-5",
      verified:
        "bg-blue-600/5 text-blue-500 text-[11px] font-medium px-2.5 py-0.5 rounded h-5",
      UnderVerification:
        "bg-yellow-400/25 text-Zinc-500 text-[11px] font-medium px-2.5 py-0.5 rounded h-5",
      processing:
        "bg-blue-600/5 text-Zinc-500 text-[11px] font-medium px-2.5 py-0.5 rounded h-5",
      delivered:
        "bg-green-600/5 text-green-500 text-[11px] font-medium px-2.5 py-0.5 rounded h-5",
      cancelled:
        "bg-red-600/5 text-red-500 text-[11px] font-medium px-2.5 py-0.5 rounded h-5",
      shipped:
        "bg-Zinc-600/5 text-Zinc-500 text-[11px] font-medium px-2.5 py-0.5 rounded h-5",
      inTransit:
        "bg-blue-600/5 text-blue-500 text-[11px] font-medium px-2.5 py-0.5 rounded h-5",
      accepted:
        "bg-blue-600/5 text-blue-500 text-[11px] font-medium px-2.5 py-0.5 rounded h-5",
      expired:
        "bg-red-600/5 text-red-500 text-[11px] font-medium px-2.5 py-0.5 rounded h-5",
      orderPlaced:
        "bg-green-600/5 text-green-500 text-[11px] font-medium px-2.5 py-0.5 rounded h-5",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface SpanProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spanVariants> {}

const Span: FC<SpanProps> = forwardRef<HTMLSpanElement, SpanProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <span
        {...props}
        className={cn(spanVariants({ variant, className }))}
        ref={ref}
      >
        {props.children}
      </span>
    );
  }
);

export { Span, spanVariants };
