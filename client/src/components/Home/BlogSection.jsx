import React from 'react';

const BlogCards = ({ imageSrc, title, description, link }) => {
  return (
    <div className="flex flex-col md:flex-row bg-[#121212] rounded-3xl m-4 p-4">
      <div className="blog-image">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full md:w-52 h-52 rounded-3xl object-cover"
        />
      </div>
      <div className="blog-content flex flex-col justify-between p-4 md:w-3/4">
        <h2 className="text-[#FFD700] text-lg md:text-xl font-bold mb-2">{title}</h2>
        <p className="text-white text-sm md:text-base mb-4">{description}</p>
        <a 
          href={link} 
          className="text-[#D4AF37] text-sm md:text-base hover:text-[#FFD700] no-underline"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Read more...
        </a>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogsData = [
    {
      imageSrc: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Tech with saig",
      description: "Latest trends in modern technologies",
      link: "https://techwithsaig.super.site/"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800",
      title: "Ways of Intraday",
      description: "Techniques to survive in intraday",
      link: "https://tech-with-saig.notion.site/The-No-Nonsense-Guide-to-Intraday-Trading-140c5223a971803dbaf9fa4697eff31c"
    }
  ];

  return (
    <section 
      id="blog" 
      className="bg-[#1d1b1b] rounded-3xl m-4 md:m-12 p-4 flex flex-col"
    >
      <h2 className="text-2xl md:text-3xl text-center py-5 text-[#D4AF37] font-bold">
        Latest Blogs
      </h2>
      <div className="flex flex-col gap-6">
        {blogsData.map((blog, index) => (
          <BlogCards key={index} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
export { BlogCards };
