import React from 'react';
import { ArrowRight, Star, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="ultra-premium-background-effects"></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="ultra-premium-heading mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            Ultra Premium
          </h1>
          <h2 className="text-4xl md:text-6xl font-light text-blue-200 mb-6">
            Product Reviews
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
          Experience the best in premium product recommendations with AI-powered personalization, 
          expert reviews, and cutting-edge technology.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="ultra-premium-button px-8 py-4 text-lg font-semibold rounded-full text-white flex items-center justify-center gap-2">
            Explore Reviews
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300">
            AI Personalization
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="ultra-premium-card p-6">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">500+</div>
            <div className="text-blue-200">Expert Reviews</div>
          </div>
          
          <div className="ultra-premium-card p-6">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">1M+</div>
            <div className="text-blue-200">Happy Users</div>
          </div>
          
          <div className="ultra-premium-card p-6">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-8 h-8 text-purple-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">98%</div>
            <div className="text-blue-200">Accuracy Rate</div>
          </div>
        </div>
      </div>
      
      {/* Floating AI Elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full opacity-10 bg-gradient-to-br from-blue-400 to-purple-500 blur-xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full opacity-10 bg-gradient-to-br from-purple-400 to-pink-500 blur-xl"></div>
    </div>
  );
};

export default Hero;