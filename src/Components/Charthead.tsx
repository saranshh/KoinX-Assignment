import BTC from "../Resources/Png/bitcoin-btc-logo.png";

function Charthead() {
  return (
    <div className="flex justify-start gap-10">
      <div className="flex items-center justify-start gap-2 ">
        <div className="">
          <img src={BTC} alt="logo" className="w-14 tab:w-9 mobile:w-9 mobile:h-9" />
        </div>
        <div className="text-2xl font-semibold text-center">Bitcoin</div>
        <div className="my-auto text-base font-semibold text-center text-textLgt">
          BTC
        </div>
      </div>
      <div className="">
        <div className=" py-2 px-4 mobile:px-2 w-full text-sm mobile:text-base text-white font-medium rounded-md bg-[#808A9D]">
          Rank#1
        </div>
      </div>
    </div>
  );
}

export default Charthead;
