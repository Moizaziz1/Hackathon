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

const popins3 = Poppins({
  subsets: ["latin"],
  weight: "300",
});

export default function Blog() {
  return (
    <div className="h-[944px] absolute top-[3108px] grid justify-center text-center place-items-center">
      <div className="w-[479px] h-[91px] grid items-center justify-center place-items-center ml-[100px]">
        <div className="w-[174px] h-[54px]">
          <h4
            className={`${popins.className} font-[500] text-[36px] leading-[54px] text-black`}
          >
            Our Blogs
          </h4>
        </div>
        <div className="w-[479px] h-[24px] ">
          <p
            className={`${popins.className} font-[500] text-[16px] leading-[24px] text-[#9F9F9F]`}
          >
            Find a bright ideal to suit your taste with our great selection
          </p>
        </div>
      </div>
      <div className="w-[1240px] h-[679px]  ml-[100px]">
        <div className="w-[1240px] h-[555px] flex gap-[31px] ">
          {/* first card */}
          <div className="grid w-[393px] h-[555px] justify-center items-center gap-[33px] place-items-center ">
            <Image
              src={"/images/Rectangle 13.png"}
              alt="image"
              width={393}
              height={393}
              className="rounded-[10px]"
            />
            <div className="w-[339px] h-[129px] grid place-items-center justify-center text-center items-center">
              <div className="w-[339px] h-[30px]">
                <p
                  className={`${popins2.className} font-[400] text-[20px] leading-[30px] text-black grid mb-[10px]`}
                >
                  Going all-in with millennial design
                </p>
              </div>
              <div className="w-[130px] h-[46px] grid gap-[13px] justify-center items-center mb-[19px]">
                <button
                  className={`${popins.className} font-[500] text-[24px] leading-[36px] text-black `}
                >
                  Read More
                </button>
                <hr className="w-[115px] border-[2px] border-solid border-black" />
              </div>
              <div className="w-[223px] h-[24px] flex gap-[19px] ">
                <div className="flex w-[73px] h-[24px] justify-between items-center">
                  <Image
                    src={"/images/Group (1).png"}
                    alt="image"
                    width={18}
                    height={17.83}
                  />
                  <p
                    className={`${popins3.className} font-[300] text-[16px] leading-[24px]`}
                  >
                    5 min
                  </p>
                </div>
                <div className="w-[131px] h-[24px] flex items-center justify-between">
                  <Image
                    src={"/images/uil_calender.png"}
                    alt="image"
                    width={22}
                    height={22}
                  />
                  <div className="w-[99px] h-[24px]">
                    <p
                      className={`${popins3.className} font-[300] text-[16px] leading-[24px]`}
                    >
                      12
                      <sup
                        className={`${popins3.className} font-[300] text-[10px] leading-[24px]`}
                      >
                        th
                      </sup>{" "}
                      Oct 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* second card */}
          <div className="grid w-[393px] h-[555px] justify-center items-center gap-[33px] place-items-center ">
            <Image
              src={"/images/Rectangle 14.png"}
              alt="image"
              width={393}
              height={393}
              className="rounded-[10px]"
            />
            <div className="w-[339px] h-[129px] grid place-items-center justify-center text-center items-center">
              <div className="w-[339px] h-[30px]">
                <p
                  className={`${popins2.className} font-[400] text-[20px] leading-[30px] text-black grid mb-[10px]`}
                >
                  Going all-in with millennial design
                </p>
              </div>
              <div className="w-[130px] h-[46px] grid gap-[13px] justify-center items-center mb-[19px] place-items-center">
                <button
                  className={`${popins.className} font-[500] text-[24px] leading-[36px] text-black`}
                >
                  Read More
                </button>
                <hr className="w-[115px] border-[2px] border-solid border-black" />
              </div>
              <div className="w-[223px] h-[24px] flex gap-[19px] ">
                <div className="flex w-[73px] h-[24px] justify-between items-center">
                  <Image
                    src={"/images/Group (1).png"}
                    alt="image"
                    width={18}
                    height={17.83}
                  />
                  <p
                    className={`${popins3.className} font-[300] text-[16px] leading-[24px]`}
                  >
                    5 min
                  </p>
                </div>
                <div className="w-[131px] h-[24px]  flex items-center justify-between">
                  <Image
                    src={"/images/uil_calender.png"}
                    alt="image"
                    width={22}
                    height={22}
                  />
                  <div className="w-[99px] h-[24px] ">
                    <p
                      className={`${popins3.className} font-[300] text-[16px] leading-[24px]`}
                    >
                      12
                      <sup
                        className={`${popins3.className} font-[300] text-[10px] leading-[24px]`}
                      >
                        th
                      </sup>{" "}
                      Oct 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* third card */}
          <div className="grid w-[393px] h-[555px] justify-center items-center gap-[33px] place-items-center ">
            <Image
              src={"/images/Rectangle 15.png"}
              alt="image"
              width={393}
              height={393}
              className="rounded-[10px]"
            />
            <div className="w-[339px] h-[129px] grid place-items-center justify-center text-center items-center">
              <div className="w-[339px] h-[30px]">
                <p
                  className={`${popins2.className} font-[400] text-[20px] leading-[30px] text-black grid mb-[10px]`}
                >
                  Going all-in with millennial design
                </p>
              </div>
              <div className="w-[130px] h-[46px] grid gap-[13px] justify-center items-center mb-[19px] place-items-center">
                <button
                  className={`${popins.className} font-[500] text-[24px] leading-[36px] text-black`}
                >
                  Read More
                </button>
                <hr className="w-[115px] border-[2px] border-solid border-black" />
              </div>
              <div className="w-[223px] h-[24px] flex gap-[19px]">
                <div className="flex w-[73px] h-[24px] justify-between items-center">
                  <Image
                    src={"/images/Group (1).png"}
                    alt="image"
                    width={18}
                    height={17.83}
                  />
                  <p
                    className={`${popins3.className} font-[300] text-[16px] leading-[24px]`}
                  >
                    5 min
                  </p>
                </div>
                <div className="w-[131px] h-[24px]  flex items-center justify-between ">
                  <Image
                    src={"/images/uil_calender.png"}
                    alt="image"
                    width={22}
                    height={22}
                  />
                  <div className="w-[99px] h-[24px]">
                    <p
                      className={`${popins3.className} font-[300] text-[16px] leading-[24px]`}
                    >
                      12
                      <sup
                        className={`${popins3.className} font-[300] text-[10px] leading-[24px]`}
                      >
                        th
                      </sup>{" "}
                      Oct 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[126px] h-[49px]  grid gap-[19px] place-items-center ml-[557px] mt-[75px]">
          <button
            className={`${popins.className} font-[500] text-[20px] leading-[30px] text-black`}
          >
            View All Post
          </button>
          <hr className="w-[115px] border-[2px] border-solid border-black" />
        </div>
      </div>
    </div>
  );
}
