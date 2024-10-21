import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const news = [
  {
    id: 1,
    title: "New Research Grant Awarded",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    excerpt: "Our university has been awarded a prestigious research grant to study climate change impacts."
  },
  {
    id: 2,
    title: "Campus Sustainability Initiative Launched",
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    excerpt: "A new initiative aims to make our campus carbon-neutral by 2030."
  },
  {
    id: 3,
    title: "Alumni Spotlight: Tech Innovator",
    date: "2024-03-05",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    excerpt: "Meet our alumnus who's revolutionizing the tech industry with AI innovations."
  },
  {
    id: 4,
    title: "New Sports Complex Opening",
    date: "2024-02-28",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    excerpt: "Our state-of-the-art sports complex will be opening next month, featuring Olympic-sized swimming pools and modern training facilities."
  },
  {
    id: 5,
    title: "International Exchange Program Expands",
    date: "2024-02-20",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    excerpt: "We're excited to announce new partnerships with universities in Asia and Europe, expanding our international exchange program."
  }
];

const NewsPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">University News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.date}</p>
                <p className="text-gray-700 mb-4">{item.excerpt}</p>
                <Link to={`/news/${item.id}`} className="text-blue-600 hover:underline">Read more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;