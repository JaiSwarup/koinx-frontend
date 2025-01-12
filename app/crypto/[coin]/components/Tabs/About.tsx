import AboutCard from "./AboutCard";

export default function About() {

    return (
        <div>
            <h1 className="font-medium text-3xl mb-4">About Bitcoin</h1>
            <h2 className="font-medium text-xl mb-4">What is Bitcoin?</h2>
            <p className="">
                Bitcoin&apos;s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
            </p>
            <div className="w-full h-[2px] bg-gray-400 my-2" />
            <h2 className="font-medium text-xl mb-4">Lorem Dolor Ipsum</h2>
            <p className="">
                Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  
            </p>
            <p className="">
                Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
            </p>
            <p>
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
            </p>
            <div className="w-full h-[2px] bg-gray-400 my-2" />
            <h2 className="font-medium text-xl mb-4">Already Holding Bitcoin?</h2>
            <div className="flex gap-2">
                <AboutCard src="/first.png" color="bg-gradient-to-br from-emerald-300 to-blue-900" title="Calculate your Profits" /> 
                <AboutCard src="/second.png" color="bg-gradient-to-br from-orange-400 to-red-800" title="Calculate your tax liability" /> 
            </div>
            <div className="w-full h-[2px] bg-gray-400 my-2" />
            <p>
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
            </p>
        </div>
    );
}