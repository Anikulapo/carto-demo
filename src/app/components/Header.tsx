import NavBar from "./NavBar";
import { Sun } from "lucide-react";
import Image from "next/image";
import User from "./User";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between p-4">
      <User/>
      <NavBar />

      <nav className="flex gap-2 items-center">
        <button className="bg-[#f8f8f8] rounded-xl p-2 gap-1 flex  text-[#4a4a4a] cursor-pointer">
            <Image
                        src="/images/gallery-favorite.svg"
                        alt="gallery"
                        width={20}
                        height={20}
                        className=""
                      />
          Gallery
        </button>
        <button className="bg-[#f8f8f8] rounded-xl p-2 gap-1 flex  text-[#4a4a4a] cursor-pointer">
            <Image
                        src="/images/gallery-favorite.svg"
                        alt="gallery"
                        width={20}
                        height={20}
                        className=""
                      />
          Gallery
        </button>
        <button className="bg-[#f8f8f8] rounded-xl p-2 gap-1 flex items-center cursor-pointer text-[#4a4a4a]">
           <Image
                        src="/images/notification.svg"
                        alt="Notification"
                        width={20}
                        height={20}
                        className=""
                      />
        </button>
        <button className="bg-[#f8f8f8] rounded-xl p-2 gap-1 flex items-center cursor-pointer text-[#4a4a4a]">
          <Sun className="w-5 h-5 text-[#4a4a4a]" />
        </button>
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-400 cursor-pointer to-pink-400 flex items-center justify-center">
                
              </div>
      </nav>
    </header>
  );
};

export default Header;
