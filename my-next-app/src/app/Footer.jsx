import { BiHomeAlt } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa6";
import { BiMessageRounded } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

const Footer = () => {
    return ( <div className="fixed bottom-0 left-1/2 -translate-x-1/2  w-full flex justify-center gap-10  pt-6 pb-6 shadow-md bg-white/20 backdrop-blur-[30px] rounded-tr-2xl rounded-tl-xl">
    <BiHomeAlt className="text-[2rem] text-[#ACACAC]"/>
    <FaRegStar className="text-[2rem] text-[#ACACAC]"/>
    <BiMessageRounded className="text-[2rem] text-[#ACACAC]"/>
    <FiUser className="text-[2rem] text-[#ACACAC]"/>
</div> );
}
 
export default Footer;
