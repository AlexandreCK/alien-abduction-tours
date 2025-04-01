import DestinationCard from "./DestinationCard";

function DestinationsSection() {
    const destinations = [
        {
            title: "The Moon",
            description:
                "Experience Earth's closest neighbor with our weekend lunar getaways. Enjoy low-gravity activities and breathtaking Earth views.",
            image: "🌕",
        },
        {
            title: "Uranus",
            description:
                "Explore the ice giant's unique sideways rotation and stunning blue atmosphere on our exclusive guided tours.",
            image: "🪐",
        },
        {
            title: "Mars",
            description:
                "Visit the red planet's famous landmarks including Olympus Mons and Valles Marineris on our adventure expeditions.",
            image: "🔴",
        },
    ];

    return (
        <section id="destinations" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
                    Featured Destinations
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {destinations.map((destination, index) => (
                        <DestinationCard
                            key={index}
                            title={destination.title}
                            description={destination.description}
                            image={destination.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DestinationsSection;
