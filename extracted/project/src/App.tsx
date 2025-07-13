import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedReviews from './components/FeaturedReviews';
import TrustSection from './components/TrustSection';
import ProductPlacementZones from './components/ProductPlacementZones';
import AdminDashboard from './components/AdminDashboard';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="ultra-premium-container">
      <Header />
      <Hero />
      <Categories />
      <FeaturedReviews />
      <TrustSection />
      <ProductPlacementZones />
      <AdminDashboard />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;