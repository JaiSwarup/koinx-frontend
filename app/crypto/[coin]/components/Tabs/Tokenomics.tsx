import { PieChart, Pie, Tooltip, Legend } from "recharts";

export default function Tokenomics() {
    const data = [
        {
            name: 'Foundation', percentage : 20, fill: '#FAA002'
        },
        {
            name: 'Crowdsale Investors', percentage : 80, fill: '#0082FF'
        }, 
    ]
    const renderColorfulLegendText = (value: string, entry: any) => {
        const { payload } = entry;
        const percentage = payload.percentage;
        console.log(entry)
        return <span className="text-gray-600 text-sm font-light">{`${value}: ${percentage}%`}</span>;
      }
      
    return (
        <div>
            <h1 className="font-medium text-3xl mb-4">Tokenomics</h1>
            <h2 className='font-medium text-xl'>Initial Distribution</h2>
            <div className='w-96 h-56 relative flex'>
            <PieChart width={384} height={224}>
                <Tooltip />
                <Legend layout="vertical" verticalAlign="middle" align="right" 
                // margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                formatter={renderColorfulLegendText}
                />
                <Pie
                    data={data}
                    dataKey="percentage"
                    color="color"
                    outerRadius={50}
                    innerRadius={25}
                    startAngle={-270}
                    endAngle={90}
                />
            </PieChart>
            </div>
            <p>
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
            </p>
        </div>
    );
}