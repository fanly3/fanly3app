import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";
import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({ subsets: ['latin'] })



const SidebarLogo = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")} className="rounded-full h-14 w-16 p-4 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition">
     <div className={josefin.className}><p className="text-white text-3xl  ">fanly3</p></div>
    </div>
  );
};

export default SidebarLogo;
