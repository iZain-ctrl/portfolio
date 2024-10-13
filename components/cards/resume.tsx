import Image from "next/image";
import Card from "../ui/card";
import SignatureImg from "@/public/assets/images/me/signature.png";
import Button from "../ui/button";
import { FaDownload } from "react-icons/fa";
import Socials from "../ui/socials";
export default function ResumeCard() {
  return (
    <Card ClassName="md:h-full">
      <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
        Ethical Hacker and your portfolio builder.Your Dream web designer.
        Armed with years of tinkering in the full-stack playground.
      </p>
      {/*Signature*/}
      <div>
        <Image src={SignatureImg} alt="Zain-Ul-Abideen" />
      </div>
      {/*Socials and reume btn*/}
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        {/*Socials*/}
        <Socials />
        <Button>
            <FaDownload />
            Resume
        </Button>
      </div>
    </Card>
  );
}