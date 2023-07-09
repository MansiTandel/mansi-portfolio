import React from "react";
import calibus from "../assets/portfolio/calibus.png";
import ideavault from "../assets/portfolio/ideavault.png";
import wikisearchapp from "../assets/portfolio/wikisearchapp.png";
import pagerank4 from "../assets/portfolio/pagerank4.png";
import mytodolistapp from "../assets/portfolio/mytodolistapp.png";
import reactmealsapp from "../assets/portfolio/reactmealsapp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "CaliBus",
      src: calibus,
      href: "https://github.com/MansiTandel/CaliBus",
    },
    {
      id: 2,
      title: "IdeaVault",
      src: ideavault,
      href: "https://github.com/MansiTandel/ideavault",
    },
    {
      id: 3,
      title: "Pagerank Algorithm",
      src: pagerank4,
      href: "https://github.com/MansiTandel/Page-Rank-Algorithm",
      
    },
    {
      id: 4,
      title: "React-meals-app",
      src: reactmealsapp,
      href: "https://github.com/MansiTandel/meals-app-react",
    },
    {
      
      id: 5,
      title: "My to-do list App",
      src: mytodolistapp,
      href: "https://github.com/MansiTandel/My-Todo-List-App",
    },
    {
      id: 6,
      title: "Wiki-search App",
      src: wikisearchapp,
      href: "https://github.com/MansiTandel/Wiki-Search-App",
    },
  ];

  return (
    <div name="projects" className="bg-gradient-to-b from-gray-800 to-black w-full text-white">
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500  text-cyan-500">
            Projects
          </p>
          <p className="py-6">Here are some of my projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 object-contain h-48 w-96"
              />
              <p className="text-center text-2xl text-teal-400 ">{title}</p>
              <div className="flex items-center justify-center ">
                <button className="px-6 py-3 m-4 duration-200 hover:scale-105 text-center">
                  <a
                    href={href}
                    className="flex justify-between items-center w-ful text-center text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
