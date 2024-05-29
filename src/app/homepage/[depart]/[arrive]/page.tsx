import { prisma } from "@/lib/prisma";

    type PageProps={
    params:{
        depart: string;
        arrive: string;
    };
}
export default async function Page(props: PageProps){
    const departCode = props.params.depart.toUpperCase();
    const arriveCode = props.params.arrive.toUpperCase();

    const flights = await prisma.flight.findMany({
        where: {
            OR:[
                {departAirport: {code: departCode},
            arriveAirport: {code: arriveCode}
        },
            
      
        
       
                {departAirport: {code: arriveCode},
                arriveAirport: {code: departCode}
                }
        
                ]
                }});

                return (
                <table>
                    <thead>
                        <tr>
                            <th>Flight #</th>
                            <th>Seats</th>
                            <th>Departure</th>
                            <th>Arrival</th>
                            <th>Manifest</th>
                        </tr>
                    </thead>
                    <tbody>
                    {flights.map(flight => 
                        <tr key={flight.id}>
                        <td>{flight.flightnumnber}</td>
                        <td>TO DO: add seats</td>
                        <td>{flight.departTime.toISOString()}</td>
                        <td>{flight.arriveTime.toISOString()}</td>
                        <td>TODO: add manifest</td>
                    </tr>)}
                        
                    </tbody>
                </table>
)}