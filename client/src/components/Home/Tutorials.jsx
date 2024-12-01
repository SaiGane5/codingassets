import React from 'react';
import { ExternalLink } from 'lucide-react';

const TutorialCards = ({ imageSrc, heading, description, linkHref }) => {
  return (
    <div className="flex flex-col bg-[#121212] rounded-3xl w-full md:w-80 m-2.5">
      <div className="card-image">
        <img 
          src={imageSrc} 
          alt={heading} 
          className="w-full h-52 rounded-t-3xl object-cover"
        />
      </div>
      <div className="card-content flex flex-col justify-center p-4">
        <h2 className="text-[#FFD700] text-lg md:text-xl font-bold mb-2">{heading}</h2>
        <p className="text-white text-sm md:text-base mb-4">{description}</p>
        <div className="flex justify-end">
          <a 
            href={linkHref} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-[#D4AF37]"
          >
            <ExternalLink size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

const TutorialSection = () => {
  const tutorialsData = [
    {
      imageSrc: "https://plus.unsplash.com/premium_photo-1683121718643-fb18d2668d53?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFpfGVufDB8fDB8fHww",
      heading: "AI",
      description: "AI Pathway",
      linkHref: "https://pomoapp4iitm.netlify.app/"
    },
    {
      imageSrc: "https://plus.unsplash.com/premium_photo-1690303193653-0418179e5512?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2fGVufDB8fDB8fHww",
      heading: "Web Development",
      description: "Learn MERN",
      linkHref: "/courses/FullStackDev/Full Stack Development.html"
    },
    {
      imageSrc: "https://i.pinimg.com/474x/e4/19/da/e419da4e7bc891cb82c4b8c1695286b7.jpg",
      heading: "DSA",
      description: "Pathway to DSA in C++",
      linkHref: "/courses/DSA_Rev/DSA_Rev.html"
    }
  ];

  return (
    <section 
      id="tutorials" 
      className="bg-[#1d1b1b] rounded-3xl m-4 md:m-12 p-4 flex flex-col"
    >
      <h2 className="text-2xl md:text-3xl text-center py-5 text-[#D4AF37] font-bold">
        Our Tutorials
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {tutorialsData.map((tool, index) => (
          <TutorialCards key={index} {...tool} />
        ))}
      </div>
    </section>
  );
};

export default TutorialSection;
