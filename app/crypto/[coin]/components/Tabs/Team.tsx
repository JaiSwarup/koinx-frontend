import TeamCard from "./TeamCard";

type Props = {
    
};

export default function Team({  }: Props) {
    return (
        <div>
            <h1 className="font-medium text-3xl mb-4">Tokenomics</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
            <div className="flex flex-col gap-4">
                <TeamCard src="/john.png" name="John Smith" position="Designation here" />
                <TeamCard src="/elina.png" name="Elina Williams" position="Designation here" />
                <TeamCard src="/johnny.png" name="John Doe" position="Designation here" />
            </div>
        </div>
    );
}