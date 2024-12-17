import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import SNavbar from "./components/othernav";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <Footer />

      
    </div>
  );
}
