function Navigation() {
  return (
    <div className="flex items-center justify-start gap-6 mt-5 overflow-x-auto bg-transparent border-b tab:overflow-hidden ">
        <div className="text-base font-semibold text-[#0141CF]  cursor-pointer border-b-[3px] border-b-[#0052FE] py-2">Overview</div>

        {['Fundamentals','News Insights','Sentiments','Team','Technicals',
        'Tokenomics'].map((item,key)=>{
            return <div key={key}  className="text-base  font-medium cursor-pointer text-[#3E424A] px-2 my-2">{item.replace(/ /g, "\u00A0")}</div>
        })    
    }
    </div>
  )
}

export default Navigation