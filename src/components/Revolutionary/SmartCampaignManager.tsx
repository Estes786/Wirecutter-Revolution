import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Rocket, Brain, Heart, TrendingUp, 
  Users, DollarSign, Zap, Settings, Play, 
  Pause, BarChart3, Sparkles, Atom 
} from 'lucide-react';
import { useSmartCampaigns, useRevolutionaryAI } from '../../store/revolutionStore';
import { SmartCampaign, CampaignPerformance } from '../../types';

const SmartCampaignManager: React.FC = () => {
  const { campaigns, launchSmartCampaign, optimizeCampaign, selectedCampaign, selectCampaign } = useSmartCampaigns();
  const { generateAIInsight } = useRevolutionaryAI();
  
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [campaignType, setCampaignType] = useState<'quantum' | 'emotional' | 'behavioral' | 'predictive'>('quantum');
  const [targetAudience, setTargetAudience] = useState<string[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  
  const campaignTypes = [
    {
      id: 'quantum',
      name: 'Quantum Campaign',
      description: 'Leverage quantum computing for parallel universe optimization',
      icon: <Atom className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-500',
      features: ['Parallel Universe Testing', 'Quantum Entanglement Targeting', 'Probability Optimization'],
      expectedROI: '340%',
      complexity: 'Advanced'
    },
    {
      id: 'emotional',
      name: 'Emotional Intelligence',
      description: 'AI-powered emotional targeting for happiness-driven conversions',
      icon: <Heart className="h-6 w-6" />,
      color: 'from-pink-500 to-red-500',
      features: ['Happiness Index Targeting', 'Empathy-Based Messaging', 'Trust Score Optimization'],
      expectedROI: '285%',
      complexity: 'Medium'
    },
    {
      id: 'behavioral',
      name: 'Behavioral Prediction',
      description: 'Advanced behavioral analysis and predictive targeting',
      icon: <Brain className="h-6 w-6" />,
      color: 'from-blue-500 to-cyan-500',
      features: ['Behavioral Pattern Analysis', 'Predictive User Journey', 'Dynamic Content Optimization'],
      expectedROI: '210%',
      complexity: 'Medium'
    },
    {
      id: 'predictive',
      name: 'Predictive Analytics',
      description: 'Machine learning-powered trend prediction and optimization',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'from-green-500 to-emerald-500',
      features: ['Trend Forecasting', 'Market Opportunity Detection', 'Revenue Prediction'],
      expectedROI: '195%',
      complexity: 'Basic'
    }
  ];

  const audienceSegments = [
    'Tech Enthusiasts',
    'Budget Conscious',
    'Early Adopters',
    'Premium Buyers',
    'Social Shoppers',
    'Comparison Shoppers',
    'Impulse Buyers',
    'Loyal Customers'
  ];

  const handleCreateCampaign = () => {
    if (targetAudience.length === 0 || selectedProducts.length === 0) {
      alert('Please select target audience and products');
      return;
    }

    const mockPerformance: CampaignPerformance = {
      impressions: 0,
      clicks: 0,
      conversions: 0,
      revenue: 0,
      cost: 0,
      roi: 0,
      ctr: 0,
      conversionRate: 0
    };

    const newCampaign: Omit<SmartCampaign, 'id' | 'createdAt' | 'updatedAt'> = {
      name: `${campaignTypes.find(t => t.id === campaignType)?.name} Campaign`,
      type: campaignType,
      status: 'active',
      targetAudience,
      products: selectedProducts,
      performance: mockPerformance,
      aiOptimization: {
        recommendedChanges: [],
        predictedPerformance: Math.random() * 100,
        optimizationScore: Math.random() * 100,
        aiConfidence: Math.random() * 100,
        machineLearningInsights: [],
        neuralNetworkPredictions: {}
      },
      quantumMetrics: {
        quantumEfficiency: Math.random() * 100,
        parallelUniversePerformance: {},
        quantumCoherence: Math.random() * 100,
        superpositionOptimization: Math.random() * 100,
        quantumEntanglementScore: Math.random() * 100
      },
      emotionalMetrics: {
        emotionalResonance: Math.random() * 100,
        happinessFactor: Math.random() * 100,
        satisfactionIndex: Math.random() * 100,
        trustBuilding: Math.random() * 100,
        loyaltyGeneration: Math.random() * 100,
        empathyConnection: Math.random() * 100
      }
    };

    launchSmartCampaign(newCampaign);
    
    generateAIInsight('campaign', {
      type: campaignType,
      audience: targetAudience,
      products: selectedProducts,
      message: 'Revolutionary campaign launched successfully!'
    });

    setShowCreateModal(false);
    setTargetAudience([]);
    setSelectedProducts([]);
  };

  const CampaignCard = ({ campaign }: { campaign: SmartCampaign }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={() => selectCampaign(campaign)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-lg bg-gradient-to-r ${
            campaignTypes.find(t => t.id === campaign.type)?.color || 'from-gray-400 to-gray-500'
          }`}>
            {campaignTypes.find(t => t.id === campaign.type)?.icon}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
            <p className="text-sm text-gray-600">{campaign.type} • {campaign.status}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              optimizeCampaign(campaign.id);
            }}
            className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <Zap className="h-4 w-4" />
          </button>
          <button className="p-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
            {campaign.status === 'active' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="text-center">
          <p className="text-lg font-bold text-gray-900">{campaign.performance.impressions}</p>
          <p className="text-xs text-gray-500">Impressions</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-gray-900">{campaign.performance.clicks}</p>
          <p className="text-xs text-gray-500">Clicks</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-gray-900">{campaign.performance.conversions}</p>
          <p className="text-xs text-gray-500">Conversions</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-green-600">${campaign.performance.revenue}</p>
          <p className="text-xs text-gray-500">Revenue</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">ROI:</span>
          <span className="font-semibold text-green-600">{campaign.performance.roi.toFixed(1)}%</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">AI Score:</span>
          <span className="font-semibold text-purple-600">{campaign.aiOptimization.optimizationScore.toFixed(1)}%</span>
        </div>
      </div>

      {campaign.type === 'quantum' && (
        <div className="mt-4 p-3 bg-purple-50 rounded-lg">
          <p className="text-sm font-medium text-purple-900">Quantum Advantage</p>
          <p className="text-sm text-purple-700">Efficiency: {campaign.quantumMetrics.quantumEfficiency.toFixed(1)}%</p>
        </div>
      )}

      {campaign.type === 'emotional' && (
        <div className="mt-4 p-3 bg-pink-50 rounded-lg">
          <p className="text-sm font-medium text-pink-900">Emotional Intelligence</p>
          <p className="text-sm text-pink-700">Happiness: {campaign.emotionalMetrics.happinessFactor.toFixed(1)}%</p>
        </div>
      )}
    </motion.div>
  );

  const CreateCampaignModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Revolutionary Campaign</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Campaign Type</label>
            <div className="grid grid-cols-2 gap-4">
              {campaignTypes.map((type) => (
                <motion.div
                  key={type.id}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    campaignType === type.id 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                                     onClick={() => setCampaignType(type.id as 'quantum' | 'emotional' | 'behavioral' | 'predictive')}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${type.color}`}>
                      {type.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{type.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{type.description}</p>
                      <div className="mt-2 flex items-center space-x-4">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {type.expectedROI} ROI
                        </span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {type.complexity}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Target Audience</label>
            <div className="grid grid-cols-4 gap-3">
              {audienceSegments.map((segment) => (
                <motion.button
                  key={segment}
                  whileHover={{ scale: 1.05 }}
                  className={`p-3 rounded-lg border transition-all ${
                    targetAudience.includes(segment)
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => {
                    setTargetAudience(prev => 
                      prev.includes(segment) 
                        ? prev.filter(s => s !== segment)
                        : [...prev, segment]
                    );
                  }}
                >
                  <span className="text-sm font-medium">{segment}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Products</label>
            <div className="grid grid-cols-3 gap-3">
              {['Smartphone', 'Laptop', 'Headphones', 'Tablet', 'Smartwatch', 'Camera'].map((product) => (
                <motion.button
                  key={product}
                  whileHover={{ scale: 1.05 }}
                  className={`p-3 rounded-lg border transition-all ${
                    selectedProducts.includes(product)
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => {
                    setSelectedProducts(prev => 
                      prev.includes(product) 
                        ? prev.filter(p => p !== product)
                        : [...prev, product]
                    );
                  }}
                >
                  <span className="text-sm font-medium">{product}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4 mt-8">
          <button
            onClick={() => setShowCreateModal(false)}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCreateCampaign}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-shadow"
          >
            Launch Campaign
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Smart Campaign Manager</h1>
          <p className="text-gray-600">AI-powered campaigns with quantum optimization</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowCreateModal(true)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-shadow"
        >
          <Rocket className="h-5 w-5" />
          <span>Create Campaign</span>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>

      {campaigns.length === 0 && (
        <div className="text-center py-12">
          <div className="p-6 bg-gray-50 rounded-lg max-w-md mx-auto">
            <Rocket className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Campaigns Yet</h3>
            <p className="text-gray-600 mb-4">Create your first revolutionary AI-powered campaign to start generating incredible results!</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowCreateModal(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      )}

      {showCreateModal && <CreateCampaignModal />}
    </div>
  );
};

export default SmartCampaignManager;