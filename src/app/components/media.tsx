import Image from "next/image";
import { Poppins } from "next/font/google";


const popins4 = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const popins7 = Poppins({
  subsets: ["latin"],
  weight: "700",
});

export default function Media() {
  return (
    <div className="h-[450px] absolute top-[4052px]">
      <Image
        src={"/images/Rectangle 17.png"}
        alt="image"
        width={1440}
        height={450}
      />
      <div className="w-[454px] h-[202px] grid justify-center place-items-center text-center absolute top-[124px] left-[493px] ">
        <div className="w-[454px] h-[120px] grid justify-center place-items-center ">
          <div
            className={`${popins7.className} font-[700] text-[60px] leading-[90px]`}
          >
            <h2>Our Instagram</h2>
          </div>
          <div className="w-[297px] h-[30px]">
            <p
              className={`${popins4.className} font-[400] text-[20px] leading-[30px]`}
            >
              Follow our store on Instagram
            </p>
          </div>
        </div>
        <div className="w-[255px] h-[64px] ">
          <button
            className={`${popins4.className} text-[20px] text-black leading-[30px] w-[255px] h-[64px] rounded-[50px] shadow-xl`}
          >
            Follow Us
          </button>
        </div>
      </div>
    </div>
  );
}
