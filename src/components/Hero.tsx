import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Users, Award, Sparkles, Star, Crown } from 'lucide-react';
import { useAI } from '../hooks/useAI';
import { products } from '../data/products';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { recommendations, loading, getPersonalizedRecommendations, trackUserBehavior } = useAI();

  const heroSlides = [
    {
      title: "Ultra Premium AI-Powered Reviews",
      subtitle: "Experience the future of product discovery",
      description: "Advanced AI algorithms analyze millions of data points to deliver personalized recommendations with quantum-precision accuracy",
      cta: "Explore Premium Reviews",
      icon: <Sparkles className="h-8 w-8" />,
      gradient: "from-accent-600 via-primary-600 to-secondary-600",
      bgGradient: "bg-gradient-to-br from-accent-50 via-primary-50 to-secondary-50",
      iconColor: "text-accent-600"
    },
    {
      title: "Revolutionary Product Intelligence",
      subtitle: "Where expertise meets cutting-edge technology", 
      description: "Every product is analyzed through our revolutionary AI engine, delivering insights beyond traditional reviews",
      cta: "Discover Intelligence",
      icon: <Crown className="h-8 w-8" />,
      gradient: "from-gold-500 via-gold-600 to-gold-700",
      bgGradient: "bg-gradient-to-br from-gold-50 via-gold-100 to-gold-50",
      iconColor: "text-gold-600"
    },
    {
      title: "Quantum Analytics Platform",
      subtitle: "Next-generation product performance tracking",
      description: "Harness the power of quantum computing concepts to analyze product trends and market dynamics",
      cta: "Access Analytics",
      icon: <TrendingUp className="h-8 w-8" />,
      gradient: "from-success-500 via-success-600 to-success-700", 
      bgGradient: "bg-gradient-to-br from-success-50 via-success-100 to-success-50",
      iconColor: "text-success-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simulate getting personalized recommendations
    const mockUser = {
      id: '1',
      name: 'User',
      email: 'user@example.com',
      avatar: '',
      preferences: {
        categories: ['electronics', 'home'],
        priceRange: { min: 0, max: 50000000 },
        brands: ['Apple', 'Samsung', 'Sony'],
        aiSettings: {
          personalizedRecommendations: true,
          behaviorTracking: true,
          predictiveAnalytics: true,
          quantumInsights: false,
          emotionalIntelligence: false
        },
        notificationSettings: {
          email: true,
          push: true,
          deals: true,
          reviews: true,
          aiInsights: true
        }
      },
      history: {
        viewed: products.slice(0, 3).map(p => p.id),
        clicked: [],
        purchased: [],
        searched: [],
        timeSpent: {}
      },
      tier: 'basic' as const,
      createdAt: new Date(),
      lastActive: new Date()
    };
    
    getPersonalizedRecommendations(mockUser, products, 3);
  }, [getPersonalizedRecommendations]);

  const handleCTAClick = (slideIndex: number) => {
    trackUserBehavior('cta_click', 'hero', '1');
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background with Enhanced Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-900 via-luxury-800 to-luxury-900">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-900/20 via-primary-900/20 to-secondary-900/20" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a855f7' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Animated Luxury Blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-r from-accent-600/30 to-primary-600/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-gradient-to-r from-primary-600/30 to-secondary-600/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-secondary-600/30 to-accent-600/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

      {/* Premium Gold Accent Lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          {/* Premium Logo/Brand Section */}
          <div className="inline-flex items-center space-x-3 mb-8">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-accent-600 to-primary-600 shadow-luxury-glow">
              <Crown className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-luxury font-bold text-gold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                Wirecutter Indonesia
              </h1>
              <p className="text-platinum-300 text-sm font-medium">Premium Product Discovery</p>
            </div>
          </div>

          {/* Main Hero Content with Enhanced Animation */}
          <div className="animate-fade-in">
            {/* Premium Icon Display */}
            <div className="mb-8 flex justify-center">
              <div className={`p-6 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-luxury-glow ${currentSlideData.iconColor} animate-luxury-pulse`}>
                {currentSlideData.icon}
              </div>
            </div>

            {/* Enhanced Typography */}
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-luxury font-bold mb-6 leading-tight">
              <span className={`bg-gradient-to-r ${currentSlideData.gradient} bg-clip-text text-transparent animate-gradient-x`}>
                {currentSlideData.title}
              </span>
            </h2>

            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-platinum-200 mb-4 max-w-4xl mx-auto leading-relaxed">
              {currentSlideData.subtitle}
            </p>

            <p className="text-lg sm:text-xl text-platinum-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {currentSlideData.description}
            </p>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => handleCTAClick(currentSlide)}
                className="group relative overflow-hidden bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-700 hover:to-primary-700 text-white font-bold py-4 px-8 rounded-2xl shadow-luxury-glow hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3"
              >
                <span className="relative z-10">{currentSlideData.cta}</span>
                <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/30 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3">
                <Users className="h-5 w-5" />
                <span>Join 50K+ Users</span>
              </button>
            </div>

            {/* Premium Stats with Gold Accents */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { number: "50K+", label: "Happy Users", icon: Users },
                { number: "10K+", label: "Products Reviewed", icon: Award },
                { number: "4.9", label: "User Rating", icon: Star }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:shadow-luxury-glow">
                    <div className="flex items-center justify-center mb-3">
                      <stat.icon className="h-6 w-6 text-gold-400" />
                    </div>
                    <div className="text-3xl font-bold text-gold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-platinum-300 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-accent-500 to-primary-500 shadow-luxury-glow scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-accent-400 to-primary-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;