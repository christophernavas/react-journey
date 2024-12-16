import { buttonVariants } from "./variants";
import Link from "next/link";

export const Button = ({ children, size, background, type, link }) => {
  return (
    <button className={buttonVariants({ size, background, type })}>
      {link ? (
        <Link target="_blank" href={link}>
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  );
};
