import Abourbitcoin from "./Aboutbitcoin";
import Chartsection from "./Chartsection";
import Navigation from "./Navigation";
import Offersection from "./Offersection";
import PerformanceSection from "./PerformanceSection";
import Sentiment from "./Sentiment";
import Team from "./Team";
import Tokenomics from "./Tokenomics";
import TrendingSection from "./TrendingSection";

function Cardcontent() {
  return (
    <div className="flex flex-wrap gap-5 tab:gap-5 tab-flex tab:flex-nowrap">
      {/* Left section */}
      <div className=" w-[100%] tab:w-[70%]  h-fit">
        <Chartsection />
        <div className="flex flex-col gap-5">
          <Navigation />
          <PerformanceSection />
          <Sentiment/>
          <Abourbitcoin/>
          <Tokenomics/>
          <Team/>
        </div>
      </div>
      {/* Right Section */}
      <div className=" flex flex-col gap-5 tab:w-[35%] w-[100%]">
        <Offersection />
        <TrendingSection />
      </div>
    </div>
  );
}

export default Cardcontent;
