"use client"
import React, {useEffect, useRef, memo, useState} from 'react'
type Props = {
    coin: string
};

export default function Graph({ coin }: Props) {
    const container = useRef<HTMLDivElement>(null);
    const [duration, setDuration] = useState("1W"); 

    const durations : {[key:string] : string} = {
        "1H" : "60",
        "4H" : "240",
        "1D" : "D",
        "1W" : "W",
    };

    const handleClick = (duration: string) => {
        if (!container.current) {
            return;
        }
        setDuration(duration);
        // trigger re-render
        
    }

    useEffect(() => {
        if (container.current === null) {
            return;
        }
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "timezone": "Etc/UTC",
          "theme": "light",
          "interval": "${duration}",
          "style": "0",
          "locale": "en",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "allow_symbol_change": false,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
        container.current.appendChild(script);
      },
      [duration]
    );
  
    return (
        <div className='h-full w-full flex flex-col overflow-hidden bg-white rounded-xl'>
            <div>
                <h1 className='text-2xl font-semibold text-gray-900'>{coin}</h1>
            </div>
            <div className='flex justify-between'>
                <h1 className='text-lg font-semibold text-gray-900'>{coin} Price Chart</h1>
                <div className='flex gap-2'>
                    {Object.keys(durations).map((key) => {
                        return <button key={key} onClick={() => handleClick(key)} className={`px-2 py-1 rounded-md ${duration === key ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'}`}>{key}</button>
                    })}
                </div>
            </div>
            <div className='flex-1'>
            <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
              <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
              {/* <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div> */}
            </div>
            </div>
        </div>
    );
}