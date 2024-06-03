import { prisma } from "@/lib/prisma";
import {AirportPairCard} from "../components/cards";

const CONNECTIONS =[
    //Point mugu - san nicolas
    ['KNTD','KNSI'],
    // china lake - Pointmugu
    ['KNID','KNTD'],
    //north island - san clemente
    ['KNZY','KNUC']
]

export default async function LandingPage() {
    const connectionsPromise = CONNECTIONS.map(async([from,to]) =>{
        const fromAirport = await prisma.airport.findUnique({
            where: {code:from},
        });
            const toAirport = await prisma.airport.findUnique({
                where: {code:to},
    })

    if (fromAirport == null || toAirport ==null){
        throw new Error("Error: airport not found from code");
    }
    return [fromAirport,toAirport];
});

    const connections = await Promise.all(connectionsPromise)
    return (

        <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
            
            <h1 className="text-3xl font-bold mb-8">Welcome to My Next.js App</h1>
            
            <div className="flex flex-wrap justify-center gap-4 w-full">
                {connections.map(([from,to])=>( 
                <AirportPairCard
                imageSrc="https://via.placeholder.com/300"
                altText="Placeholder Image"
                text={`${from.name} to ${to.name}`}
                href={`homepage/${from.code}/${to.code}`}
                />
            ))}
            
            </div>
        </div>
    );
}
