import React from 'react';

const BlogCards = ({ imageSrc, title, description, link }) => {
  return (
    <div className="flex bg-[#121212] rounded-3xl m-2.5">
      <div className="blog-image p-5">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-52 h-52 rounded-3xl object-cover"
        />
      </div>
      <div className="blog-content flex flex-col justify-between p-2.5 w-fit">
        <h2 className="text-[#FFD700] text-xl font-bold mb-2 p-5">{title}</h2>
        <p className="text-white p-5">{description}</p>
        <a 
          href={link} 
          className="text-[#D4AF37] p-5 hover:text-[#FFD700] no-underline"
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
      className="bg-[#1d1b1b] rounded-3xl m-12 p-2.5 flex flex-col"
    >
      <h2 className="text-3xl text-center py-5 text-[#D4AF37] font-bold">
        Latest Blogs
      </h2>
      <div className="flex flex-col items-left">
        {blogsData.map((blog, index) => (
          <BlogCards key={index} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;