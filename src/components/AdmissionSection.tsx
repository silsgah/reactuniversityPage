import React from 'react';

const AdmissionSection = () => {
  return (
    <section id="admission" className="mb-12">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Admission</h2>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-gray-700 mb-4">
          Join our diverse and vibrant academic community. We offer a wide range of programs
          designed to challenge and inspire you to reach your full potential.
        </p>
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Application Deadlines</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Fall Semester: May 1st</li>
          <li>Spring Semester: November 1st</li>
          <li>Summer Session: March 1st</li>
        </ul>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default AdmissionSection;