import RangeSlider from "../Resources/Png/RangeSlider.png";
import { ExclamatorySVG, SliderTriangleSVG } from "../Resources/Svg";

function PerformanceSection() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-lg">
      <div className="text-2xl font-semibold text-headingColor">Performace</div>
      {/* Lines */}
      <div className="flex flex-col gap-7">
        {/* First */}
        <div className="flex items-center gap-4 justify-evenly">
          <div className="flex flex-col justify-center gap-[10px] pr-4">
            <div className="text-sm font-normal text-[#44475B]">
              Today's Low
            </div>
            <div className=" text-base font-medium text-[#44475B]">
              46,930.22
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 ">
            <img src={RangeSlider} alt="slider" />
            <div className="">
              <div className="flex items-center justify-center">
                <SliderTriangleSVG />
              </div>
              <div className="pt-1 text-center text-[#44475B] font-normal text-sm">
                $48,637.83
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-[10px] pr-4">
            <div className="text-sm font-normal text-[#44475B]">
              Today's High
            </div>
            <div className=" text-base font-medium text-[#44475B]">
              49,343.83
            </div>
          </div>
        </div>
        {/* Second */}
        <div className="flex items-center gap-4 justify-evenly">
          <div className="flex flex-col justify-center gap-[10px] pr-4">
            <div className="text-sm font-normal text-[#44475B]">52W Low</div>
            <div className=" text-base font-medium text-[#44475B]">
              16,930.22
            </div>
          </div>

          <div>
            <img src={RangeSlider} alt="" />
          </div>

          <div className="flex flex-col justify-center gap-[10px] pr-4">
            <div className="text-sm font-normal text-[#44475B]">52W High</div>
            <div className=" text-base font-medium text-[#44475B]">
              49,743.83
            </div>
          </div>
        </div>

        {/* Fundamentals */}
        <div>
          <div className="flex items-center justify-start gap-2 mt-4">
            <div className="font-medium text-[19px] text-[#44475B]">
              Fundamentals
            </div>
            <div>
              <ExclamatorySVG />
            </div>
          </div>
          {/* Full div */}
          <div className="hidden mobile:flex mobile:flex-row mobile:gap-16 mobile:justify-between mobile:items-center">
            <div className="flex flex-col items-start justify-center w-full ">
              <div className="flex flex-row items-center justify-between w-full py-3 border-b-2">
                <div className="text-[#768396] text-start  text-base font-medium">
                  Bitcoin Price
                </div>
                <div className="text-sm font-medium text-black text-end">
                  $16,815.46
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-4 py-3 border-b-2">
                <div className="text-[#768396] text-base text-start font-medium">
                  24h Low / 24h High
                </div>
                <div className="text-sm font-medium text-black text-end">
                  $16,382.07 / $16,874.12
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-4 py-3 border-b-2">
                <div className="text-[#768396] text-base text-start font-medium">
                  7d Low / 7d High
                </div>
                <div className="text-sm font-medium text-black text-end">
                  $16,382.07 / $16,874.12
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-4 py-3 border-b-2">
                <div className="text-[#768396] text-base text-start font-medium">
                  Trading Volume
                </div>
                <div className="text-sm font-medium text-black text-end">
                  $23,249,202,782
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-4 py-3 border-b-2">
                <div className="text-[#768396] text-base text-start font-medium">
                  Market Cap
                </div>
                <div className="text-sm font-medium text-black text-end">
                  $23,249,202,782
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-full ">
              <div className="flex flex-row items-center justify-between w-full gap-4 py-3 border-b-2">
                <div className="text-[#768396] text-base text-start font-medium">
                  Market Cap Dominance
                </div>
                <div className="text-sm font-medium text-black text-end">
                  38.343%
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-4 py-3 border-b-2">
                <div className="text-[#768396] text-base text-start font-medium">
                  Market Cap Rank
                </div>
                <div className="text-sm font-medium text-black text-end">
                  #1
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-4 py-2 border-b-2">
                <div className="text-[#768396] text-base text-start font-medium">
                  Volume / Market Cap
                </div>
                <div className="text-sm font-medium text-black text-end">
                  0.0718
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-4 py-3 border-b-2">
                <div className="text-[#768396] text-base text-start font-medium">
                  All-Time High
                </div>
                <div className="text-sm font-medium text-black text-end">
                  <div>
                    $69,044.77 <a className="text-red-600 ">-75.6%</a>
                  </div>
                  <div className="text-xs font-normal">
                    Nov 10, 2021 <a>(about 1 year)</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-4 py-2 border-b-2">
                <div className="text-[#768396] text-base text-start font-medium">
                  All-Time Low
                </div>
                <div className="text-sm font-medium text-black text-end">
                  <div>
                    $69,044.77 <a className="text-green-600 ">-75.6%</a>
                  </div>
                  <div className="text-xs font-normal">
                    Nov 10, 2021 <a>(about 1 year)</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Div */}
          <div className="flex flex-col mobile:hidden ">
            <div className="flex flex-row items-center justify-between w-full py-2 border-b-2">
              <div className="text-[#768396] text-start  text-base font-medium">
                Bitcoin Price
              </div>
              <div className="text-sm font-medium text-black text-end">
                $16,815.46
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-4 py-2 border-b-2">
              <div className="text-[#768396] text-base text-start font-medium">
                24h Low / 24h High
              </div>
              <div className="text-sm font-medium text-black text-end">
                $16,382.07 / $16,874.12
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-4 py-2 border-b-2">
              <div className="text-[#768396] text-base text-start font-medium">
                7d Low / 7d High
              </div>
              <div className="text-sm font-medium text-black text-end">
                $16,382.07 / $16,874.12
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-4 py-2 border-b-2">
              <div className="text-[#768396] text-base text-start font-medium">
                Trading Volume
              </div>
              <div className="text-sm font-medium text-black text-end">
                $23,249,202,782
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-4 py-2 border-b-2">
              <div className="text-[#768396] text-base text-start font-medium">
                Market Cap
              </div>
              <div className="text-sm font-medium text-black text-end">
                $23,249,202,782
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-4 py-2 border-b-2">
              <div className="text-[#768396] text-base text-start font-medium">
                Market Cap Dominance
              </div>
              <div className="text-sm font-medium text-black text-end">
                38.343%
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-4 py-2 border-b-2">
              <div className="text-[#768396] text-base text-start font-medium">
                Volume / Market Cap
              </div>
              <div className="text-sm font-medium text-black text-end">
                0.0718
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-4 py-2 border-b-2">
              <div className="text-[#768396] text-base text-start font-medium">
                All-Time High
              </div>
              <div className="text-sm font-medium text-black text-end">
                <div>
                  $69,044.77 <a className="text-red-600 ">-75.6%</a>
                </div>
                <div className="text-xs font-normal">
                  Nov 10, 2021 <a>(about 1 year)</a>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-4 py-2 border-b-2">
              <div className="text-[#768396] text-base text-start font-medium">
                All-Time Low
              </div>
              <div className="text-sm font-medium text-black text-end">
                <div>
                  $69,044.77 <a className="text-green-600 ">-75.6%</a>
                </div>
                <div className="text-xs font-normal">
                  Nov 10, 2021 <a>(about 1 year)</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceSection;
