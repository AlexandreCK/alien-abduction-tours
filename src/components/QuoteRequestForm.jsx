import { useState } from "react";

function QuoteRequestForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        destination: "",
        travelers: 1,
        departureDate: "",
        message: ""
    });

    const destinations = [
        "The Moon",
        "Uranus",
        "Mars"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Pressupost sol·licitat! Ens posarem en contacte aviat.");
        setFormData({
            name: "",
            email: "",
            destination: "",
            travelers: 1,
            departureDate: "",
            message: ""
        });
    };

    return (
        <section id="quote-request" className="py-16 bg-indigo-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-indigo-900 mb-8">
                    Sol·licitud de Pressupost
                </h2>
                <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
                    Omple el formulari a continuació per sol·licitar un pressupost personalitzat per al teu proper viatge intergalàctic.
                </p>

                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom Complet</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correu Electrònic</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="destination" className="block text-gray-700 font-medium mb-2">Destinació</label>
                                <select
                                    id="destination"
                                    name="destination"
                                    value={formData.destination}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="">Selecciona una destinació</option>
                                    {destinations.map((destination, index) => (
                                        <option key={index} value={destination}>{destination}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="travelers" className="block text-gray-700 font-medium mb-2">Nombre de Viatgers</label>
                                <input
                                    type="number"
                                    id="travelers"
                                    name="travelers"
                                    min="1"
                                    value={formData.travelers}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="departureDate" className="block text-gray-700 font-medium mb-2">Data de Sortida</label>
                                <input
                                    type="date"
                                    id="departureDate"
                                    name="departureDate"
                                    value={formData.departureDate}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Missatge Addicional</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                ></textarea>
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <button
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
                            >
                                Sol·licitar Pressupost
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default QuoteRequestForm;
