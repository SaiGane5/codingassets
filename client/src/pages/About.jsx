const About = () => {
  return (
    <div className="p-5 bg-[#121212]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-[#FFD700] font-bold text-3xl p-10">
            About Us
          </h1>
          <div>
            <p className="text-white p-5">
              CodingAssets is a platform to improve your coding skills and build your assets in software industry
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="https://images.ctfassets.net/kftzwdyauwt9/32cmTSUIF5POX5FMuoHJwO/be8b42b8016957ca28e07274f05f1d3d/stangel-2022-0527.webp?w=3840&q=90&fm=webp" className="m-5 rounded-3xl w-3/4 "/>
          
        </div>
        <div className="bg-[#1d1b1b] rounded-3xl m-5 w-3/4 flex flex-row justify-evenly">
          <div className="flex flex-col justify-center m-10 w-full">
            <h2 className="text-[#FFD700] text-3xl font-bold">
                Our Goal
            </h2>
            <p className="text-white">
              Improve skills of each struggling student
            </p>
          </div>
          <div className="flex justify-end">
            <img src="https://images.ctfassets.net/kftzwdyauwt9/32cmTSUIF5POX5FMuoHJwO/be8b42b8016957ca28e07274f05f1d3d/stangel-2022-0527.webp?w=3840&q=90&fm=webp " className="rounded-r-3xl w-1/2"/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;