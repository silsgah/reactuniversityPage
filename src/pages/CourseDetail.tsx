import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const courses = [
  {
    id: 1,
    name: "Computer Science",
    level: "Undergraduate",
    description: "Explore the foundations of computing and develop cutting-edge software skills.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    lecturers: [
      {
        name: "Dr. Jane Smith",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        specialization: "Artificial Intelligence"
      },
      {
        name: "Prof. John Doe",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        specialization: "Software Engineering"
      }
    ],
    modules: [
      "Introduction to Programming",
      "Data Structures and Algorithms",
      "Database Systems",
      "Web Development",
      "Artificial Intelligence"
    ]
  },
  // Add more course details here...
];

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === parseInt(id || '0'));

  if (!course) {
    return <Layout><div className="container mx-auto px-4 py-8">Course not found</div></Layout>;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">{course.name}</h1>
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <img src={course.image} alt={course.name} className="w-full h-64 object-cover" />
          <div className="p-6">
            <p className="text-gray-600 mb-2">{course.level}</p>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Course Modules</h2>
            <ul className="list-disc list-inside mb-6">
              {course.modules.map((module, index) => (
                <li key={index} className="text-gray-700">{module}</li>
              ))}
            </ul>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Lecturers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {course.lecturers.map((lecturer, index) => (
                <div key={index} className="flex items-center">
                  <img src={lecturer.image} alt={lecturer.name} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800">{lecturer.name}</h3>
                    <p className="text-gray-600">{lecturer.specialization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetail;