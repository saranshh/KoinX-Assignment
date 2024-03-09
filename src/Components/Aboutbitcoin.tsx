import MobileImg from "../Resources/Png/MobileImg1.png";
import MobileImg2 from "../Resources/Png/Mobile2.png";
import { SideArrowSVG } from "../Resources/Svg";

function Abourbitcoin() {
  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="text-2xl font-semibold text-headingColor">About Bitcoin</div>

      <div className="flex flex-col gap-4 mt-6 ">
        <div className="flex flex-col border-b-2 border-b-[#C9CFDD99] gap-[10px] pb-4">
          <div className="text-lg font-bold">What is Bitcoin?</div>
          <div className="text-base font-medium text-[#3E424A] text-justify mobile:text-left">
            Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </div>
        </div>

        <div className="flex flex-col border-b-2 border-b-[#C9CFDD99] gap-[10px] pb-4">
          <div className="text-lg font-bold">Lorem ipsum dolor sit amet</div>
          <div className="text-base font-medium py-2 text-[#3E424A] text-justify mobile:text-left">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
            Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          </div>
          <div className="text-base font-medium py-2 text-[#3E424A]">
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
            velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
            faucibus diam mi nunc praesent massa turpis a. Integer dignissim
            augue viverra nulla et quis lobortis phasellus. Integer pellentesque
            enim convallis ultricies at.
          </div>
          <div className="text-base font-medium py-2 text-[#3E424A]">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </div>
        </div>

        <div className="flex flex-col border-b-2 border-b-[#C9CFDD99] gap-2 pb-4 mt-4">
          <div className="text-2xl font-semibold">Already Holding Bitcoin?</div>
          <div className="flex flex-col justify-start gap-4 py-4 tab:flex-row tab:justify-evenly tab:items-center">
            <CardLeft />
            <CardRight />
          </div>
        </div>
        <div className="mb-4 text-base font-medium text-mainText">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </div>
      </div>
    </div>
  );
}

function CardLeft() {
  return (
    <div className="w-full mobile:w-[50%] flex gap-4 bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] p-4 rounded-md">
      <div className="flex items-center justify-center ">
        <img src={MobileImg} className="w-full h-full" alt="img" />
      </div>

      <div className="flex flex-col items-center">
        <div className="w-[80%] text-xl font-bold  text-white">
          Calculate your Profits
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-2 my-6 bg-white rounded-md ">
          <div className="text-base font-semibold">Check Now</div>
          <SideArrowSVG />
        </button>
      </div>
    </div>
  );
}
function CardRight() {
  return (
    <div className="w-full mobile:w-[50%] flex gap-4 bg-gradient-to-br from-[#FF9865] to-[#EF3031] p-4 rounded-md">
      <div className="flex items-center justify-center">
        <img src={MobileImg2} className="w-full h-full" alt="img" />
      </div>

      <div className="flex flex-col items-start gap-0 pl-6">
        <div className="w-[80%] text-xl font-bold  text-white">
          Calculate your Tax Liability
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-2 my-6 bg-white rounded-md ">
          <div className="text-base font-semibold">Check Now</div>
          <SideArrowSVG />
        </button>
      </div>
    </div>
  );
}

export default Abourbitcoin;
