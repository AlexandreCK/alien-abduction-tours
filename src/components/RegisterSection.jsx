import { useState } from "react";

function RegisterSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Data submission is temporarily disabled. Database is under construction.");
        alert("Registration is temporarily unavailable.");
    };

    return (
        <section className="bg-gradient-to-b from-purple-900 to-indigo-800 py-20 w-full text-white">
            <div className="container mx-auto px-4 max-w-lg">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Join the Space Explorers
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl shadow-lg p-8 space-y-6 text-gray-800"
                >
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                    >
                        Register
                    </button>
                </form>
            </div>
        </section>
    );
}

export default RegisterSection;
