import FeatureCard from "./FeatureCard";

function FeaturesSection() {
    const features = [
        {
            title: "User Registration & Authentication",
            items: [
                "Secure user account creation and management",
                "Profile storage with personal preferences",
                "Role-based access control",
            ],
        },
        {
            title: "Trip Catalog",
            items: [
                "Interactive display of available interplanetary tours",
                "Detailed trip information including destinations, duration, and experiences",
                "Filtering and search capabilities",
            ],
        },
        {
            title: "Budget Requests",
            items: [
                "Custom trip cost estimation",
                "Automated pricing based on distance, duration, and requirements",
                "Instant quote generation",
            ],
        },
    ];

    return (
        <section id="features" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
                    Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            items={feature.items}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;
