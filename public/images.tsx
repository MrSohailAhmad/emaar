import Image from "next/image";

import HEROIMG from "./herosec.jpeg";
import Wallet from "./wallet-svgrepo-com.svg";
import Home from "./home.jpg";
import BookImg from "./books.jpg";
import Logo from "./logo.jpg";

export const images = {
  HEROIMG,
  Home: <Image width={100} height={100} src={Home.src} alt="Home" />,
  Book: <Image width={200} height={200} src={BookImg.src} alt="Book" />,
  Logo: <Image width={150} height={150} src={Logo.src} alt="Book" />,
  Wallet: (props: string) => <Wallet className={`${props}`} />,
};
