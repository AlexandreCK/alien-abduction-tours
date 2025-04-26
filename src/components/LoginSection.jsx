import { useState } from "react";

function LoginSection() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("User login attempted with:", formData);
        alert("Login functionality is temporarily simulated.");
    };

    return (
        <section className="bg-gradient-to-b from-indigo-800 to-purple-900 text-white py-20 w-full">
            <div className="container mx-auto text-center px-4 max-w-lg">
                <h2 className="text-3xl font-bold mb-8">Welcome Back, Explorer!</h2>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl shadow-lg p-8 space-y-6 text-gray-800"
                >
                    <div>
                        <label className="block text-sm font-semibold mb-2">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="Your Username"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-2">Password</label>
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
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
}

export default LoginSection;
