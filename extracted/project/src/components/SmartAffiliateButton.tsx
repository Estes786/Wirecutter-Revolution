import React, { useState } from 'react';
import { ExternalLink, ShoppingCart } from 'lucide-react';

interface SmartAffiliateButtonProps {
  productId: string;
  className?: string;
}

const SmartAffiliateButton: React.FC<SmartAffiliateButtonProps> = ({ 
  productId, 
  className = '' 
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    
    // Simulate AI-powered affiliate link generation
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In a real implementation, this would:
    // 1. Check user's purchase history
    // 2. Find best price across retailers
    // 3. Apply personalized discounts
    // 4. Generate tracking link
    
    window.open('#', '_blank');
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`
        flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 
        hover:from-green-700 hover:to-emerald-700 text-white py-2 px-4 rounded-lg 
        transition-all duration-300 text-sm font-medium disabled:opacity-50
        ${className}
      `}
    >
      {isLoading ? (
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      ) : (
        <ShoppingCart className="w-4 h-4" />
      )}
      {isLoading ? 'Finding Best Price...' : 'Buy Now'}
    </button>
  );
};

export default SmartAffiliateButton;