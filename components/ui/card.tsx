import { cn } from "@/lib/utils";
import{ FC,ReactNode } from "react";

interface CardProps{
    title?: string;
    children: ReactNode; 
    ClassName?: string;
}

const Card:FC<CardProps> = ({title,children,ClassName}) => {
  return (
    <div 
      className={cn(
        "relative bg-primary-background w-full h-fit rounded-2x1 border border-border p-6 text-primary-foreground overflow-hidden",
        ClassName
       )}
    >
       <div className="flex flex-col gap-y-6">
        {/*Title*/}
          {title ? (
           <div className="font-pixel">
            <p className="uppercase text-lg">{title}</p>
          </div>
  ) : null}
        {/*children*/}
        {children}
        </div> 
    </div>
  );
};

export default Card;