import Image from "next/image";
import { Poppins } from "next/font/google";

const popins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const popins2 = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function Top() {
  return (
    <div className="h-[777px] absolute top-[1663px] bg-white ">
      <div className="w-[311px] h-[54px] absolute top-[55px] left-[564px]">
        <h3
          className={`${popins.className} font-[500] text-[36px] leading-[54px] text-[black]`}
        >
          Top Picks For You
        </h3>
      </div>
      <div className="w-[773px] h-[24px] absolute top-[122px] left-[333px] ">
        <p
          className={`${popins.className} font-[500] text-[16px] leading-[24px] text-[#9F9F9F]`}
        >
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
      </div>
      <div className="w-[287px] h-[372px] absolute top-[211px] left-[100px] ">
        <div className="w-[287px] h-[287px]">
          <Image
            src={"/images/Trenton modular sofa_3 1.png"}
            alt="image"
            width={750}
            height={384.46}
          />
        </div>
        <div className="w-[194px] h-[71px] grid gap-[12px]">
          <div className="w-[194px] h-[24px]">
            <p
              className={`${popins2.className} font-[400] text-[16px] leading-[24px] text-black`}
            >
              Trenton modular sofa_3
            </p>
          </div>
          <div className="w-[158px] h-[36px] ">
            <p
              className={`${popins.className} font-[500] text-[24px] leading-[36px] text-black`}
            >
              Rs. 25,000.00
            </p>
          </div>
        </div>
      </div>
      <div className="w-[287px] h-[397px] absolute top-[211px] left-[417px] ">
        <div className="w-[287px] h-[287px] ">
          <Image
            src={"/images/Granite dining table with dining chair 1.png"}
            alt="image"
            width={255}
            height={185}
          />
        </div>
        <div className="w-[212px] h-[96px] grid gap-[12px] ">
          <div className="w-[212px] h-[48px] ">
            <p
              className={`${popins2.className} font-[400] text-[16px] leading-[24px]`}
            >
              Granite dining table with dining chair
            </p>
          </div>
          <div className="w-[158px] h-[36px] ">
            <p
              className={`${popins.className} font-[500] text-[24px] leading-[36px] text-black`}
            >
              Rs. 25,000.00
            </p>
          </div>
        </div>
      </div>
      <div className="w-[287px] h-[397] absolute top-[211px] left-[735px]">
        <div className="w-[287px] h-[287px] ">
          <Image
            src={"/images/Outdoor bar table and stool 1.png"}
            alt="image"
            width={250}
            height={376}
          />
        </div>
        <div className="w-[212px] h-[96px] grid gap-[12px]">
          <div className="w-[212px] h-[48px] ">
            <p
              className={`${popins2.className} font-[400] text-[16px] leading-[24px]`}
            >
              Outdoor bar table and stool
            </p>
          </div>
          <div className="w-[158px] h-[36px] ">
            <p
              className={`${popins.className} font-[500] text-[24px] leading-[36px] text-black`}
            >
              Rs. 25,000.00
            </p>
          </div>
        </div>
      </div>
      <div className="w-[287px] h-[397px] absolute top-[211px] left-[1053px] ">
        <div className="w-[287px] h-[287px]">
          <Image
            src={"/images/Plain console with teak mirror 1.png"}
            alt="image"
            width={240}
            height={174}
          />
        </div>
        <div className="w-[199px] h-[96px] grid gap-[12px]">
          <div className="w-[199px] h-[48px]">
            <p
              className={`${popins2.className} font-[400] text-[16px] leading-[24px]`}
            >
              Plain console with teak mirror
            </p>
          </div>
          <div className="w-[158px] h-[36px] ">
            <p
              className={`${popins.className} font-[500] text-[24px] leading-[36px] text-black`}
            >
              Rs. 25,000.00
            </p>
          </div>
        </div>
      </div>
      <div className="w-[115px] h-[49px] absolute top-[677px] left-[662px] grid gap-[19px] ">
        <button
          className={`${popins.className} font-[500] text-[20px] leading-[30px] text-black`}
        >
          View More
        </button>
        <hr className="w-[115px] border-[2px] border-solid border-black" />
      </div>
    </div>
  );
}
