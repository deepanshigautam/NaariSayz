import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

// Define alert variants using cva
const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-red-500/50 text-red-50 dark:border-red-500 [&>svg]:text-red-50",
        success: "border-green-500/50 text-green-50 [&>svg]:text-green-50",
        warning: "border-yellow-500/50 text-yellow-50 [&>svg]:text-yellow-50",
        info: "border-blue-500/50 text-blue-50 [&>svg]:text-blue-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Define the types for Alert props
interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {}

// Define the Alert component with forwarded ref
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={alertVariants({ variant, className })}
    {...props}
  />
));
Alert.displayName = "Alert";

// Define AlertDescription component directly using HTML attributes
const AlertDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`text-sm [&_p]:leading-relaxed ${className || ""}`}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription };
