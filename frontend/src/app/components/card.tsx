
import Image from "next/image";

interface CardProps {
    title: string;
    summary: string;
    author: string;
    

}


export default function Card(card:CardProps) {
    return (
        <div className="flex flex-col items-center w-1/5 h-60 m-4 p-4 rounded-md border-2 border-gray-400">
          
            <h2 className="text-lg my-2">{card.title}</h2>
            <p className="text-sm my-2">{card.summary}</p>
            <p className="text-xs my-2 place-self-end ">By {card.author}</p>
        </div>

    )
}
    