import { atom } from "recoil";
interface CoinData {
    coin_id: number;
    name: string;
    symbol: string;
    large: string;
    price_change_percentage_24h: Record<string, number>;
    sparkline: Record<string, string>;
    price:string;
  }
export const SparklineDataState = atom <Array<CoinData>>(
    {
        key: "SparklineDataState",
        default:[] 
    }
)