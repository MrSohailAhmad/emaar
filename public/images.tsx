import Image from "next/image";

import HEROIMG from "./herosec.jpeg";
import Wallet from "./wallet-svgrepo-com.svg";
import Home from "./home.jpg";
import BookImg from "./books.jpg";
import Logo from "./logo.jpg";
import Outdoor from "./outdoor.jpg";
import Teddy from "./teddy.svg";
import OutDoor from "./swimming-pool.svg";
import CCTV from "./cctv.svg";
import Tree from "./trees-sun.svg";
import GImg1 from "./img1.jpg";
import GImg2 from "./img2.jpg";
import GImg3 from "./img3.jpg";
import GImg4 from "./img4.jpg";
import GImg5 from "./img5.jpg";
import GImg6 from "./img6.jpg";
export const images = {
  HEROIMG,
  Home: <Image width={100} height={100} src={Home.src} alt="Home" />,
  Book: <Image width={200} height={200} src={BookImg.src} alt="Book" />,
  Logo: <Image width={150} height={150} src={Logo.src} alt="Book" />,
  Outdoor: <Image width={1000} height={100} src={Outdoor.src} alt="Outdoor" />,
  GalleryImg1: (props: string) => (
    <Image
      className={`${props}`}
      width={800}
      height={800}
      src={GImg1.src}
      alt="GImg1"
    />
  ),
  GalleryImg2: (props: string) => (
    <Image
      className={`${props}`}
      width={800}
      height={800}
      src={GImg2.src}
      alt="GImg2"
    />
  ),
  GalleryImg3: (props: string) => (
    <Image
      className={`${props}`}
      width={800}
      height={800}
      src={GImg3.src}
      alt="GImg3"
    />
  ),
  GalleryImg4: (props: string) => (
    <Image
      className={`${props}`}
      width={800}
      height={800}
      src={GImg4.src}
      alt="GImg4"
    />
  ),
  GalleryImg5: (props: string) => (
    <Image
      className={`${props}`}
      width={800}
      height={800}
      src={GImg5.src}
      alt="GImg5"
    />
  ),
  GalleryImg6: (props: string) => (
    <Image
      className={`${props}`}
      width={800}
      height={800}
      src={GImg6.src}
      alt="GImg6"
    />
  ),
  Teddy: (props: string) => <Teddy className={`${props}`} />,
  OutDoor: (props: string) => <OutDoor className={`${props}`} />,
  CCTV: (props: string) => <CCTV className={`${props}`} />,
  Tree: (props: string) => <Tree className={`${props}`} />,
  Wallet: (props: string) => <Wallet className={`${props}`} />,
};
