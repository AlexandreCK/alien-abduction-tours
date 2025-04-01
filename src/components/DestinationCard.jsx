function DestinationCard({ title, description, image }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-indigo-100 flex items-center justify-center">
                <span className="text-6xl">{image}</span>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-900 mb-2">
                    {title}
                </h3>
                <p className="text-gray-800">{description}</p>
                <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
                    Book Now
                </button>
            </div>
        </div>
    );
}

export default DestinationCard;
