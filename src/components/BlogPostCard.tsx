import React from 'react';

interface BlogPostCardProps {
  title: string;
  description: string;
  date: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  description,
  date,
}) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
      <p className="text-gray-500 text-sm">{date}</p>
    </div>
  );
};

export default BlogPostCard;
