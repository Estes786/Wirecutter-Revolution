import React from 'react';
import { Smartphone, Headphones, Laptop, Camera, Watch, Home } from 'lucide-react';

const Categories = () => {
  const categories = [
    { name: 'Smartphones', icon: Smartphone, count: '120+ Reviews' },
    { name: 'Audio', icon: Headphones, count: '85+ Reviews' },
    { name: 'Laptops', icon: Laptop, count: '95+ Reviews' },
    { name: 'Cameras', icon: Camera, count: '60+ Reviews' },
    { name: 'Wearables', icon: Watch, count: '45+ Reviews' },
    { name: 'Smart Home', icon: Home, count: '75+ Reviews' },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Browse Categories
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Discover expertly reviewed products across all major categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="ultra-premium-card p-6 text-center cursor-pointer group"
              >
                <div className="mb-4 flex justify-center">
                  <IconComponent className="w-12 h-12 text-blue-300 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-blue-200">{category.count}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;