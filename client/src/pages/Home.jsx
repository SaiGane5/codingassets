import React from 'react';
import Navbar from '../components/Home/Navbar';
import Hero from '../components/Home/Hero';
import ToolSection from '../components/Home/ToolSection';
import BlogSection from '../components/Home/BlogSection';
import ContactForm from '../components/Home/ContactForm';
import Footer from '../components/Home/Footer';
import '../App.css';
import TutorialSection from "../components/Home/Tutorials"
const Home = () => {
  return (
    <div className="bg-[#121212]">
      <Navbar />
      <Hero />
      <TutorialSection />
      <ToolSection />
      <BlogSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;