import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Methodology from '../components/Methodology';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import LeadForm from '../components/LeadForm';
import { LogoCloud } from '../components/ui/logo-cloud';

const Home: React.FC = () => {
  const logos = [
    { src: "/logos/ambev.png", alt: "Ambev" },
    { src: "/logos/embraer.png", alt: "Embraer" },
    { src: "/logos/novo-nordisk.png", alt: "Novo Nordisk" },
    { src: "/logos/lilly.png", alt: "Lilly" },
    { src: "/logos/tupy.png", alt: "Tupy" },
    { src: "/logos/petrobras.png", alt: "Petrobras" },
  ];

  return (
    <div className="min-h-screen bg-navy-900 flex flex-col font-sans text-slate-200 selection:bg-brand-red selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LogoCloud logos={logos} />
        <Methodology />
        <Benefits />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;