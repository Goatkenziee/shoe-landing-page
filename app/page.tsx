import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { FeaturedShoes } from '../components/FeaturedShoes';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <FeaturedShoes />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;