"use client";

import { Header } from "./components/Header/Header";
import { LateralMenu } from "./components/LateralMenu/LateralMenu";
import { Card } from "./components/Card/Card";
import { REACT_CARDS } from "./react-cards";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const currentFilter = useSearchParams().get("filter");
  const filteredMap =
    currentFilter === "all" || !currentFilter
      ? REACT_CARDS
      : REACT_CARDS.filter((card) => card.category === currentFilter);

  return (
    <div className="container mx-auto lg:max-w-screen-lg">
      <Header />
      <div className="flex gap-4">
        <LateralMenu />
        <div className="grid grid-cols-3 gap-5 pb-10 w-full h-full overflow-auto">
          {filteredMap.map((card) => (
            <Card
              key={card.name}
              title={card.name}
              categorie={card.category}
              url={card.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
