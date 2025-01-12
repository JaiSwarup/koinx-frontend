"use client"
import React, {useEffect, useRef, memo, useState} from 'react'
import Image from 'next/image';
import clsx from 'clsx';
import axios from 'axios';
type Props = {
    coin: string
};

function TradingViewWidget({ coin }: Props) {
  const container = useRef<HTMLDivElement>(null);
//   const [duration, setDuration] = useState("D");
  const [data, setData] = useState<any>({});

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
        // return () => {
        //     container.current?.removeChild(script);
        // }
        },
    []
  );

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`, {
        // params: {
        //     vs_currencies: "inr,usd",
        //     include_24hr_change: true
        // }
    })
    .then((res) => {
    console.log(res)
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [coin]);

  return (
    <div className='h-[calc(100vh-96px)] bg-white rounded-xl p-4 flex flex-col gap-4 overflow-hidden'>
      {data.image ? (
        <>
          <div className='flex items-center gap-4'>
            <div className='w-8 h-8 relative'>
              <Image src={data.image.large} alt={`${data.name} logo`} fill />
            </div>
            <h1 className='text-3xl flex items-center gap-4'>
              {data.name} <span className='text-gray-500 text-sm'>{data.symbol.toUpperCase()}</span>
            </h1>
            <p className='bg-gray-600 rounded-md px-2 py-1 text-white text-sm'>
              Rank #{data.market_cap_rank}
            </p>
          </div>
          <div className='flex flex-col justify-center gap-4'>
            <div className='flex items-center gap-4'>
              <h1 className='text-3xl font-semibold'>
                {data.market_data.current_price.usd.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </h1>
              <p className='text-gray-500'>24h</p>
            </div>
            <div className='flex items-center gap-4'>
              &#x20B9;{' '}
              {data.market_data.current_price.inr.toLocaleString('en-IN')}
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <div
        className='tradingview-widget-container flex-1'
        ref={container}
        style={{ height: '100%', width: '100%' }}
      >
        <div
          className='tradingview-widget-container__widget'
          style={{ height: 'calc(100% - 32px)', width: '100%' }}
        ></div>
      </div>
    </div>
  );
}  

export default memo(TradingViewWidget);
