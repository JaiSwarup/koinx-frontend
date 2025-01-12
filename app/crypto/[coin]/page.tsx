"use client"
import Graph from "./components/Graph";
import { useParams } from "next/navigation";
import TabPanel from "./components/Tabs/TabPanel";

export default function Home() {
  const params = useParams();
  console.log(params);
  const coin = params.coin as string || "BTCUSD";
  // console.log(coin)
  return (
    <div className="mx-auto grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <Graph coin={coin} />
        <TabPanel />
      </div>
      <div className="col-span-1 bg-blue-700 rounded-xl container"></div>
    </div>
  );
}
