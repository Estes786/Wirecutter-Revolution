import React, { useState } from 'react';
import { BarChart3, Users, TrendingUp, Settings, Eye, Brain } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('analytics');

  const metrics = [
    { label: 'Active Users', value: '12,543', change: '+8.2%', positive: true },
    { label: 'Reviews Published', value: '847', change: '+12.1%', positive: true },
    { label: 'AI Accuracy', value: '98.2%', change: '+0.3%', positive: true },
    { label: 'Conversion Rate', value: '4.8%', change: '-0.2%', positive: false }
  ];

  const recentActivity = [
    { action: 'New review published', item: 'iPhone 15 Pro Max', time: '5 min ago' },
    { action: 'AI model updated', item: 'Personalization Engine', time: '1 hour ago' },
    { action: 'User feedback received', item: 'MacBook Pro Review', time: '2 hours ago' },
    { action: 'Product added', item: 'Samsung Galaxy S24', time: '4 hours ago' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI-Powered Analytics Dashboard
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Real-time insights and AI-driven performance metrics for optimal user experience
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {[
            { id: 'analytics', label: 'Analytics', icon: BarChart3 },
            { id: 'users', label: 'Users', icon: Users },
            { id: 'ai', label: 'AI Engine', icon: Brain },
            { id: 'settings', label: 'Settings', icon: Settings }
          ].map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Analytics Content */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="ultra-premium-card p-6">
                  <h3 className="text-sm font-medium text-gray-300 mb-2">{metric.label}</h3>
                  <div className="flex items-end justify-between">
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className={`text-sm font-medium ${
                      metric.positive ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {metric.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts and Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* AI Performance Chart */}
              <div className="ultra-premium-card p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-400" />
                  AI Personalization Performance
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Recommendation Accuracy</span>
                    <span className="text-2xl font-bold text-purple-300">98.2%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{width: '98.2%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">User Engagement</span>
                    <span className="text-2xl font-bold text-blue-300">94.7%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{width: '94.7%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Click-through Rate</span>
                    <span className="text-2xl font-bold text-green-300">12.4%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '62%'}}></div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="ultra-premium-card p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-blue-400" />
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="text-white text-sm">{activity.action}</div>
                        <div className="text-blue-300 text-sm font-medium">{activity.item}</div>
                        <div className="text-gray-400 text-xs">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AI Engine Tab */}
        {activeTab === 'ai' && (
          <div className="ultra-premium-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Brain className="w-6 h-6 text-purple-400" />
              AI Hyper-Personalization Engine V2.0
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Machine Learning Models</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-300">User Preference Model</span>
                    <span className="text-green-400 text-sm">Active</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-300">Product Matching Algorithm</span>
                    <span className="text-green-400 text-sm">Active</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-300">Sentiment Analysis</span>
                    <span className="text-yellow-400 text-sm">Training</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Real-time Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Model Accuracy</span>
                    <span className="text-2xl font-bold text-purple-300">98.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Processing Speed</span>
                    <span className="text-2xl font-bold text-blue-300">45ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Active Recommendations</span>
                    <span className="text-2xl font-bold text-green-300">1,247</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;