import Link from "next/link";
import { Poppins } from "next/font/google";
import Image from "next/image";

const popins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export default function Navbar() {
  return (
    <div className="h-[100px] items-center bg-[#FBEBB5]">
      <div
        className={`${popins.className} flex w-[430px] h-[24px] justify-between absolute top-[38px] left-[505px] font-[500] text-[16px] leading-[24px] text-black `}
      >
        <Link href="">Home</Link>
        <Link href="">Shop</Link>
        <Link href="">About</Link>
        <Link href="">Contact</Link>
      </div>
      <div className="w-[247px] h-[28px] flex justify-between absolute top-[36px] left-[1093px] ">
        <Link href="">
          <Image
            src={"/images/mdi_account-alert-outline.png"}
            alt="icon"
            width={28}
            height={28}
          />
        </Link>
        <Link href="">
          <Image
            src={"/images/akar-icons_search.png"}
            alt="icon"
            width={28}
            height={28}
          />
        </Link>
        <Link href="">
          <Image
            src={"/images/akar-icons_heart.png"}
            alt="icon"
            width={28}
            height={28}
          />
        </Link>
        <Link href="">
          <Image
            src={"/images/ant-design_shopping-cart-outlined.png"}
            alt="icon"
            width={28}
            height={28}
          />
        </Link>
      </div>
    </div>
  );
}
