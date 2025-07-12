// Core Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  preferences: UserPreferences;
  history: UserHistory;
  affiliateStats?: AffiliateStats;
  tier: 'basic' | 'premium' | 'enterprise';
  createdAt: Date;
  lastActive: Date;
}

export interface UserPreferences {
  categories: string[];
  priceRange: { min: number; max: number };
  brands: string[];
  aiSettings: AISettings;
  notificationSettings: NotificationSettings;
}

export interface AISettings {
  personalizedRecommendations: boolean;
  behaviorTracking: boolean;
  predictiveAnalytics: boolean;
  quantumInsights: boolean;
  emotionalIntelligence: boolean;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  deals: boolean;
  reviews: boolean;
  aiInsights: boolean;
}

export interface UserHistory {
  viewed: string[];
  clicked: string[];
  purchased: string[];
  searched: string[];
  timeSpent: { [productId: string]: number };
}

// Revolutionary Product Types
export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  images: string[];
  prices: { [store: string]: number };
  originalPrices: { [store: string]: number };
  discounts: { [store: string]: number };
  affiliateLinks: { [store: string]: string };
  commissionRates: { [store: string]: number };
  rating: number;
  reviewCount: number;
  features: string[];
  pros: string[];
  cons: string[];
  specifications: { [key: string]: string };
  tags: string[];
  isTrending: boolean;
  isNewArrival: boolean;
  isBestSeller: boolean;
  isAIRecommended: boolean;
  aiRecommendationScore: number;
  socialMetrics: SocialMetrics;
  userPersonalizationData: UserPersonalizationData;
  quantumMetrics: QuantumMetrics;
  emotionalMetrics: EmotionalMetrics;
  competitorAnalysis: CompetitorAnalysis;
  seoData: SEOData;
  createdAt: Date;
  updatedAt: Date;
}

export interface SocialMetrics {
  shares: number;
  likes: number;
  comments: number;
  views: number;
  engagement: number;
  trendingScore: number;
  influencerMentions: number;
  socialSentiment: number;
}

export interface UserPersonalizationData {
  viewCount: number;
  clickRate: number;
  purchaseIntent: number;
  engagementScore: number;
  personalizedRating: number;
  behaviorPattern: string;
  preferenceMatch: number;
  contextualRelevance: number;
}

export interface QuantumMetrics {
  probabilityScore: number;
  quantumEntanglement: number;
  parallelUniverseRevenue: number;
  quantumWaveAmplitude: number;
  coherenceIndex: number;
  quantumTunneling: number;
  superpositionState: string;
  quantumInterference: number;
}

export interface EmotionalMetrics {
  happinessIndex: number;
  satisfactionScore: number;
  trustLevel: number;
  loyaltyMetric: number;
  emotionalEngagement: number;
  sentimentAnalysis: string;
  emotionalJourney: string[];
  empathyScore: number;
}

export interface CompetitorAnalysis {
  competitorPrices: { [competitor: string]: number };
  marketPosition: number;
  competitiveAdvantage: string[];
  marketShare: number;
  priceCompetitiveness: number;
  featureComparison: { [feature: string]: number };
}

export interface SEOData {
  keywords: string[];
  searchVolume: number;
  difficulty: number;
  ranking: number;
  backlinks: number;
  organicTraffic: number;
  clickThroughRate: number;
}

// Revolutionary Affiliate Marketing Types
export interface AffiliateStats {
  totalEarnings: number;
  monthlyEarnings: number;
  commissionRate: number;
  clickCount: number;
  conversionRate: number;
  topProducts: string[];
  revenueByProduct: { [productId: string]: number };
  revenueByStore: { [store: string]: number };
  performanceMetrics: PerformanceMetrics;
  quantumPerformance: QuantumPerformance;
  emotionalPerformance: EmotionalPerformance;
}

export interface PerformanceMetrics {
  clicks: number;
  conversions: number;
  revenue: number;
  roi: number;
  ctr: number;
  averageOrderValue: number;
  customerLifetimeValue: number;
  retentionRate: number;
}

export interface QuantumPerformance {
  quantumRevenue: number;
  parallelConversions: number;
  quantumROI: number;
  probabilityOptimization: number;
  quantumEngagement: number;
  multidimensionalMetrics: { [dimension: string]: number };
}

export interface EmotionalPerformance {
  emotionalROI: number;
  happinessConversion: number;
  satisfactionMetrics: number;
  trustMonetization: number;
  loyaltyProfitability: number;
  emotionalEngagementScore: number;
}

// AI and Analytics Types
export interface AIInsight {
  id: string;
  type: 'trend' | 'opportunity' | 'optimization' | 'prediction';
  title: string;
  description: string;
  confidence: number;
  impact: 'low' | 'medium' | 'high';
  actionable: boolean;
  recommendations: string[];
  data: any;
  createdAt: Date;
}

export interface RevolutionaryFeature {
  id: string;
  name: string;
  description: string;
  category: 'ai' | 'analytics' | 'automation' | 'optimization';
  isEnabled: boolean;
  impact: number;
  complexity: number;
  roi: number;
  features: string[];
}

export interface SmartCampaign {
  id: string;
  name: string;
  type: 'quantum' | 'emotional' | 'behavioral' | 'predictive';
  status: 'active' | 'paused' | 'completed';
  targetAudience: string[];
  products: string[];
  performance: CampaignPerformance;
  aiOptimization: AIOptimization;
  quantumMetrics: QuantumCampaignMetrics;
  emotionalMetrics: EmotionalCampaignMetrics;
  createdAt: Date;
  updatedAt: Date;
}

