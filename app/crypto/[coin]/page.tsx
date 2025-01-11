"use client"
import Graph from "./components/Graph";
import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams();
  console.log(params);
  const coin = params.coin as string || "BTCUSD";
  // console.log(coin)
  return (
    <div className="mx-auto flex h-full w-full gap-8">
      <div className="flex-1 ">
        <Graph coin={coin} />
      </div>
      <div className="flex-[0.5] bg-blue-700 rounded-xl container"></div>
    </div>
  );
}
