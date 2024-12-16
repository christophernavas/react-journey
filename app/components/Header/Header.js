import { ReactSvg } from "@/app/components/ReactSvg/ReactSvg";
import { ShoppingBasket, User } from "lucide-react";
import { Button } from "../Button/Button";

export const Header = () => {
  return (
    <header className="flex py-8 ">
      <div className="flex items-center gap-2">
        <ReactSvg size={40} />
        <h1 className="text-2xl font-bold">ReactJourney</h1>
      </div>
      {/* <div className="ml-auto flex items-center gap-6 ">
        <Button>
          <ShoppingBasket />
        </Button>
        <Button>
          <User />
        </Button>
      </div> */}
    </header>
  );
};
