import { ReactSvg } from "../ReactSvg/ReactSvg";
import { Button } from "../Button/Button";
import { BookOpen, CirclePlus } from "lucide-react";

export const Card = ({ title, categorie, url }) => {
  return (
    <div className="border-2 rounded-lg p-4">
      <div className="flex items-center gap-2">
        <ReactSvg size={20} />
        <span className="text-xl font-semibold">React</span>
      </div>
      <div className="text-xl text-center p-5 font-bold">{title}</div>
      <div className="flex justify-between items-center">
        <span className="text-gray-200">{categorie}</span>
        <div className="flex items-center gap-2">
          <Button background="secondary" size="sm" link={url}>
            <BookOpen size={20} />
          </Button>
          {/* <Button background="secondary">
            <CirclePlus />
          </Button> */}
        </div>
      </div>
    </div>
  );
};
