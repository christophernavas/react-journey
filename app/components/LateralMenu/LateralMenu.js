import { REACT_CARDS } from "@/app/react-cards";
import Link from "next/link";
import { Button } from "../Button/Button";
import { useSearchParams } from "next/navigation";

const categories = [...new Set(REACT_CARDS.map((card) => card.category))];

export const LateralMenu = () => {
  const searchParams = useSearchParams();

  return (
    <nav className="w-1/4 h-full">
      <ul>
        <li key="all">
          <Link
            href={{ query: { filter: "all" } }}
            className={`${
              searchParams.get("filter") === "all" ? "font-bold underline" : ""
            } block`}
          >
            <Button size="md" type="large">
              All
            </Button>
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <Link
              href={{ query: { filter: category } }}
              className={`${
                searchParams.get("filter") === category
                  ? "font-bold underline"
                  : ""
              } block`}
            >
              <Button size="md" type="large">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
