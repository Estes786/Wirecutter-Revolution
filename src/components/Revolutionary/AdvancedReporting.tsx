import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, TrendingUp, Download, Calendar, Filter, 
  Users, DollarSign, Target, Zap, Eye, MousePointer,
  Clock, Globe, Star, Award, Rocket
} from 'lucide-react';
import { useRevolutionStore } from '../../store/revolutionStore';

interface ReportData {
  date: string;
  revenue: number;
  conversions: number;
  clicks: number;
  impressions: number;
  conversionRate: number;
  cpc: number;
  roas: number;
  aiScore: number;
  quantumAdvantage: number;
  emotionalResonance: number;
}

interface AdvancedMetric {
  name: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
  color: string;
  trend: 'up' | 'down' | 'stable';
}

const AdvancedReporting: React.FC = () => {
  const { campaigns, products, dashboardMetrics } = useRevolutionStore();
  const [dateRange, setDateRange] = useState('30d');
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>(['revenue', 'conversions', 'ai_score']);
  const [reportData, setReportData] = useState<ReportData[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Generate mock report data
  useEffect(() => {
    const generateReportData = () => {
      const days = dateRange === '7d' ? 7 : dateRange === '30d' ? 30 : 90;
      const data: ReportData[] = [];
      
      for (let i = days; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        
        data.push({
          date: date.toISOString().split('T')[0],
          revenue: Math.random() * 10000 + 5000,
          conversions: Math.random() * 100 + 50,
          clicks: Math.random() * 1000 + 500,
          impressions: Math.random() * 10000 + 5000,
          conversionRate: Math.random() * 10 + 2,
          cpc: Math.random() * 5 + 1,
          roas: Math.random() * 500 + 200,
          aiScore: Math.random() * 40 + 60,
          quantumAdvantage: Math.random() * 50 + 40,
          emotionalResonance: Math.random() * 30 + 70
        });
      }
      
      setReportData(data);
    };

    generateReportData();
  }, [dateRange]);

  const advancedMetrics: AdvancedMetric[] = [
    {
      name: 'Total Revenue',
      value: `$${reportData.reduce((sum, item) => sum + item.revenue, 0).toLocaleString()}`,
      change: 23.5,
      icon: <DollarSign className="h-5 w-5" />,
      color: 'from-green-500 to-emerald-500',
      trend: 'up'
    },
    {
      name: 'Conversion Rate',
      value: `${(reportData.reduce((sum, item) => sum + item.conversionRate, 0) / reportData.length).toFixed(2)}%`,
      change: 18.2,
      icon: <Target className="h-5 w-5" />,
      color: 'from-blue-500 to-cyan-500',
      trend: 'up'
    },
    {
      name: 'AI Performance',
      value: `${(reportData.reduce((sum, item) => sum + item.aiScore, 0) / reportData.length).toFixed(1)}%`,
      change: 31.4,
      icon: <Zap className="h-5 w-5" />,
      color: 'from-purple-500 to-pink-500',
      trend: 'up'
    },
    {
      name: 'Quantum Efficiency',
      value: `${(reportData.reduce((sum, item) => sum + item.quantumAdvantage, 0) / reportData.length).toFixed(1)}%`,
      change: 42.1,
      icon: <Rocket className="h-5 w-5" />,
      color: 'from-indigo-500 to-purple-500',
      trend: 'up'
    },
    {
      name: 'Emotional Connection',
      value: `${(reportData.reduce((sum, item) => sum + item.emotionalResonance, 0) / reportData.length).toFixed(1)}%`,
      change: 15.9,
      icon: <Star className="h-5 w-5" />,
      color: 'from-pink-500 to-red-500',
      trend: 'up'
    },
    {
      name: 'Total Impressions',
      value: reportData.reduce((sum, item) => sum + item.impressions, 0).toLocaleString(),
      change: 12.8,
      icon: <Eye className="h-5 w-5" />,
      color: 'from-orange-500 to-red-500',
      trend: 'up'
    }
  ];

  const generateReport = async () => {
    setIsGenerating(true);
    // Simulate report generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
  };

  const exportReport = () => {
    const csvContent = [
      ['Date', 'Revenue', 'Conversions', 'Clicks', 'Impressions', 'Conversion Rate', 'CPC', 'ROAS', 'AI Score', 'Quantum Advantage', 'Emotional Resonance'],
      ...reportData.map(item => [
        item.date,
        item.revenue.toFixed(2),
        item.conversions.toFixed(0),
        item.clicks.toFixed(0),
        item.impressions.toFixed(0),
        item.conversionRate.toFixed(2),
        item.cpc.toFixed(2),
        item.roas.toFixed(2),
        item.aiScore.toFixed(1),
        item.quantumAdvantage.toFixed(1),
        item.emotionalResonance.toFixed(1)
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `affiliate-report-${dateRange}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Advanced Reporting</h1>
              <p className="text-gray-600">Comprehensive analytics and performance insights</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={generateReport}
                disabled={isGenerating}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-shadow disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <BarChart3 className="h-4 w-4" />
                    <span>Generate Report</span>
                  </>
                )}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={exportReport}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-shadow"
              >
                <Download className="h-4 w-4" />
                <span>Export CSV</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Advanced Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {advancedMetrics.map((metric, index) => (
            <motion.div
              key={metric.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className={`h-4 w-4 ${metric.change >= 0 ? 'text-green-500' : 'text-red-500'}`} />
                    <span className={`text-sm ml-1 ${metric.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.change >= 0 ? '+' : ''}{metric.change}%
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-r ${metric.color}`}>
                  {React.cloneElement(metric.icon as React.ReactElement, { className: 'h-5 w-5 text-white' })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Revenue Trend Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Revenue Trend Analysis</h2>
          <div className="h-64 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-16 w-16 text-purple-400 mx-auto mb-4" />
              <p className="text-gray-600">Advanced Chart Visualization</p>
              <p className="text-sm text-gray-500">Real-time data processing with quantum analytics</p>
            </div>
          </div>
        </motion.div>

        {/* Performance Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Performance</h3>
            <div className="space-y-4">
              {campaigns.slice(0, 5).map((campaign, index) => (
                <div key={campaign.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${
                      campaign.type === 'quantum' ? 'bg-purple-100 text-purple-600' :
                      campaign.type === 'emotional' ? 'bg-pink-100 text-pink-600' :
                      campaign.type === 'behavioral' ? 'bg-blue-100 text-blue-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      <Target className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{campaign.name}</p>
                      <p className="text-sm text-gray-600">{campaign.type}</p>
                    </div>
                  </div>
                                     <div className="text-right">
                     <p className="font-semibold text-gray-900">{campaign.performance.roi.toFixed(1)}%</p>
                     <p className="text-sm text-gray-600">${campaign.performance.cost.toLocaleString()}</p>
                   </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Products</h3>
            <div className="space-y-4">
              {products.slice(0, 5).map((product, index) => (
                <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-semibold">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.category}</p>
                    </div>
                  </div>
                                     <div className="text-right">
                     <p className="font-semibold text-gray-900">{(product.quantumMetrics?.probabilityScore || 0).toFixed(1)}%</p>
                     <p className="text-sm text-gray-600">${Object.values(product.prices)[0] || 0}</p>
                   </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* AI Insights Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white"
        >
          <h2 className="text-xl font-bold mb-4">AI-Powered Insights Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">340%</div>
              <p className="text-purple-100">Average ROI with Quantum Campaigns</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">285%</div>
              <p className="text-purple-100">Emotional Intelligence Boost</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">97.5%</div>
              <p className="text-purple-100">AI Prediction Accuracy</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvancedReporting;