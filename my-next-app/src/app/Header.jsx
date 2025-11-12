import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between">
        <Link href="/" className="font-extrabold text-[1.125rem]">
          FamilyFriends
        </Link>
        <IoIosNotificationsOutline className="text-[2rem]" />
      </div>
    </header>
  );
};

export default Header;


