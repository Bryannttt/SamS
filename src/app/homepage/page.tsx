import {AirportPairCard} from "../components/cards";

export default function LandingPage() {
    return (
        <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
            <h1 className="text-3xl font-bold mb-8">Welcome to My Next.js App</h1>
            <div className="flex flex-wrap justify-center gap-4 w-full">
                <AirportPairCard
                    imageSrc="https://via.placeholder.com/300"
                    altText="Placeholder Image"
                    text="This is a description text below the image."
                    href="/homepage/pointmugu-san-nicolas"
                />
                <AirportPairCard
                    imageSrc="https://via.placeholder.com/300"
                    altText="Placeholder Image"
                    text="Here is another card with some different text."
                    href="/homepage/chinalake-pointmugu"
                />
                <AirportPairCard
                    imageSrc="https://via.placeholder.com/300"
                    altText="Placeholder Image"
                    text="Here is another card with some different text."
                    href="/homepage/northisland-sanclemente"
                />
            </div>
        </div>
    );
}
