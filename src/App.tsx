import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BookingForm from "./components/BookingForm";
import AIStyleAdvisor from "./components/AIStyleAdvisor";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-dark selection:bg-gold selection:text-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AIStyleAdvisor />
        <BookingForm />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
