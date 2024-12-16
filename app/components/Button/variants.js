import { cva } from "class-variance-authority";

export const buttonVariants = cva("p-2 rounded-md", {
  variants: {
    background: {
      primary: "hover:bg-gray-800",
      secondary: "bg-gray-700 ",
    },
    type: {
      large: "w-full text-left",
    },
  },
  defaultVariants: {
    background: "primary",
    type: "primary",
  },
});
