import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { categories } from '../../data/mockProducts';

const CategoryTabs: React.FC = () => {
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';

  return (
    <div className="border-b border-gray-200 overflow-x-auto hide-scrollbar">
      <div className="py-4 px-4 flex space-x-8 min-w-max">
        <Link
          to="/"
          className={`whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-sm ${
            currentCategory === 'all'
              ? 'border-primary-600 text-primary-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          All Products
        </Link>
        
        {categories.map((category) => (
          <Link
            key={category}
            to={`/?category=${category}`}
            className={`whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-sm ${
              currentCategory === category
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;