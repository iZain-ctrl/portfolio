import { FC, ReactNode } from "react";
import Header from "./featured/header";
import Video from "./featured/video";

interface FeaturedCardProps {
  logo?: ReactNode;
  title: string;
  tag: string;
  video: string;
  active: boolean;
}

const FeaturedCard: FC<FeaturedCardProps> = ({
  logo,
  title,
  tag,
  video,
  active,
}) => {
  return (
    <div className="link w-full h-full bg-secondry-background border border-border shadow-lg rounded-3x1 cursor-pointer flex flex-col gap-2 flex-nowrap p-2">
      {/*Header*/}
      <Header title={title} tag={tag}/>
      {/*Body*/}
      <div className="relative flex float-none flex-nowrap p-6 w-full items-center justify-center h-[550px] border border-border rounded-3x1">
        {/*Video*/}
        < Video video={video} active={active}/>
      </div>
    </div>
  );
};

export default FeaturedCard;