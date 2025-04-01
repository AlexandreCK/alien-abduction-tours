function FeatureCard({ title, items }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-indigo-900 mb-4">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-indigo-600 mr-2 font-bold">
                            ✓
                        </span>
                        <span className="text-gray-800">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FeatureCard;
