import { useRecoilValue } from "recoil";
import { SparklineDataState } from "../Store/Atoms";
import { useState } from "react";

function Footer() {
  return (
    <div className="flex flex-col gap-4 py-10 ">
      <div>
        <div className="pt-4 text-2xl text-[#202020] font-semibold">
          You May Also Like
        </div>
        <div className="w-full">
          <Caraousel id={1}/>
        </div>
      </div>

      <div>
        <div className="pt-4 text-2xl text-[#202020] font-semibold">
          Trending Coins
        </div>
       <div>
       <Caraousel id={2}/>
        </div>
      </div>
    </div>
  );
}
interface ChartProps {
  img: string;
  symbol: string;
  change: number;
  price: string;
  sparkLine: Record<string, string>;
}
function Chart(props: ChartProps) {
  const { img, symbol, change, price, sparkLine } = props;
  return (
    <div className="p-4 bg-white border rounded-xl border-[#E3E3E3] h-[160px] w-[250px]">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-start gap-2">
          <div className="w-5 h-5">
            <img src={img} className="rounded" alt="logo" />
          </div>
          <div className="flex items-center justify-start gap-1">
            <div className="text-base font-normal">{symbol}</div>
            {change > 0 ? (
              <div className="text-[#32BE88]  text-xs bg-[#d9f3ec] rounded-md px-1 py-1">
                +{change.toFixed(2)}%
              </div>
            ) : (
              <div className="text-[#E96975]  text-xs bg-[#f6bfbf] rounded-md px-1 py-1">
                {change.toFixed(2)}%
              </div>
            )}
          </div>
        </div>
        <div className="text-[#171717] font-medium text-lg">{price.match(/^(\$\d+(\.\d+)?)/)?.[0]}</div>
        <div className="flex items-center justify-center">
{/*  @ts-expect-error */}
          <img src={sparkLine} alt="chart" />
        </div>
      </div>
    </div>
  );
}
interface CarouselProp{
    id:number
}
function Caraousel(props:CarouselProp) {
   const{id}=props; 
  const data = useRecoilValue(SparklineDataState);
  const [defaultTransform, setDefaultTransform] = useState(0);

  const goNext = () => {
    setDefaultTransform(defaultTransform - 398);
    const slider = document.getElementById(`slider${id}`);
    // @ts-expect-error
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) {
      setDefaultTransform(0);
    }
// @ts-expect-error
    slider.style.transform = `translateX(${defaultTransform}px)`;
  };
  const goPrev = () => {
    const slider = document.getElementById(`slider${id}`);
    if (Math.abs(defaultTransform) === 0) {
      setDefaultTransform(0);
    } else {
      setDefaultTransform(defaultTransform + 398);
    }
// @ts-expect-error
    slider.style.transform = `translateX(${defaultTransform}px)`;
  };
  return (
    <div className="w-full h-full py-24 sm:py-8">
      <div className="relative flex items-center justify-center w-full">
        <button
          aria-label="slide backward"
          className="absolute left-0 z-30 p-4 ml-10 text-gray-800 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 opacity-55"
          onClick={goPrev}
        >
          <svg
            className="dark:text-gray-900"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1L1 7L7 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="w-full h-full mx-8 overflow-x-hidden overflow-y-hidden">
          <div
            id={`slider${id}`}
            className="flex items-center justify-start h-full px-8 transition duration-700 ease-out lg:gap-8 md:gap-6 gap-14 "
          >
            {data.slice(0, 14).map((item) => {
              return (
                <Chart
                  key={item.coin_id}
                  img={item.large}
                  symbol={item.symbol}
                  change={item.price_change_percentage_24h.usd}
                  price={item.price}
                  sparkLine={item.sparkline}
                />
              );
            })}
          </div>
        </div>
        <button
          aria-label="slide forward"
          className="absolute right-0 z-30 p-4 ml-10 text-gray-800 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 opacity-55"
          onClick={goNext}
        >
          <svg
            className="dark:text-gray-900"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L1 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Footer;
