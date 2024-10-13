import { FC, useState } from "react";
import { motion } from "framer-motion";
import { scale, slide } from "./animation";
import Link from "next/link";
interface NavLinkProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
}

const NavLink: FC<NavLinkProps> = ({ data }) => {
  const { title, href, index} = data;
  const [hovered, setHovered] = useState<boolean>(false);
  return ( 
    <motion.div 
      className="relative flex items-center" 
      variant={slide} 
      custom={index} 
      initial="initial" 
      animate="enter" 
      exit="exit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div 
        variants={scale} 
        animate={hovered ? "open" : "closed"}
        className="w-2.5 h-2.5 bg-white rounded-full absolute -left-[30px]"
      ></motion.div>
      <Link 
        href={href}
        className="text-[6vw] uppercase leading-[96%] font-bold"
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default NavLink;