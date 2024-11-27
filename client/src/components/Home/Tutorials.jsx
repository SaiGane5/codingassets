import React from 'react';
import { ExternalLink } from 'lucide-react';

const TutorialCards = ({ imageSrc, heading, description, linkHref }) => {
  return (
    <div className="flex flex-col bg-[#121212] rounded-3xl w-fit m-2.5">
      <div className="card-image">
        <img 
          src={imageSrc} 
          alt={heading} 
          className="w-72 h-52 rounded-3xl m-5 object-cover"
        />
      </div>
      <div className="card-content flex flex-col justify-center p-2.5">
        <h2 className="text-[#FFD700] text-xl font-bold mb-0 pl-5 pt-3">{heading}</h2>
        <p className="text-white p-5">{description}</p>
        <div className="flex justify-end p-2.5">
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
      linkHref: "https://daily-dashboard-saig.netlify.app/"
    },
    {
      imageSrc: "https://i.pinimg.com/474x/e4/19/da/e419da4e7bc891cb82c4b8c1695286b7.jpg",
      heading: "DSA",
      description: "Pathway to DSA in C++",
      linkHref: "https://dsa.codingassets.in/"
    }
  ];

  return (
    <section 
      id="tutorials" 
      className="bg-[#1d1b1b] rounded-3xl m-12 p-2.5 flex flex-col"
    >
      <h2 className="text-3xl text-center py-5 text-[#D4AF37] font-bold">
        Our Tutorials
      </h2>
      <div className="flex flex-wrap justify-evenly">
        {tutorialsData.map((tool, index) => (
          <TutorialCards key={index} {...tool} />
        ))}
      </div>
    </section>
  );
};

export default TutorialSection;