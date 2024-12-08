import Image from "next/image";
import { Poppins } from "next/font/google";

const popins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export default function Main() {
  return (
    <div className="h-[672px] absolute top-[996px] flex justify-center bg-[#FAF4F4] w-screen">
      <div className="w-[605px] h-[562px] grid absolute top-[51px] left-[100px] ">
        <Image
          src={"/images/Granite square side table 1.png"}
          alt="image"
          width={1092}
          height={1641}
        />
        <div className="w-[182px] h-[54px] absolute top-[383px] left-[105px]">
          <p
            className={`${popins.className} font-[500] text-[36px] leading-[54px] text-black`}
          >
            Side table
          </p>
        </div>
        <div className="w-[125px] h-[49px] absolute top-[460px] left-[106px] grid gap-[13px]">
          <button
            className={`${popins.className} font-[500] text-[24px] leading-[36px] text-black`}
          >
            View More
          </button>
          <hr className="w-[121px] border-[2px] border-solid border-black" />
        </div>
      </div>
      <div className="w-[605px] h-[562px] absolute top-[51px] left-[735px]">
        <Image
          src={"/images/Cloud sofa three seater + ottoman_3 1.png"}
          alt="image"
          width={1585}
          height={1055}
        />
        <div className="w-[182px] h-[54px] absolute top-[383px] left-[105px]">
          <p
            className={`${popins.className} font-[500] text-[36px] leading-[54px] text-black`}
          >
            Side table
          </p>
        </div>
        <div className="w-[125px] h-[49px] absolute top-[460px] left-[106px] grid gap-[13px] ">
          <button
            className={`${popins.className} font-[500] text-[24px] leading-[36px] text-black`}
          >
            View More
          </button>
          <hr className="w-[121px] border-[2px] border-solid border-black" />
        </div>
      </div>
    </div>
  );
}
