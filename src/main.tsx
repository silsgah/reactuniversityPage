import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import NewsPage from './pages/NewsPage.tsx';
import NewsDetail from './components/NewsDetail.tsx';
import CoursesPage from './pages/CoursesPage.tsx';
import CourseDetail from './pages/CourseDetail.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);