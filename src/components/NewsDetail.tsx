import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from './Layout';

const news = [
  {
    id: 1,
    title: "New Research Grant Awarded",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: "Our university has been awarded a prestigious research grant to study climate change impacts. This grant will fund a five-year study on the effects of rising temperatures on local ecosystems. The research team, led by Dr. Jane Smith, will collaborate with international partners to develop innovative solutions for climate adaptation."
  },
  {
    id: 2,
    title: "Campus Sustainability Initiative Launched",
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: "A new initiative aims to make our campus carbon-neutral by 2030. The comprehensive plan includes installing solar panels on all campus buildings, implementing a campus-wide recycling program, and transitioning to an all-electric vehicle fleet. Students and faculty are encouraged to participate in various sustainability projects throughout the year."
  },
  {
    id: 3,
    title: "Alumni Spotlight: Tech Innovator",
    date: "2024-03-05",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: "Meet our alumnus who's revolutionizing the tech industry with AI innovations. John Doe, a graduate of our Computer Science program, has developed a groundbreaking AI algorithm that's being used in healthcare to predict early signs of diseases. His work has been featured in leading tech publications and has attracted significant investment from Silicon Valley."
  },
];

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const newsItem = news.find(item => item.id === parseInt(id || '0'));

  if (!newsItem) {
    return <Layout><div className="container mx-auto px-4 py-8">News item not found</div></Layout>;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to Home</Link>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={newsItem.image} alt={newsItem.title} className="w-full h-96 object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">{newsItem.title}</h1>
            <p className="text-gray-600 mb-4">{newsItem.date}</p>
            <div className="text-gray-700 space-y-4">
              {newsItem.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default NewsDetail;