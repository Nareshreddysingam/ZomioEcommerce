import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

interface BannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  isLarge?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  isLarge = false
}) => {
  return (
    <div 
      className={`relative overflow-hidden rounded-lg ${isLarge ? 'h-[60vh] md:h-[70vh]' : 'h-64 md:h-80'}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex flex-col justify-center px-6 md:px-12">
        <div className="max-w-xl">
          <h1 className={`text-white font-bold ${isLarge ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'} mb-3`}>
            {title}
          </h1>
          <p className="text-gray-200 text-sm md:text-base mb-6">
            {subtitle}
          </p>
          <div className="flex items-center space-x-4">
            <Link
              to={ctaLink}
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
            >
              {ctaText}
            </Link>
            <span className="flex items-center text-white text-sm">
              <Clock className="w-4 h-4 mr-1" />
              5-10 min delivery
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;