import { Poppins } from "next/font/google";

const popins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const popins4 = Poppins({
  subsets: ["latin"],
  weight: "400",
});



export default function Footer() {
  return (
    <div className="h-[555px] absolute top-[4497px] ">
      <div className="w-[1240.01px] h-[419px] ml-[100px]">
        <div className="w-[1131px] h-[312px] flex justify-between mt-[98px]">
          <div className="w-[285px] h-[72px] mt-[108px]">
            <p
              className={`${popins4.className} text-[16px] leading-[24px] text-[#9F9F9F]`}
            >
              400 University Drive Suite 200 Coral Gables,
            </p>
            <p
              className={`${popins4.className} text-[16px] leading-[24px] text-[#9F9F9F]`}
            >
              FL 33134 USA
            </p>
          </div>
          <div className="w-[710px] h-[312px] flex gap-[72px]">
            <div className="w-[352px] h-[312px] flex justify-between ">
              <div className="w-[68px] h-[312px] grid gap-[55px]">
                <p
                  className={`w-[40px] h-[24px] ${popins.className} text-[16px] leading-[24px] text-[#9F9F9F]`}
                >
                  Links
                </p>
                <ul
                  className={`${popins.className} text-[16px] leading-[24px] text-black grid gap-[46px]`}
                >
                  <li>Home</li>
                  <li>Shop</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="w-[140px] h-[242px] grid gap-[55px]">
                <p
                  className={`${popins.className} text-[16px] leading-[24px] text-[#9F9F9F]`}
                >
                  Help
                </p>
                <ul
                  className={`${popins.className} text-[16px] leading-[24px] text-black grid gap-[46px]`}
                >
                  <li>Payment Options</li>
                  <li>Returns</li>
                  <li>Privacy Policies</li>
                </ul>
              </div>
            </div>
            <div className="w-[286px] h-[101px] grid gap-[53px] ">
              <div className="w-[86px] h-[24px] ">
                <p
                  className={`${popins.className} text-[16px] leading-[24px] text-[#9F9F9F]`}
                >
                  Newsletter
                </p>
              </div>
              <div className="w-[286px] h-[24px] flex gap-[38px]">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    className={`${popins4} text-[#9F9F9F] text-[14px] leading-[21px] w-[1]`}
                  />
                  <hr className="w-[200px] border-[1px] border-black" />
                </div>
                <div>
                  <p
                    className={`${popins.className} text-[14px] leading-[21px] text-black`}
                  >
                    SUBSCRIBE
                  </p>
                  <hr className="w-[75.01px] border-[1px] border-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid mt-[48px]">
          <hr className="w-[1240.01px] border-[1px] border-[#D9D9D9]" />
        </div>
        <div className="w-[306px] h-[24px] mt-[35px]">
          <p
            className={`${popins4.className} text-[16px] leading-[24px] text-black`}
          >
            2022 Meubel House. All rights reverved
          </p>
        </div>
      </div>
    </div>
  );
}
