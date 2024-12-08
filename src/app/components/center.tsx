import Image from "next/image";
import { Poppins } from "next/font/google";

const popins = Poppins({
  subsets: ["latin"],
  weight: "500",
});
const popins1 = Poppins({
  subsets: ["latin"],
  weight: "700",
});

const popins2 = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function Center() {
  return (
    <div className="h-[639px] absolute top-[2469px] bg-[#FFF9E5] pl-[36px]">
      <div className="flex">
        <div>
          <Image
            src={"/images/Asgaard sofa 1.png"}
            alt="image"
            width={983}
            height={799}
            className="my-[-80px] ml-[-36px] grid gap-[33px]"
          />
        </div>
        <div className="w-[331px] h-[205px] grid justify-center items-center text-center my-[217px] mr-[97px] ">
          <div className="w-[331px] h-[108px] grid text-center items-center justify-center ">
            <div className="grid w-[149px] h-[36px] ">
              <p
                className={`${popins.className} font-[500] text-[24px] leading-[36px] relative left-[91px]`}
              >
                New Arrivals
              </p>
            </div>
            <div className="grid w-[331px] h-[72px] ">
              <h4
                className={`${popins1.className} font-[700] text-[48px] leading-[72px]`}
              >
                Asgaard sofa
              </h4>
            </div>
          </div>
          <div>
            <button
              className={`${popins2.className} w-[255px] h-[64px] border-[1px] border-black`}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
