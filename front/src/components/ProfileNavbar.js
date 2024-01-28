import info from "../assets/info_nav.svg";
import contact from "../assets/email_nav.svg";
import profilePicture from "../assets/profile_placeholder.png";
import LogoComponent from "./Logo";
import Link from 'next/link'

const ProfileNavbar = () => {
  return (
    <div className="bg-[#094B72]">
      <nav className=" font-normal px-8 py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <LogoComponent isWhite={true} to="/dashboard" />
          {/* Navigation Links */}
          <div className="space-x-4 flex justify-end gap-12 text-sm font-medium">
            <Link href="/about" className="flex items-center gap-1 text-white">
              <img src={info}></img>
              About
            </Link>
            <Link href="/contact" className=" flex items-center gap-1 text-white">
              <img src={contact}></img>
              Contact
            </Link>
            <img src={profilePicture} className="w-8 h-8 rounded-full"></img>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ProfileNavbar;
