import React from 'react';
import Layout from './components/Layout';
import ImageSlider from './components/ImageSlider';
import NewsSection from './components/NewsSection';
import CoursesSection from './components/CoursesSection';
import AdmissionSection from './components/AdmissionSection';

function App() {
  return (
    <Layout>
      <ImageSlider />
      <main className="container mx-auto px-4 py-8">
        <NewsSection />
        <CoursesSection />
        <AdmissionSection />
      </main>
    </Layout>
  );
}

export default App;