import Footer from "../components/Home/Footer"
import {BlogCards} from "../components/Home/BlogSection"
const Blogs = () => {
  const blogsData = [
    {
      imageSrc: "https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800",
      title: "Ways of Intraday",
      description: "Techniques to survive in intraday",
      link: "blog/Intraday_Trading.html"
    }
  ];
  return (
    <div className="bg-[#121212] h-full">
      <div className="flex justify-center p-5">
        <h1 className="text-[#FFD700] text-3xl font-bold">Blog Articles</h1>
      </div>
      <div className="flex justify-center p-5">
        <i className="fa fa-search text-black bg-[#FFD700] p-2 rounded-md m-2"></i><input placeholder="Search....." className="rounded-md m-2 p-1 w-1/4 bg-[#1d1b1b] text-white border-2 border-amber-300"/>
      </div>

      <section 
      id="blog" 
      className="bg-[#1d1b1b] rounded-3xl m-12 p-2.5 flex flex-col"
    >
      <div className="flex flex-col items-left scroll-my-0">
        {blogsData.map((blog, index) => (
          <BlogCards key={index} {...blog} />
        ))}
        </div>
        
      </section>
      <div className="flex justify-center">
        <button className="bg-[#FFD700] rounded-md mb-5 p-2 pl-2 pr-2">Load more.....</button>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;