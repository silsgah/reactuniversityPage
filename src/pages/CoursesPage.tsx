import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const courses = [
  {
    id: 1,
    name: "Computer Science",
    level: "Undergraduate",
    description: "Explore the foundations of computing and develop cutting-edge software skills.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    name: "Business Administration",
    level: "Undergraduate",
    description: "Learn to lead and manage in the dynamic world of modern business.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    name: "Data Science",
    level: "Graduate",
    description: "Master the art of extracting insights from complex data sets.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 4,
    name: "Environmental Studies",
    level: "Undergraduate",
    description: "Tackle global environmental challenges and develop sustainable solutions.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 5,
    name: "Artificial Intelligence",
    level: "Graduate",
    description: "Dive deep into machine learning, neural networks, and AI applications.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 6,
    name: "Psychology",
    level: "Undergraduate",
    description: "Understand the human mind and behavior through scientific study.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const CoursesPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{course.name}</h3>
                <p className="text-gray-600 mb-2">{course.level}</p>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <Link to={`/courses/${course.id}`} className="text-blue-600 hover:underline">Learn more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CoursesPage;