"use client"
import Graph from "./components/Graph";
import { useParams } from "next/navigation";
import TabPanel from "./components/Tabs/TabPanel";
import GetStarted from "./components/GetStarted";
import Trending from "./components/Trending";
import YouMay from "./components/YouMay";

export default function Home() {
  const params = useParams();
  // console.log(params);
  const coin = params.coin as string || "BTCUSD";
  // console.log(coin)
  return (
    <div className="h-full flex flex-col gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-4 lg:pl-8">
          <Graph coin={coin} />
          <TabPanel />
        </div>
        <div className="block lg:hidden">
          <YouMay />
        </div>
        <div className="col-span-1 flex flex-col gap-4 lg:pr-8">
          <GetStarted />
          <Trending />
        </div>
        <div className="hidden lg:block lg:col-span-3">
          <YouMay />
        </div>
      </div>
    </div>
  );
}
