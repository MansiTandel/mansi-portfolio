import React from 'react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Master's of Science",
      field: 'Computer Science and Engineering',
      university: 'Santa Clara University',
      location: 'Santa Clara, California, USA',
      startDate: '2021',
      endDate: '2023',
    },
    {
      id: 2,
      degree: "Bachelor's of Engineering",
      field: 'Computer Engineering',
      university: 'G. H. Patel College of Engineering and Technology',
      location: 'Anand, Gujarat, India',
      startDate: '2015',
      endDate: '2019',
    },
  ];

  return (
    <div name="education"className="w-full h-screen bg-gradient-to-b from-black to-gray-800  text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500  text-cyan-500">
            Education
          </p>
        </div>

        <div className="flex">
          <div className="w-1/2 pr-4">
            <h2 className="text-2xl font-semibold mb-4">Bachelor's of Engineering</h2>
            {educationData
              .filter((education) => education.degree === "Bachelor's of Engineering")
              .map((education) => (
                <div key={education.id} className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">{education.university}</h3>
                  <p className="text-gray-400">
                    {education.field} - {education.location}
                  </p>
                  <p className="text-gray-400">
                    {education.startDate} - {education.endDate}
                  </p>
                </div>
              ))}
          </div>

          <div className="w-1 border-l-2 border-gray-500"></div>

          <div className="w-1/2 pl-4">
            <h2 className="text-2xl font-semibold mb-4">Master's of Science</h2>
            {educationData
              .filter((education) => education.degree === "Master's of Science")
              .map((education) => (
                <div key={education.id} className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">{education.university}</h3>
                  <p className="text-gray-400">
                    {education.field} - {education.location}
                  </p>
                  <p className="text-gray-400">
                    {education.startDate} - {education.endDate}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
