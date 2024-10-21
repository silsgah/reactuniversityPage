import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Newspaper, UserCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt="University Logo" className="w-12 h-12 mr-3 rounded-full" />
            <h1 className="text-3xl font-bold">University Name</h1>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/news" className="flex items-center hover:text-blue-200"><Newspaper className="mr-1" size={18} /> News</Link></li>
              <li><Link to="/courses" className="flex items-center hover:text-blue-200"><BookOpen className="mr-1" size={18} /> Courses</Link></li>
              <li><Link to="/admission" className="flex items-center hover:text-blue-200"><GraduationCap className="mr-1" size={18} /> Admission</Link></li>
              <li><Link to="/login" className="flex items-center hover:text-blue-200"><UserCircle className="mr-1" size={18} /> Login</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;