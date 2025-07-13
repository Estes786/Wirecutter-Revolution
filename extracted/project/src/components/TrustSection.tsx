import React from 'react';
import { Shield, Award, Users, Zap } from 'lucide-react';

const TrustSection = () => {
  const trustFactors = [
    {
      icon: Shield,
      title: 'Unbiased Reviews',
      description: 'Independent testing with no manufacturer influence',
      stat: '100% Independent'
    },
    {
      icon: Award,
      title: 'Expert Testing',
      description: 'Rigorous testing by certified professionals',
      stat: '50+ Experts'
    },
    {
      icon: Users,
      title: 'Community Trusted',
      description: 'Trusted by millions of users worldwide',
      stat: '1M+ Users'
    },
    {
      icon: Zap,
      title: 'AI-Powered',
      description: 'Advanced AI for personalized recommendations',
      stat: '98% Accuracy'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Trust Our Reviews?
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Our commitment to transparency, expertise, and cutting-edge technology 
            ensures you get the most reliable product recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFactors.map((factor, index) => {
            const IconComponent = factor.icon;
            return (
              <div key={index} className="ultra-premium-card p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {factor.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {factor.description}
                </p>
                
                <div className="text-2xl font-bold text-blue-300">
                  {factor.stat}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 ultra-premium-card p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">5+ Years</div>
              <div className="text-blue-200">Industry Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200">Products Tested</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;