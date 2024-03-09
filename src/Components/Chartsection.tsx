import BTC from "../Resources/Png/bitcoin-btc-logo.png";
import TradingViewWidget from "./TradingViewWidget";
import { DownTriangle, TriangleSVG } from "../Resources/Svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ETH from "../Resources/Png/ethereum-eth7803.logowik.com.png";

interface Props {
  Change: string;
  isPositive: boolean;
}

function Chartsection() {
  const { pathname } = useLocation();
  const path = PathSetter(pathname.substring(1));
  const response = fetchData(path);

  const { rupee, USD, Change, isPositive } = response;
  return (
    <div className="flex flex-col gap-10 p-4 bg-white rounded-md mobile:p-6">
      {/* <Charthead  /> */}
      <div className="flex justify-start gap-10">
        <div className="flex items-center justify-start gap-2 ">
          <div className="">
            {path === "bitcoin" ? (
              <img
                src={BTC}
                alt="logo"
                className="w-14 tab:w-9 mobile:w-9 mobile:h-9"
              />
            ) : (
              <img
                src={ETH}
                alt="logo"
                className="w-14 h-14 tab:w-14 mobile:w-11 mobile:h-11"
              />
            )}
          </div>
          
          {path === "bitcoin" ? (
            <div className="flex items-center justify-start gap-2">
              <div className="text-2xl font-semibold text-center">Bitcoin</div>
              <div className="my-auto text-base font-semibold text-center text-textLgt">
                BTC
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-start gap-2">
              <div className="text-2xl font-semibold text-center">Ethereum</div>
              <div className="my-auto text-base font-semibold text-center text-textLgt">
                ETH
              </div>
            </div>
          )}
        </div>
        <div className="">
          <div className=" py-2 px-4 mobile:px-2 w-full text-sm mobile:text-base text-white font-medium rounded-md bg-[#808A9D]">
            Rank#1
          </div>
        </div>
      </div>
      {/* <ChartMain /> */}
      <div>
        <div className="flex justify-start gap-2 mobile:gap-8">
          <div className="flex flex-col items-start">
            <div className="font-semibold text-[28px]">{USD}</div>
            <div className="text-base font-medium ">{rupee}</div>
          </div>
          <ChangeComponent Change={Change} isPositive={isPositive} />
        </div>
      </div>

      {/* Chart */}
      {
        path === "bitcoin"?(
          <div>
        <div className="pb-3 text-base font-semibold">
          Bitcoin Price Chart(USD)
        </div>
          <TradingViewWidget symbol="BTC" />
      </div>
        ):(
          <div>
        <div className="pb-3 text-base font-semibold">
          Ethereum Price Chart(USD)
        </div>
          <TradingViewWidget symbol="ETH" />
      </div>
        )
      }
      
    </div>
  );
}
const PathSetter = (path: string) => {
  if (path === "bitcoin" || path === "") {
    return "bitcoin";
  }
  return "ethereum";
};
const fetchData = (coinID: string) => {
  const [response, setResponse] = useState({
    inr: 0,
    inr_24h_change: 0,
    usd: 0,
    usd_24h_change: 0,
  });

  useEffect(() => {
    const getData=async ()=>{
      try {
        axios
      .get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinID}&vs_currencies=inr%2Cusd&include_24hr_change=true`
      )
      .then((res: any) => {
        setResponse(res.data[coinID]);
      });
      } catch (err) {
        console.log(err)
      }
    }
    getData();
    const Interval= setInterval(getData,60000)

    // Cleanup function
    return ()=>clearInterval(Interval);
  }, []);

  const rupee = NumToRup(response.inr);
  const USD = NumToUSD(response.usd);
  const isPositive = response.usd_24h_change > 0;
  const Change = Math.abs(response.usd_24h_change).toFixed(2);

  return {
    rupee,
    USD,
    Change,
    isPositive,
  };
};
function ChangeComponent(props: Props) {
  const { Change, isPositive } = props;
  if (isPositive) {
    return (
      <div className="flex gap-3 ">
        <div className="text-base font-medium text-center h-fit text-[#14B079] gap-2 rounded px-2  bg-green-100 mt-2 flex items-center">
          <TriangleSVG />
          {Change}%
        </div>

        <div className="pt-2  text-sm text-[#768396] font-medium">(24H)</div>
      </div>
    );
  }
  return (
    <div className="flex gap-3 ">
      <div className="flex items-center gap-2 px-2 mt-2 text-base font-medium text-center text-red-700 bg-red-100 rounded h-fit">
        <div className="text-red-700 w-[11px] h-[8px] mb-1 text-center">
          {/* DownTriangle */}
          <DownTriangle />
        </div>
        {Change}%
      </div>

      <div className="pt-2  text-sm text-[#768396] font-medium">(24H)</div>
    </div>
  );
}

function NumToRup(number: number) {
  if (isNaN(number)) {
    return "Invalid Number";
  }
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return formatter.format(number);
}
function NumToUSD(number: number) {
  if (isNaN(number)) {
    return "Invalid Number";
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(number);
}

export default Chartsection;
