import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import DestinationsSection from "./components/DestinationsSection";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen w-full flex flex-col overflow-hidden">
            <Header />
            <main className="flex-grow">
                <HeroSection />
                <FeaturesSection />
                <DestinationsSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;
