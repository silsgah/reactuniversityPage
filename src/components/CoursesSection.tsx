import React from 'react';

const CoursesSection = () => {
  const courses = [
    { id: 1, name: "Computer Science", level: "Undergraduate" },
    { id: 2, name: "Business Administration", level: "Undergraduate" },
    { id: 3, name: "Data Science", level: "Graduate" },
    { id: 4, name: "Environmental Studies", level: "Undergraduate" },
    { id: 5, name: "Artificial Intelligence", level: "Graduate" },
    { id: 6, name: "Psychology", level: "Undergraduate" },
  ];

  return (
    <section id="courses" className="mb-12">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Featured Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{course.name}</h3>
            <p className="text-gray-600">{course.level}</p>
            <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">Learn more</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;