export interface CampaignPerformance {
  impressions: number;
  clicks: number;
  conversions: number;
  revenue: number;
  cost: number;
  roi: number;
  ctr: number;
  conversionRate: number;
}

export interface AIOptimization {
  recommendedChanges: string[];
  predictedPerformance: number;
  optimizationScore: number;
  aiConfidence: number;
  machineLearningInsights: string[];
  neuralNetworkPredictions: any;
}

export interface QuantumCampaignMetrics {
  quantumEfficiency: number;
  parallelUniversePerformance: { [universe: string]: number };
  quantumCoherence: number;
  superpositionOptimization: number;
  quantumEntanglementScore: number;
}

export interface EmotionalCampaignMetrics {
  emotionalResonance: number;
  happinessFactor: number;
  satisfactionIndex: number;
  trustBuilding: number;
  loyaltyGeneration: number;
  empathyConnection: number;
}

// Revolutionary Dashboard Types
export interface DashboardMetrics {
  totalRevenue: number;
  monthlyGrowth: number;
  totalProducts: number;
  totalUsers: number;
  conversionRate: number;
  averageOrderValue: number;
  topPerformingProducts: Product[];
  revenueByCategory: { [category: string]: number };
  userEngagement: UserEngagement;
  aiPerformance: AIPerformance;
  quantumAnalytics: QuantumAnalytics;
  emotionalAnalytics: EmotionalAnalytics;
}

export interface UserEngagement {
  dailyActiveUsers: number;
  sessionDuration: number;
  pageViews: number;
  bounceRate: number;
  retentionRate: number;
  engagementScore: number;
}

export interface AIPerformance {
  recommendationAccuracy: number;
  personalizationScore: number;
  predictiveAccuracy: number;
  automationEfficiency: number;
  learningRate: number;
  optimizationGains: number;
}

export interface QuantumAnalytics {
  quantumAdvantage: number;
  parallelUniverseInsights: any[];
  quantumSupremacy: number;
  coherenceMetrics: number;
  quantumProcessing: number;
  quantumOptimization: number;
}

export interface EmotionalAnalytics {
  overallHappiness: number;
  satisfactionTrend: number;
  trustIndex: number;
  loyaltyMetrics: number;
  emotionalEngagement: number;
  empathyScore: number;
}

// Store and API Types
export interface Store {
  id: string;
  name: string;
  logo: string;
  baseUrl: string;
  affiliateProgram: AffiliateProgramDetails;
  apiIntegration: APIIntegration;
  performance: StorePerformance;
}

export interface AffiliateProgramDetails {
  commissionRate: number;
  cookieDuration: number;
  paymentTerms: string;
  minimumPayout: number;
  trackingMethod: string;
  additionalBenefits: string[];
}

export interface APIIntegration {
  isConnected: boolean;
  apiKey: string;
  lastSync: Date;
  syncStatus: 'success' | 'error' | 'pending';
  errorMessage?: string;
  rateLimits: {
    requests: number;
    timeWindow: number;
  };
}

export interface StorePerformance {
  totalSales: number;
  conversionRate: number;
  averageCommission: number;
  totalClicks: number;
  revenue: number;
  growthRate: number;
}

// Revolutionary AI Types
export interface AIRevolutionConfig {
  neuralNetworks: NeuralNetworkConfig[];
  machineLearning: MachineLearningConfig;
  deepLearning: DeepLearningConfig;
  quantumComputing: QuantumComputingConfig;
  emotionalAI: EmotionalAIConfig;
  predictiveAnalytics: PredictiveAnalyticsConfig;
}

export interface NeuralNetworkConfig {
  id: string;
  name: string;
  type: 'CNN' | 'RNN' | 'LSTM' | 'GAN' | 'Transformer';
  layers: number;
  neurons: number;
  activation: string;
  optimizer: string;
  learningRate: number;
  accuracy: number;
  isActive: boolean;
}

export interface MachineLearningConfig {
  algorithms: string[];
  featureEngineering: boolean;
  autoML: boolean;
  ensembleMethods: boolean;
  crossValidation: boolean;
  hyperparameterTuning: boolean;
}

export interface DeepLearningConfig {
  frameworks: string[];
  gpu: boolean;
  distributedTraining: boolean;
  transferLearning: boolean;
  attentionMechanism: boolean;
  reinforcementLearning: boolean;
}

export interface QuantumComputingConfig {
  quantumCircuits: number;
  qubits: number;
  quantumGates: string[];
  entanglementLevel: number;
  coherenceTime: number;
  quantumAlgorithms: string[];
}

export interface EmotionalAIConfig {
  sentimentAnalysis: boolean;
  emotionRecognition: boolean;
  empathyModeling: boolean;
  emotionalIntelligence: boolean;
  moodTracking: boolean;
  personalityAssessment: boolean;
}

export interface PredictiveAnalyticsConfig {
  timeSeriesForecasting: boolean;
  behaviorPrediction: boolean;
  trendAnalysis: boolean;
  riskAssessment: boolean;
  churnPrediction: boolean;
  revenueForecasting: boolean;
}

// All types are already exported above with their interface declarations