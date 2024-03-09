import axios from "axios";
import { useEffect, useState } from "react"
import { DownTriangle, TriangleSVG } from "../Resources/Svg";
import { useSetRecoilState } from "recoil";
import { SparklineDataState } from "../Store/Atoms";

interface Item {
    item: {
      coin_id:number;  
      name: string;
      symbol: string;
      large: string;
      data: {
        price_change_percentage_24h: Record<string, number>;
        sparkline:Record<string,string>;
        price:string
      };
    };
}

function TrendingList() {
   const data = fetchData();
  UpdateRecoilState(data);
  return (
    <div>
        {data.slice(0,3).map((item)=>{
            return <div key={item.coin_id} className="flex items-center justify-between my-4">
                <div className="flex items-start justify-start gap-2 rounded-md">
                    <img src={item.large} className="w-6 h-6" alt="logo" />
                    <div className="flex items-center justify-center gap-1 text-base font-medium" >
                        <div className="">{item.name}</div>
                        <div className="font-semibold">({item.symbol})</div>
                    </div>
                </div>
                { 
                    item.price_change_percentage_24h.usd > 0 ? <div className="flex gap-3 w-[90px] items-center justify-center">
                    <div className=" text-sm text-center font-normal h-fit text-[#14B079] gap-2 rounded px-2 w-full   bg-green-100 mt-2 flex items-center">
                        <TriangleSVG/>
                      {item.price_change_percentage_24h.usd.toFixed(2)}%
                    </div>
                  </div>:
                  <div className="flex gap-3 text-xs w-[90px] items-center justify-center">
                  <div className="flex items-center gap-2 px-2 mt-2 text-sm font-normal text-center text-red-700 bg-red-100 rounded h-fit">
                    <div className="text-red-700 w-[11px] h-[8px]  text-center">
                      {/* DownTriangle */}
                      <DownTriangle/>
                    </div>
                    {item.price_change_percentage_24h.usd.toFixed(2)}%
                  </div>
                </div>
                }
            </div>
        })}
    </div>
  )
}
function UpdateRecoilState(data:any){
  const recoilValue = useSetRecoilState(SparklineDataState);
  useEffect(()=>{
    recoilValue(data);
  })
}
const fetchData = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    axios
    .get("https://api.coingecko.com/api/v3/search/trending")
    .then((res) => {
      setResponse(res.data.coins);
      });
  }, []);
  
  const data :Item[]=response;
  const extractedData = data.map((item: Item) => {
    const {
      coin_id,  
      name,
      symbol,
      large,
      data: { price_change_percentage_24h,sparkline,price }
    } = item.item;
    return {
      coin_id,  
      name,
      symbol,
      large,
      price_change_percentage_24h,
      sparkline,
      price
    };
  });
  
  
  return extractedData;
};

export default TrendingList