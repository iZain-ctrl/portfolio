import Button  from "./button";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <span className="w-5 h-5 grid place-items-center">{social.icon}</span>
        </Button>    
     ))}
    </div>
  );
}

const socials = [
  {
    icon: <FaLinkedin />,
    link: "linkedin.com/in/zain-manj-847a28332",
    username: "Zain Manj",  
  },
  {
    icon: <FaWhatsapp />,
    link: "https://wa.me/923147854406?text=Hello%20there!",
    username: "Mr.Nobody🥊",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/dailygrowthlab?igsh=MXI0aHY0NDg5cTcxOQ==",
    username: "dailygrowthlab",
  },
];