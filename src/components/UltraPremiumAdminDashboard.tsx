import React, { useState } from 'react';
import { BarChart3, Users, TrendingUp, Settings, Eye, Brain, Cpu, Zap, Target } from 'lucide-react';

const UltraPremiumAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('analytics');

  const metrics = [
    { label: 'Active Users', value: '12,543', change: '+8.2%', positive: true },
    { label: 'Reviews Published', value: '847', change: '+12.1%', positive: true },
    { label: 'AI Accuracy', value: '98.2%', change: '+0.3%', positive: true },
    { label: 'Conversion Rate', value: '4.8%', change: '-0.2%', positive: false },
    { label: 'Quantum Score', value: '94.7%', change: '+5.1%', positive: true },
    { label: 'Neural Processing', value: '45ms', change: '-12ms', positive: true }
  ];

  const recentActivity = [
    { action: 'AI Hyper-Personalization Model Updated', item: 'Neural Engine V2.0', time: '5 min ago', type: 'ai' },
    { action: 'Quantum Analytics Engine Optimized', item: 'Parallel Processing', time: '15 min ago', type: 'quantum' },
    { action: 'New review published', item: 'iPhone 15 Pro Max', time: '1 hour ago', type: 'content' },
    { action: 'Machine Learning Model Trained', item: 'User Preference Engine', time: '2 hours ago', type: 'ai' },
    { action: 'User feedback received', item: 'MacBook Pro Review', time: '3 hours ago', type: 'feedback' },
    { action: 'Product Intelligence Updated', item: 'Samsung Galaxy S24', time: '4 hours ago', type: 'intelligence' }
  ];

  const aiModels = [
    { name: 'User Preference Model', accuracy: '98.2%', status: 'active', type: 'Neural Network' },
    { name: 'Product Matching Algorithm', accuracy: '96.8%', status: 'active', type: 'Deep Learning' },
    { name: 'Sentiment Analysis Engine', accuracy: '94.5%', status: 'training', type: 'NLP' },
    { name: 'Quantum Recommendation System', accuracy: '99.1%', status: 'active', type: 'Quantum AI' },
    { name: 'Emotional Intelligence Processor', accuracy: '92.3%', status: 'optimizing', type: 'Emotional AI' }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'ai': return <Brain className="w-4 h-4 text-purple-400" />;
      case 'quantum': return <Zap className="w-4 h-4 text-blue-400" />;
      case 'content': return <Eye className="w-4 h-4 text-green-400" />;
      case 'feedback': return <Target className="w-4 h-4 text-yellow-400" />;
      case 'intelligence': return <Cpu className="w-4 h-4 text-cyan-400" />;
      default: return <Eye className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'training': return 'text-yellow-400';
      case 'optimizing': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="ultra-premium-heading text-4xl md:text-6xl font-bold mb-4">
            AI-Powered Ultra Premium Analytics
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Revolutionary AI insights with quantum computing integration and emotional intelligence
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {[
            { id: 'analytics', label: 'Analytics', icon: BarChart3 },
            { id: 'users', label: 'Users', icon: Users },
            { id: 'ai', label: 'AI Engine V2.0', icon: Brain },
            { id: 'quantum', label: 'Quantum Analytics', icon: Zap },
            { id: 'settings', label: 'Settings', icon: Settings }
          ].map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`ultra-premium-button flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
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
            {/* Enhanced Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

            {/* AI Performance and Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Enhanced AI Performance Chart */}
              <div className="ultra-premium-card p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-400" />
                  AI Hyper-Personalization Performance
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Neural Network Accuracy</span>
                    <span className="text-2xl font-bold text-purple-300">98.2%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{width: '98.2%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Quantum Processing Speed</span>
                    <span className="text-2xl font-bold text-blue-300">45ms</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Emotional Intelligence</span>
                    <span className="text-2xl font-bold text-green-300">94.7%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '94.7%'}}></div>
                  </div>
                </div>
              </div>

              {/* Enhanced Recent Activity */}
              <div className="ultra-premium-card p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-blue-400" />
                  Revolutionary Activity Feed
                </h3>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      {getActivityIcon(activity.type)}
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

        {/* AI Engine V2.0 Tab */}
        {activeTab === 'ai' && (
          <div className="ultra-premium-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Brain className="w-6 h-6 text-purple-400" />
              AI Hyper-Personalization Engine V2.0
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Revolutionary Machine Learning Models</h4>
                <div className="space-y-3">
                  {aiModels.map((model, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <div>
                        <div className="text-white font-medium">{model.name}</div>
                        <div className="text-sm text-gray-400">{model.type}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-medium">{model.accuracy}</div>
                        <div className={`text-sm ${getStatusColor(model.status)}`}>
                          {model.status.charAt(0).toUpperCase() + model.status.slice(1)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Real-time Neural Metrics</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Overall AI Performance</span>
                    <span className="text-3xl font-bold text-purple-300">98.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Neural Processing Speed</span>
                    <span className="text-3xl font-bold text-blue-300">45ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Active Neural Connections</span>
                    <span className="text-3xl font-bold text-green-300">2,847</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Quantum Entanglements</span>
                    <span className="text-3xl font-bold text-cyan-300">1,247</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-3">AI Engine Status</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Cpu className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-medium">Neural Processing</div>
                  <div className="text-purple-300">Optimized</div>
                </div>
                <div className="text-center">
                  <Zap className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-white font-medium">Quantum Computing</div>
                  <div className="text-blue-300">Active</div>
                </div>
                <div className="text-center">
                  <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-white font-medium">Personalization</div>
                  <div className="text-green-300">Enhanced</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quantum Analytics Tab */}
        {activeTab === 'quantum' && (
          <div className="ultra-premium-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-blue-400" />
              Quantum Analytics Engine
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="ultra-premium-card p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Quantum Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Parallel Universe Revenue</span>
                    <span className="text-blue-300 font-bold">$127.5K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Quantum Entanglement</span>
                    <span className="text-purple-300 font-bold">94.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Probability Score</span>
                    <span className="text-green-300 font-bold">0.982</span>
                  </div>
                </div>
              </div>

              <div className="ultra-premium-card p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Quantum States</h4>
                <div className="space-y-2">
                  <div className="text-sm text-gray-300">Superposition: Active</div>
                  <div className="text-sm text-gray-300">Entanglement: Optimized</div>
                  <div className="text-sm text-gray-300">Coherence: 99.2%</div>
                  <div className="text-sm text-gray-300">Interference: Minimized</div>
                </div>
              </div>

              <div className="ultra-premium-card p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Processing Power</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Quantum Bits</span>
                    <span className="text-cyan-300 font-bold">2,048</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Operations/sec</span>
                    <span className="text-blue-300 font-bold">10.5M</span>
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

export default UltraPremiumAdminDashboard;