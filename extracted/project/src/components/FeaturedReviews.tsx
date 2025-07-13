import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import SmartAffiliateButton from './SmartAffiliateButton';

const FeaturedReviews = () => {
  const reviews = [
    {
      id: 1,
      title: 'iPhone 15 Pro Max',
      category: 'Smartphones',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$1,199',
      summary: 'The ultimate flagship with incredible camera capabilities and performance.',
      pros: ['Exceptional camera quality', 'Premium build', 'Long battery life'],
      aiScore: 96
    },
    {
      id: 2,
      title: 'Sony WH-1000XM5',
      category: 'Audio',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$399',
      summary: 'Industry-leading noise cancellation with premium sound quality.',
      pros: ['Best-in-class ANC', 'Comfortable fit', 'Great battery life'],
      aiScore: 98
    },
    {
      id: 3,
      title: 'MacBook Pro M3',
      category: 'Laptops',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$1,999',
      summary: 'Powerful performance with the new M3 chip for professionals.',
      pros: ['M3 chip performance', 'Excellent display', 'Long battery life'],
      aiScore: 94
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Reviews
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Our top-rated products tested by experts and powered by AI analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="ultra-premium-card overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={review.image}
                  alt={review.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full">
                    {review.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-yellow-400">AI Score: {review.aiScore}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{review.title}</h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(review.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white font-semibold">{review.rating}</span>
                  <span className="text-2xl font-bold text-blue-300">{review.price}</span>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {review.summary}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Highlights:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {review.pros.slice(0, 2).map((pro, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium">
                    Read Review
                  </button>
                  <SmartAffiliateButton productId={review.id.toString()} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedReviews;