import React from 'react';
import BlogList from './components/BlogList';

const App: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold mb-4">My Blog</h1>
      <BlogList />
    </div>
  );
};

export default App;
