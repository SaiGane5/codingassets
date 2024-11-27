import React from 'react';
import { ExternalLink } from 'lucide-react';

const ToolCards = ({ imageSrc, heading, description, linkHref }) => {
  return (
    <div className="flex flex-row-reverse bg-[#121212] rounded-3xl w-fit m-2.5">
      <div className="card-image">
        <img 
          src={imageSrc} 
          alt={heading} 
          className="w-52 h-72 rounded-l-none rounded-3xl object-cover"
        />
      </div>
      <div className="card-content flex flex-col justify-center p-2.5 w-64">
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

const ToolSection = () => {
  const toolsData = [
    {
      imageSrc: "https://media.istockphoto.com/id/1331816543/photo/red-tomato-shaped-kitchen-timer-with-cooking-in-the-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=XQfqd2QqupPrpGpf8lgH3eLoYXJiMCtdDUYdFttPd10=",
      heading: "Pomo App",
      description: "Focus mode assistant",
      linkHref: "https://pomoapp4iitm.netlify.app/"
    },
    {
      imageSrc: "https://media.istockphoto.com/id/1477858506/photo/news-online-in-phone-reading-newspaper-from-website-digital-publication-and-magazine-mockup.webp?a=1&b=1&s=612x612&w=0&k=20&c=rR5OzvohjHUCHubVUOiKcu6wLWT325HrOajBmByLojE=",
      heading: "Daily Dash",
      description: "Enhance your lifestyle",
      linkHref: "https://daily-dashboard-saig.netlify.app/"
    },
    {
      imageSrc: "https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D",
      heading: "To Do",
      description: "Long-term goals assistant",
      linkHref: "https://iitm-schedule.glitch.me/todos"
    }
  ];

  return (
    <section 
      id="tools" 
      className="bg-[#1d1b1b] rounded-3xl m-12 p-2.5 flex flex-col"
    >
      <h2 className="text-3xl text-center py-5 text-[#D4AF37] font-bold">
        Our Tools
      </h2>
      <div className="flex flex-wrap justify-evenly">
        {toolsData.map((tool, index) => (
          <ToolCards key={index} {...tool} />
        ))}
      </div>
    </section>
  );
};

export default ToolSection;