import Footer from "../components/Home/Footer";

const About = () => {
  return (
    <div className="p-5 bg-[#121212]">
      <div className="flex flex-col items-center justify-center">
        {/* About Us Heading Section */}
        <div className="flex flex-col items-center">
          <h1 className="text-[#FFD700] font-bold text-2xl md:text-3xl p-10 text-center">
            About Us
          </h1>
          <div>
            <p className="text-white p-5 text-sm md:text-base text-center">
              CodingAssets is a platform to improve your coding skills and build your assets in the software industry.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col justify-center items-center w-full">
          <img 
            src="https://images.ctfassets.net/kftzwdyauwt9/32cmTSUIF5POX5FMuoHJwO/be8b42b8016957ca28e07274f05f1d3d/stangel-2022-0527.webp?w=3840&q=90&fm=webp" 
            className="m-5 rounded-3xl w-full md:w-3/4 object-cover"
            alt="About Us"
          />
        </div>

        {/* Our Goal Section */}
        <div className="bg-[#1d1b1b] rounded-3xl m-5 w-full md:w-3/4 flex flex-col md:flex-row justify-between items-center p-5">
          <div className="flex flex-col justify-center md:items-start items-center md:text-left text-center m-5 w-full md:w-1/2">
            <h2 className="text-[#FFD700] text-2xl md:text-3xl font-bold mb-4">
              Our Goal
            </h2>
            <p className="text-white text-sm md:text-base">
              To improve the skills of each struggling student.
            </p>
          </div>
          <div className="flex justify-end w-full md:w-1/2">
            <img 
              src="https://i.pinimg.com/474x/12/0d/47/120d47c11a1d256a0ec99665525f6576.jpg" 
              className="rounded-b-3xl md:rounded-r-3xl w-full md:w-auto object-cover" 
              alt="Our Goal"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
