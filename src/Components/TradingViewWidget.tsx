// TradingViewWidget.tsx
import { useEffect, useRef, memo } from 'react';
interface Props{
  symbol:string
}

function TradingViewWidget(props:Props) {
  
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "width": "auto",
        "height": "350",
        "symbol": "BITSTAMP:${props.symbol}USD",
        "interval": "180",
        "timezone": "Asia/Kolkata",
        "theme": "light",
        "style": "2",
        "locale": "en",
        "enable_publishing": false,
        "hide_top_toolbar": true,
        "hide_legend": true,
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;
    if (container.current) {
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">

      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
