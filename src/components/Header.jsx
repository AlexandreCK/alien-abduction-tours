function Header() {
    return (
        <header className="bg-indigo-900 text-white p-4 w-full">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex items-center">
                    <span className="text-2xl font-bold">
                        Alien Abduction Tours
                    </span>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a
                                href="#features"
                                className="hover:text-indigo-300 font-medium"
                            >
                                Features
                            </a>
                        </li>
                        <li>
                            <a
                                href="#destinations"
                                className="hover:text-indigo-300 font-medium"
                            >
                                Destinations
                            </a>
                        </li>
                        <li>
                            <a
                                href="#budget"
                                className="hover:text-indigo-300 font-medium"
                            >
                                Budget
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
