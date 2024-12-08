import Image from "next/image";
import { Poppins } from "next/font/google";

const popins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export default function Hero() {
  return (
    <div className="flex absolute top-[100px] items-center justify-center pl-[200px] bg-[#FBEBB5]">
      <div className="w-[44opx] h-[276px] grid gap-[35px]">
        <div className="w-[440px] h-[192px]">
          <h2
            className={`${popins.className} font-[500] text-[64px] leading-[96px] text-black`}
          >
            Rocket single seater
          </h2>
        </div>
        <div className="w-[121px] h-[49px] grid gap-[13px]">
          <button
            className={`${popins.className} font-[500] text-[24px] leading-[36px]`}
          >
            Shop Now
          </button>
          <hr className="w-[121px] border-[2px] border-solid border-black" />
        </div>
      </div>
      <div>
        <Image
          src={"/images/Rocket single seater 1.png"}
          alt="image"
          width={853}
          height={1000}
        />
      </div>
    </div>
  );
}
