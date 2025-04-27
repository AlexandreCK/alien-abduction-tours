import { useState } from "react";

function AuthSection() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [isLogin, setIsLogin] = useState(false); // status switch login registration
    const [isAuthenticated, setIsAuthenticated] = useState(false); // track if the user is authenticated

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isLogin) {
            try {
                const response = await fetch('http://localhost:5000/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: formData.username,
                        password: formData.password,
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    alert('Login successful!');
                    console.log('Login successful:', data);
                    setIsAuthenticated(true);
                    window.location.hash = 'destinations'; // redirect
                } else {
                    alert('Incorrect username or password. Please try again.');
                }
            } catch (error) {
                alert('An error occurred during login.');
                console.error('Error during login:', error);
            }
        } else {
            try {
                const response = await fetch('http://localhost:5000/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: formData.username,
                        password: formData.password,
                    }),
                });

                if (response.ok) {
                    alert('User successfully registered!');
                    console.log('User registered:', formData);
                } else {
                    alert('Registration failed. Please try again.');
                }
            } catch (error) {
                console.error('Error during registration:', error);
                alert('An error occurred during registration.');
            }
        }
    };

    const toggleForm = () => {
        setIsLogin(!isLogin); //switch login registration
    };

    if (isAuthenticated) {
        return null;
    }

    return (
        <section className="bg-gradient-to-b from-purple-900 to-indigo-800 py-20 w-full text-white">
            <div className="container mx-auto px-4 max-w-lg">
                <h2 className="text-3xl font-bold text-center mb-8">
                    {isLogin ? "Login to your Account" : "Join the Space Explorers"}
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl shadow-lg p-8 space-y-6 text-gray-800"
                >
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="Your username"
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
                        {isLogin ? "Login" : "Register"}
                    </button>
                </form>
                <p className="text-center text-gray-200 mt-4">
                    {isLogin ? (
                        <>
                            Don't have an account?{" "}
                            <span
                                onClick={toggleForm}
                                className="cursor-pointer text-indigo-400 hover:text-indigo-500"
                            >
                                Sign up
                            </span>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <span
                                onClick={toggleForm}
                                className="cursor-pointer text-indigo-400 hover:text-indigo-500"
                            >
                                Login
                            </span>
                        </>
                    )}
                </p>
            </div>
        </section>
    );
}

export default AuthSection;
