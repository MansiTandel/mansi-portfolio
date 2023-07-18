import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-cyan-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10 text-justify">
          I am interested in full-stack development.
          I am  a highly motivated and skilled software engineer with a focus on 
          enhancing user experience and solving complex problems. With a Master's degree in
           Computer Science and Engineering and a strong educational background, 
           I am well-equipped to contribute to innovative solutions in a dynamic organization.

          
        </p>

        <br />

        <p className="text-xl text-justify">
        During my service as a Junior Project Manager and Web Developer at Glasier Inc., Ahmedabad, India, 
I have successfully led the Food Vault project, ensuring on-time delivery and meeting project goals.
 I have also made significant contributions to the development of the Pocket Filler website, enhancing its user-friendliness.
          
         
        </p>
      </div>
    </div>
  );
};

export default About;
