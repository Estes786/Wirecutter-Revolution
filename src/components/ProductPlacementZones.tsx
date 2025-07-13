import React from 'react';
import { TrendingUp, Star, Clock } from 'lucide-react';

const ProductPlacementZones = () => {
  const trendingProducts = [
    {
      name: 'iPad Pro M2',
      category: 'Tablets',
      rating: 4.7,
      trend: '+15%',
      image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Samsung Galaxy S24',
      category: 'Smartphones',
      rating: 4.6,
      trend: '+23%',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'AirPods Pro 2',
      category: 'Audio',
      rating: 4.8,
      trend: '+8%',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const quickPicks = [
    'Best Budget Smartphone',
    'Premium Headphones Under $200',
    'Top Gaming Laptop 2024',
    'Best Smart Watch for Fitness'
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Product Intelligence Center
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            AI-powered trending products, curated picks, and real-time updates
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Trending Products */}
          <div className="ultra-premium-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-bold text-white">Trending Now</h3>
            </div>
            
            <div className="space-y-4">
              {trendingProducts.map((product, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="text-white font-medium text-sm">{product.name}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-blue-300">{product.category}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-300">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-green-400 text-sm font-semibold">
                    {product.trend}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Picks */}
          <div className="ultra-premium-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">Editor's Picks</h3>
            </div>
            
            <div className="space-y-3">
              {quickPicks.map((pick, index) => (
                <div key={index} className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h4 className="text-white font-medium">{pick}</h4>
                  <p className="text-sm text-blue-300 mt-1">Curated by experts</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Updates */}
          <div className="ultra-premium-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Recent Updates</h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium text-sm">iPhone 15 Pro Review Updated</h4>
                <p className="text-xs text-gray-300 mt-1">2 hours ago</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium text-sm">New Gaming Laptop Category</h4>
                <p className="text-xs text-gray-300 mt-1">1 day ago</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium text-sm">AI Recommendations Enhanced</h4>
                <p className="text-xs text-gray-300 mt-1">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPlacementZones;