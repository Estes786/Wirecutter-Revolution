import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, X, AlertCircle, CheckCircle, Info, TrendingUp, 
  Zap, Heart, Brain, Target, DollarSign, Star, Award,
  Clock, Settings, Filter, Archive
} from 'lucide-react';
import { useRevolutionStore } from '../../store/revolutionStore';

export interface Notification {
  id: string;
  type: 'success' | 'warning' | 'error' | 'info' | 'ai-insight' | 'quantum' | 'emotional';
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: 'campaign' | 'ai' | 'quantum' | 'emotional' | 'revenue' | 'system';
  actionUrl?: string;
  actionText?: string;
  data?: any;
  autoHide?: boolean;
  hideAfter?: number;
}

interface NotificationSystemProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  maxNotifications?: number;
  showBadge?: boolean;
}

const NotificationSystem: React.FC<NotificationSystemProps> = ({
  position = 'top-right',
  maxNotifications = 5,
  showBadge = true
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState<string>('all');
  const { dashboardMetrics, campaigns, aiInsights } = useRevolutionStore();

  // Generate revolutionary notifications
  useEffect(() => {
    const generateNotifications = () => {
      const newNotifications: Notification[] = [];
      
      // AI Insights Notifications
      if (aiInsights.length > 0) {
        aiInsights.slice(0, 2).forEach(insight => {
          newNotifications.push({
            id: `ai-${insight.id}`,
            type: 'ai-insight',
            title: 'New AI Insight Available',
            message: insight.title,
            timestamp: new Date(),
            isRead: false,
            priority: insight.impact === 'high' ? 'urgent' : 'medium',
            category: 'ai',
            autoHide: false,
            data: insight
          });
        });
      }

      // Quantum Computing Notifications
      if (Math.random() > 0.7) {
        newNotifications.push({
          id: `quantum-${Date.now()}`,
          type: 'quantum',
          title: 'Quantum Advantage Detected',
          message: 'Parallel universe optimization yielding 340% ROI increase',
          timestamp: new Date(),
          isRead: false,
          priority: 'high',
          category: 'quantum',
          autoHide: true,
          hideAfter: 10000
        });
      }

      // Emotional Intelligence Notifications
      if (Math.random() > 0.6) {
        newNotifications.push({
          id: `emotional-${Date.now()}`,
          type: 'emotional',
          title: 'Emotional Resonance Peak',
          message: 'Customer happiness index reached 94.5% - optimal for conversions',
          timestamp: new Date(),
          isRead: false,
          priority: 'medium',
          category: 'emotional',
          autoHide: true,
          hideAfter: 8000
        });
      }

      // Revenue Notifications
      if (Math.random() > 0.8) {
        newNotifications.push({
          id: `revenue-${Date.now()}`,
          type: 'success',
          title: 'Revenue Milestone',
          message: 'Daily revenue exceeded $50,000 - New record!',
          timestamp: new Date(),
          isRead: false,
          priority: 'high',
          category: 'revenue',
          autoHide: false
        });
      }

      // Campaign Performance Notifications
      if (campaigns.length > 0) {
        const topCampaign = campaigns.find(c => c.performance.roi > 200);
        if (topCampaign) {
          newNotifications.push({
            id: `campaign-${topCampaign.id}`,
            type: 'success',
            title: 'Campaign Performance Alert',
            message: `${topCampaign.name} achieved ${topCampaign.performance.roi.toFixed(1)}% ROI`,
            timestamp: new Date(),
            isRead: false,
            priority: 'medium',
            category: 'campaign',
            autoHide: false
          });
        }
      }

      // System Notifications
      if (Math.random() > 0.9) {
        newNotifications.push({
          id: `system-${Date.now()}`,
          type: 'info',
          title: 'System Update',
          message: 'Revolutionary AI algorithms updated - Performance boost expected',
          timestamp: new Date(),
          isRead: false,
          priority: 'low',
          category: 'system',
          autoHide: true,
          hideAfter: 12000
        });
      }

      setNotifications(prev => [...newNotifications, ...prev].slice(0, 50));
    };

    const interval = setInterval(generateNotifications, 15000);
    generateNotifications(); // Initial generation

    return () => clearInterval(interval);
  }, [aiInsights, campaigns]);

  // Auto-hide notifications
  useEffect(() => {
    notifications.forEach(notification => {
      if (notification.autoHide && notification.hideAfter) {
        setTimeout(() => {
          setNotifications(prev => prev.filter(n => n.id !== notification.id));
        }, notification.hideAfter);
      }
    });
  }, [notifications]);

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning': return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'error': return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'ai-insight': return <Brain className="h-5 w-5 text-purple-500" />;
      case 'quantum': return <Zap className="h-5 w-5 text-indigo-500" />;
      case 'emotional': return <Heart className="h-5 w-5 text-pink-500" />;
      default: return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getNotificationColor = (type: Notification['type']) => {
    switch (type) {
      case 'success': return 'from-green-500 to-emerald-500';
      case 'warning': return 'from-yellow-500 to-orange-500';
      case 'error': return 'from-red-500 to-pink-500';
      case 'ai-insight': return 'from-purple-500 to-pink-500';
      case 'quantum': return 'from-indigo-500 to-purple-500';
      case 'emotional': return 'from-pink-500 to-red-500';
      default: return 'from-blue-500 to-cyan-500';
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, isRead: true } : n
    ));
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;
  const filteredNotifications = filter === 'all' ? notifications : notifications.filter(n => n.category === filter);

  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4'
  };

  return (
    <>
      {/* Notification Bell */}
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Bell className="h-6 w-6" />
          {showBadge && unreadCount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
            >
              {unreadCount > 9 ? '9+' : unreadCount}
            </motion.div>
          )}
        </motion.button>

        {/* Notification Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-lg border border-gray-200 z-50"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Notifications</h3>
                <div className="flex items-center space-x-2">
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="text-sm border border-gray-300 rounded px-2 py-1"
                  >
                    <option value="all">All</option>
                    <option value="ai">AI Insights</option>
                    <option value="quantum">Quantum</option>
                    <option value="emotional">Emotional</option>
                    <option value="campaign">Campaigns</option>
                    <option value="revenue">Revenue</option>
                  </select>
                  <button
                    onClick={clearAllNotifications}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    Clear All
                  </button>
                </div>
              </div>

              {/* Notifications List */}
              <div className="max-h-96 overflow-y-auto">
                {filteredNotifications.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <Bell className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                    <p>No notifications</p>
                  </div>
                ) : (
                  filteredNotifications.slice(0, maxNotifications).map((notification) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        !notification.isRead ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-full bg-gradient-to-r ${getNotificationColor(notification.type)}`}>
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-gray-900 truncate">{notification.title}</p>
                            <div className="flex items-center space-x-1">
                              {notification.priority === 'urgent' && (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                  Urgent
                                </span>
                              )}
                              <button
                                onClick={() => removeNotification(notification.id)}
                                className="text-gray-400 hover:text-gray-600"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-gray-500">
                              {notification.timestamp.toLocaleTimeString()}
                            </span>
                            {!notification.isRead && (
                              <button
                                onClick={() => markAsRead(notification.id)}
                                className="text-xs text-blue-600 hover:text-blue-800"
                              >
                                Mark as read
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Notifications */}
      <div className={`fixed ${positionClasses[position]} z-50 space-y-4 pointer-events-none`}>
        <AnimatePresence>
          {notifications
            .filter(n => n.autoHide && !n.isRead)
            .slice(0, 3)
            .map((notification) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.8 }}
                className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm pointer-events-auto"
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-full bg-gradient-to-r ${getNotificationColor(notification.type)}`}>
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900">{notification.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                  </div>
                  <button
                    onClick={() => removeNotification(notification.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default NotificationSystem;