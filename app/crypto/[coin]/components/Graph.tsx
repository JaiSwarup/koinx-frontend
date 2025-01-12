"use client"
import React, {useEffect, useRef, memo, useState} from 'react'
import { FaBitcoin } from 'react-icons/fa';
import clsx from 'clsx';
import axios from 'axios';
type Props = {
    coin: string
};

function TradingViewWidget({ coin }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState("D");
  const [data, setData] = useState<any>({usd: 0, inr: 0, usd_24h_change: 0});

  useEffect(
    () => {
        if (!container.current) return;
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
            {
              "autosize": true,
              "symbol": "BITSTAMP:BTCUSD",
              "interval": "D",
              "timezone": "Etc/UTC",
              "theme": "light",
              "style": "2",
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
        return () => {
            container.current?.removeChild(script);
        }
        },
    []
  );

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/simple/price", {
        params: {
            ids: "bitcoin",
            vs_currencies: "inr,usd",
            include_24hr_change: true
        }
    })
    .then((res) => {
    // console.log(res)
      setData(res.data.bitcoin);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [coin]);

  return (
    <div className='h-[calc(100vh-96px)] bg-white rounded-xl p-4 flex flex-col gap-4 overflow-hidden'>
        <div className='flex items-center gap-4'>
            <FaBitcoin className="text-yellow-400 text-4xl" />
            <h1 className='text-3xl flex items-center gap-4'> Bitcoin <span className='text-gray-500 text-sm'>BTC</span></h1>
            <p className='bg-gray-600 rounded-md px-2 py-1 text-white text-sm'>Rank #1</p>
        </div>
        <div className='flex flex-col justify-center gap-4'>
            <div className='flex items-center gap-4'>
                <h1 className='text-3xl font-semibold'>
                    {data.usd.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                    })}
                </h1>
                <p className={clsx(data.usd_24h_change > 0 ? 'text-green-500' : 'text-red-500')}>{data.usd_24h_change > 0 ? '+' : '-'}{data.usd_24h_change.toFixed(2)}%</p>
                <p className='text-gray-500'>24h</p>
            </div>
            <div className='flex items-center gap-4'>
                &#x20B9; {data.inr.toLocaleString('en-IN')}
            </div>
        </div>
        <div className="tradingview-widget-container flex-1" ref={container} style={{ height: "100%", width: "100%" }}>
          <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
          {/* <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div> */}
        </div>
    </div>
  );
}

export default memo(TradingViewWidget);
