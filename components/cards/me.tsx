import Image from "next/image";
import Card from "../ui/card";
import MyImg from "@/public/assets/images/gallery/Img1.jpg";
import { cn } from "@/lib/utils";
export default function MeCard() {
  return (
    <Card ClassName="2x1:h-full">
      <div className="w-full h-[400px] sm:h-[500px] overflow-hidden">
        {/*background image*/}
        <Image 
          src={MyImg} 
          alt="Zain-Ul-Abideen" 
          className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover"
       />
       {/*Tags*/}
       <div className="absolute top-[65%] space-y-2">
         <Tag 
           text="Hi, universe 👋🏻"
           className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl" 
         />
         <Tag 
           text="I'm Zain-Ul-Abideen"
           className="rounded-tr-2xl rounded-br-2xl rounded-bl-2xl" 
         />
         <Tag 
           text="Not Ethicl HAcker"
           className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl" 
         />
         <Tag text="Best-Ever Portfolio Builder" className="rounded-3x1" />
       </div>
      </div>
    </Card>
  );
}

const Tag = ({ text, className }: { text: string, className: string }) => {
  return (
    <div className={cn("bg-black/[0.7] w-fit py-1.5 px-3", className)}>
      <p className="text-primary-foreground leadin-[110%] font-bold">{text}</p>
    </div>
  );
};