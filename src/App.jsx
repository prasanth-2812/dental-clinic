import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import DoctorProfile from './components/DoctorProfile';
import SmileGallery from './components/SmileGallery';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';

function App() {
  return (
    <div className="bg-cream min-h-screen font-body text-navy overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <WhyUs />
        <DoctorProfile />
        <SmileGallery />
        <Testimonials />
        <Appointment />
      </main>
      <Footer />
      <FloatingElements />
    </div>
  );
}

export default App;
