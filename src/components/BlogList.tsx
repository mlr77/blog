import React from 'react';
import BlogPostCard from './BlogPostCard.tsx';

const posts = [
  {
    title: 'First Post',
    description: 'This is the first post.',
    date: '2025-01-01',
  },
  {
    title: 'Second Post',
    description: 'Another blog post.',
    date: '2025-01-02',
  },
];

const BlogList: React.FC = () => {
  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <BlogPostCard
          key={index}
          title={post.title}
          description={post.description}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default BlogList;
