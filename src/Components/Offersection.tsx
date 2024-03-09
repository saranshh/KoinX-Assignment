import {OfferSVG, SideArrowSVG } from "../Resources/Svg";

function Offersection() {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-5 rounded-lg bg-offerBg">
      <div className="flex flex-col items-center justify-center gap-6 ">
        <div className="px-6 text-2xl font-bold text-center text-white">
          Get Started with KoinX for Free
        </div>
        <div className="text-sm  text-[#f2f2f2] font-medium text-center">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </div>
      </div>

      <div className="mt-10">
        <OfferSVG />
      </div>

      <button className="flex items-center justify-center gap-2 px-6 py-2 my-6 bg-white rounded-md ">
        <div className="text-base font-semibold">Get Started for FREE</div>
        <SideArrowSVG/>
      </button>
    </div>
  );
}


export default Offersection;
