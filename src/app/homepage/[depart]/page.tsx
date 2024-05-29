import { PrismaClient } from "@prisma/client";
import Link from "next/link";

type PageProps ={
    params: {
        depart: string
    };
};
const prisma = new PrismaClient();

export default async function Page(props: PageProps){
    const code = props.params.depart.toUpperCase()
    const thisAirport = await prisma.airport.findUnique({
        where:{
          
                    code,
            },

        },
    );
    if (thisAirport == null){
        return <p>Error: airport with {code} not found</p>
    }
    const otherAirports = await prisma.airport.findMany({
        where:{
            NOT: {
                    code,
            },

        },
        include:{
            arrivingFlights: true
        }
    });
    return <div>
        <h1> Where would you like to travel</h1>
        {otherAirports.map(airport => <Link href={`homepage/${code}/${airport.code}`}><button>
            <p>Name:{airport.name}</p>
            
            </button></Link>)}
    </div>

}