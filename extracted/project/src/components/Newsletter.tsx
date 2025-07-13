import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail('');
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="ultra-premium-card p-8 md:p-12 text-center">
          <div className="mb-8">
            <Mail className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Premium Reviews
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Get exclusive access to our latest reviews, AI-powered recommendations, 
              and early access to product launches.
            </p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="ultra-premium-button px-6 py-3 rounded-lg font-semibold"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                Join 50,000+ subscribers. No spam, unsubscribe anytime.
              </p>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 text-green-400">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-semibold">Successfully subscribed!</span>
            </div>
          )}

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Weekly Reviews</h3>
              <p className="text-gray-300 text-sm">Latest product reviews and comparisons</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2">AI Insights</h3>
              <p className="text-gray-300 text-sm">Personalized recommendations just for you</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Exclusive Deals</h3>
              <p className="text-gray-300 text-sm">Early access to discounts and offers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;