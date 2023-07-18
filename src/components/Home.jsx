import React from "react";
import HeroImage from "../assets/heroImage.JPG";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-fit w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 sm:flex-row">
        <div className="flex flex-col justify-center h-full">
        
  
        <h1 className="flex text-4xl sm:text-4xl font-semibold text-white ">
  Hello, 👋🏻 
 
</h1>
<h2 className="flex text-4xl sm:text-4xl font-semibold text-white text-center">I am Mansi.</h2> 
                 {/* <h2 className="text-4xl sm:text-4xl font-semibold text-white ">Hi
          <span className="animate-wavinghand">👋🏻</span> 
          ,I am Mansi.</h2>*/}
          <h3 className="text-3xl sm:text-5xl font-bold text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-justify ">
            I'm a software Developer 
            </span>
          </h3>
          <p className="text-white py-4 max-w-md text-justify">
           I am a recent graduate with a Master's degree in computer science and engineering.💻
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
