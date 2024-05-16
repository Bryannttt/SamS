import Card from "../components/cards";

export default function LandingPage() {
    return (
        <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
            <h1 className="text-3xl font-bold mb-8">Welcome to My Next.js App</h1>
            <div className="flex flex-wrap justify-center gap-4 w-full">
                <Card
                    imageSrc="https://via.placeholder.com/300"
                    altText="Placeholder Image"
                    text="This is a description text below the image."
                />
                <Card
                    imageSrc="https://via.placeholder.com/300"
                    altText="Placeholder Image"
                    text="Here is another card with some different text."
                />
                <Card
                    imageSrc="https://via.placeholder.com/300"
                    altText="Placeholder Image"
                    text="Here is another card with some different text."
                />
            </div>
        </div>
    );
}
