import TrendingList from "./TrendingList"

function TrendingSection() {
  return (
    <div className="p-6 bg-white rounded-lg">
        <div className="text-2xl font-semibold">
            Trending Coins (24h)
        </div>
        <TrendingList/>
    </div>
  )
}

export default TrendingSection