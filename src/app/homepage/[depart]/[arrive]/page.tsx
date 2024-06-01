import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Calendar from "@/app/components/calendar";

// Define the interface for a flight object
interface FlightObject {
  id: number;
  flightnumber: string;
  departTime: Date;
  arriveTime: Date;
  status: string;
  departAirportId: string;
  arriveAirportId: string;
}

// Define the type for page props
type PageProps = {
  params: {
    depart: string;
    arrive: string;
  };
};

export default async function Page(props: PageProps) {
  const departCode = props.params.depart.toUpperCase();
  const arriveCode = props.params.arrive.toUpperCase();

  // Fetch flights from the database
  const flights = await prisma.flight.findMany({
    where: {
      OR: [
        { departAirport: { code: departCode }, arriveAirport: { code: arriveCode } },
        { departAirport: { code: arriveCode }, arriveAirport: { code: departCode } }
      ]
    }
  });

  // Map fetched data to the FlightObject type
  const flightData: FlightObject[] = flights.map(flight => ({
    id: parseInt(flight.id, 10),  // Converting string to number
    flightnumber: flight.flightnumnber,  // Correcting the typo here
    departTime: flight.departTime,
    arriveTime: flight.arriveTime,
    status: flight.status,
    departAirportId: flight.departAirportId,
    arriveAirportId: flight.arriveAirportId
  }));

  // Log flight data to the console
  console.log(flightData);

  // Generate the flight snippets
  const flightSnippet = flightData.map((flight) => (
    <div key={flight.id} className="flex justify-between items-center p-2 border rounded">
      <div className="flex items-center">
        {/* <div className="bg-gray-200 p-2 rounded-full">{flight.flightnumber[0]}</div> */}
        <span className="ml-2">{flight.flightnumber}</span>
      </div>
      <div>{new Date(flight.departTime).toLocaleString()}</div>
      <div>{new Date(flight.arriveTime).toLocaleString()}</div>
      <div>{flight.status}</div>
      <div>TODO: add seats</div>
      <div>TODO: add manifest</div>
    </div>
  ));

  // Render the component
  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <div className="w-1/3 p-2">
          <Calendar />
        </div>
        <div className="w-1/3 p-2">
          <div className="bg-gray-200 h-32 flex items-center justify-center rounded">
            <p>Image-1:Departure Airport</p>
          </div>
        </div>
        <div className="w-1/3 p-2">
          <div className="bg-gray-200 h-32 flex items-center justify-center rounded">
            <p>Image-2: Arriving Airport</p>
          </div>
        </div>
      </div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="font bold">Flights ({flightData.length})</h1>
      </div>
      <div className="flex flex-col gap-2 mt-24 ml-20 mr-20">
        <div className="flex justify-between items-center p-2 border rounded bg-gray-100">
          <div>Flight #</div>
          <div>Departure</div>
          <div>Arrival</div>
          <div>Status</div>
          <div>Seats</div>
          <div>Manifest</div>
        </div>
        {flightSnippet}
      </div>
    </div>
  );
}
