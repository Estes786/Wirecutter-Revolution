import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, Cpu, HardDrive, Wifi, Zap, AlertTriangle, 
  CheckCircle, Clock, Server, Database, Cloud, Shield,
  TrendingUp, TrendingDown, Minus, RefreshCw
} from 'lucide-react';

interface SystemMetrics {
  timestamp: Date;
  cpu: number;
  memory: number;
  disk: number;
  network: number;
  responseTime: number;
  throughput: number;
  errorRate: number;
  uptime: number;
  activeUsers: number;
  sessionsPerSecond: number;
  aiProcessingLoad: number;
  quantumComputingLoad: number;
  emotionalAILoad: number;
}

interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info';
  title: string;
  message: string;
  timestamp: Date;
  metric: string;
  value: number;
  threshold: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<SystemMetrics[]>([]);
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [currentMetrics, setCurrentMetrics] = useState<SystemMetrics | null>(null);
  const [selectedTimeRange, setSelectedTimeRange] = useState('1h');

  // Generate realistic system metrics
  const generateMetrics = useCallback((): SystemMetrics => {
    const now = new Date();
    const baseMetrics = {
      timestamp: now,
      cpu: Math.random() * 80 + 10,
      memory: Math.random() * 70 + 20,
      disk: Math.random() * 60 + 30,
      network: Math.random() * 100 + 50,
      responseTime: Math.random() * 200 + 50,
      throughput: Math.random() * 1000 + 500,
      errorRate: Math.random() * 2,
      uptime: 99.9 - Math.random() * 0.1,
      activeUsers: Math.floor(Math.random() * 5000 + 1000),
      sessionsPerSecond: Math.random() * 100 + 50,
      aiProcessingLoad: Math.random() * 90 + 10,
      quantumComputingLoad: Math.random() * 95 + 5,
      emotionalAILoad: Math.random() * 85 + 15
    };

    // Add some realistic fluctuations
    if (metrics.length > 0) {
      const lastMetric = metrics[metrics.length - 1];
      baseMetrics.cpu = Math.max(0, Math.min(100, lastMetric.cpu + (Math.random() - 0.5) * 10));
      baseMetrics.memory = Math.max(0, Math.min(100, lastMetric.memory + (Math.random() - 0.5) * 5));
      baseMetrics.activeUsers = Math.max(0, lastMetric.activeUsers + Math.floor((Math.random() - 0.5) * 200));
    }

    return baseMetrics;
  }, [metrics]);

  // Check for performance alerts
  const checkAlerts = useCallback((metric: SystemMetrics) => {
    const newAlerts: PerformanceAlert[] = [];

    // CPU Alert
    if (metric.cpu > 80) {
      newAlerts.push({
        id: `cpu-${Date.now()}`,
        type: 'warning',
        title: 'High CPU Usage',
        message: `CPU usage is at ${metric.cpu.toFixed(1)}% - Performance may be impacted`,
        timestamp: new Date(),
        metric: 'cpu',
        value: metric.cpu,
        threshold: 80
      });
    }

    // Memory Alert
    if (metric.memory > 85) {
      newAlerts.push({
        id: `memory-${Date.now()}`,
        type: 'error',
        title: 'Critical Memory Usage',
        message: `Memory usage is at ${metric.memory.toFixed(1)}% - Immediate attention required`,
        timestamp: new Date(),
        metric: 'memory',
        value: metric.memory,
        threshold: 85
      });
    }

    // Response Time Alert
    if (metric.responseTime > 200) {
      newAlerts.push({
        id: `response-${Date.now()}`,
        type: 'warning',
        title: 'High Response Time',
        message: `Response time is ${metric.responseTime.toFixed(0)}ms - User experience may be affected`,
        timestamp: new Date(),
        metric: 'responseTime',
        value: metric.responseTime,
        threshold: 200
      });
    }

    // AI Processing Load Alert
    if (metric.aiProcessingLoad > 90) {
      newAlerts.push({
        id: `ai-${Date.now()}`,
        type: 'info',
        title: 'AI Processing Peak',
        message: `AI processing load at ${metric.aiProcessingLoad.toFixed(1)}% - Revolutionary features at full capacity`,
        timestamp: new Date(),
        metric: 'aiProcessingLoad',
        value: metric.aiProcessingLoad,
        threshold: 90
      });
    }

    if (newAlerts.length > 0) {
      setAlerts(prev => [...newAlerts, ...prev].slice(0, 20));
    }
  }, []);

  // Update metrics every 3 seconds
  useEffect(() => {
    if (!isMonitoring) return;

    const interval = setInterval(() => {
      const newMetric = generateMetrics();
      setMetrics(prev => [...prev, newMetric].slice(-100)); // Keep last 100 metrics
      setCurrentMetrics(newMetric);
      checkAlerts(newMetric);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMonitoring, generateMetrics, checkAlerts]);

  // Initialize with first metric
  useEffect(() => {
    const initialMetric = generateMetrics();
    setMetrics([initialMetric]);
    setCurrentMetrics(initialMetric);
  }, []);

  const getStatusColor = (value: number, thresholds: { warning: number; error: number }) => {
    if (value >= thresholds.error) return 'text-red-500';
    if (value >= thresholds.warning) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getProgressColor = (value: number, thresholds: { warning: number; error: number }) => {
    if (value >= thresholds.error) return 'from-red-500 to-red-600';
    if (value >= thresholds.warning) return 'from-yellow-500 to-yellow-600';
    return 'from-green-500 to-green-600';
  };

  const getTrendIcon = (current: number, previous: number) => {
    const diff = current - previous;
    if (Math.abs(diff) < 1) return <Minus className="h-4 w-4 text-gray-500" />;
    if (diff > 0) return <TrendingUp className="h-4 w-4 text-red-500" />;
    return <TrendingDown className="h-4 w-4 text-green-500" />;
  };

  const MetricCard = ({ 
    title, 
    value, 
    unit, 
    icon, 
    thresholds,
    trend 
  }: {
    title: string;
    value: number;
    unit: string;
    icon: React.ReactNode;
    thresholds: { warning: number; error: number };
    trend?: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            {icon}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <div className="flex items-center space-x-2">
              <p className={`text-2xl font-bold ${getStatusColor(value, thresholds)}`}>
                {value.toFixed(1)}{unit}
              </p>
              {trend !== undefined && getTrendIcon(value, trend)}
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full bg-gradient-to-r ${getProgressColor(value, thresholds)} transition-all duration-500`}
          style={{ width: `${Math.min(100, value)}%` }}
        />
      </div>
      
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>0{unit}</span>
        <span>100{unit}</span>
      </div>
    </motion.div>
  );

  const AlertCard = ({ alert }: { alert: PerformanceAlert }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`p-4 rounded-lg border-l-4 ${
        alert.type === 'error' ? 'border-red-500 bg-red-50' :
        alert.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :
        'border-blue-500 bg-blue-50'
      }`}
    >
      <div className="flex items-start space-x-3">
        <div className={`p-1 rounded-full ${
          alert.type === 'error' ? 'bg-red-500' :
          alert.type === 'warning' ? 'bg-yellow-500' :
          'bg-blue-500'
        }`}>
          {alert.type === 'error' ? (
            <AlertTriangle className="h-4 w-4 text-white" />
          ) : (
            <CheckCircle className="h-4 w-4 text-white" />
          )}
        </div>
        <div className="flex-1">
          <p className="font-medium text-gray-900">{alert.title}</p>
          <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
          <p className="text-xs text-gray-500 mt-2">
            {alert.timestamp.toLocaleTimeString()}
          </p>
        </div>
      </div>
    </motion.div>
  );

  const previousMetrics = metrics.length > 1 ? metrics[metrics.length - 2] : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Performance Monitor</h2>
          <p className="text-gray-600">Real-time system performance and health metrics</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="1h">Last Hour</option>
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
          </select>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMonitoring(!isMonitoring)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              isMonitoring ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
            }`}
          >
            <RefreshCw className={`h-4 w-4 ${isMonitoring ? 'animate-spin' : ''}`} />
            <span>{isMonitoring ? 'Stop' : 'Start'} Monitoring</span>
          </motion.button>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">System Status</h3>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-600 font-medium">All Systems Operational</span>
          </div>
        </div>

        {/* Core Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {currentMetrics && (
            <>
              <MetricCard
                title="CPU Usage"
                value={currentMetrics.cpu}
                unit="%"
                icon={<Cpu className="h-5 w-5 text-blue-600" />}
                thresholds={{ warning: 70, error: 85 }}
                trend={previousMetrics?.cpu}
              />
              <MetricCard
                title="Memory Usage"
                value={currentMetrics.memory}
                unit="%"
                icon={<HardDrive className="h-5 w-5 text-blue-600" />}
                thresholds={{ warning: 75, error: 90 }}
                trend={previousMetrics?.memory}
              />
              <MetricCard
                title="Network I/O"
                value={currentMetrics.network}
                unit=" MB/s"
                icon={<Wifi className="h-5 w-5 text-blue-600" />}
                thresholds={{ warning: 80, error: 95 }}
                trend={previousMetrics?.network}
              />
              <MetricCard
                title="Response Time"
                value={currentMetrics.responseTime}
                unit="ms"
                icon={<Clock className="h-5 w-5 text-blue-600" />}
                thresholds={{ warning: 150, error: 300 }}
                trend={previousMetrics?.responseTime}
              />
            </>
          )}
        </div>

        {/* Revolutionary Features Performance */}
        <div className="border-t border-gray-200 pt-6">
          <h4 className="text-md font-medium text-gray-900 mb-4">Revolutionary Features Load</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentMetrics && (
              <>
                <MetricCard
                  title="AI Processing"
                  value={currentMetrics.aiProcessingLoad}
                  unit="%"
                  icon={<Zap className="h-5 w-5 text-purple-600" />}
                  thresholds={{ warning: 80, error: 95 }}
                  trend={previousMetrics?.aiProcessingLoad}
                />
                <MetricCard
                  title="Quantum Computing"
                  value={currentMetrics.quantumComputingLoad}
                  unit="%"
                  icon={<Server className="h-5 w-5 text-indigo-600" />}
                  thresholds={{ warning: 85, error: 98 }}
                  trend={previousMetrics?.quantumComputingLoad}
                />
                <MetricCard
                  title="Emotional AI"
                  value={currentMetrics.emotionalAILoad}
                  unit="%"
                  icon={<Activity className="h-5 w-5 text-pink-600" />}
                  thresholds={{ warning: 75, error: 90 }}
                  trend={previousMetrics?.emotionalAILoad}
                />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Performance Alerts */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Alerts</h3>
        <div className="space-y-4">
          {alerts.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <CheckCircle className="h-12 w-12 mx-auto mb-3 text-green-500" />
              <p>No performance alerts - All systems running optimally</p>
            </div>
          ) : (
            alerts.slice(0, 5).map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))
          )}
        </div>
      </div>

      {/* Key Performance Indicators */}
      {currentMetrics && (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Key Performance Indicators</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold">{currentMetrics.uptime.toFixed(2)}%</div>
              <p className="text-blue-100">System Uptime</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{currentMetrics.activeUsers.toLocaleString()}</div>
              <p className="text-blue-100">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{currentMetrics.throughput.toFixed(0)}</div>
              <p className="text-blue-100">Requests/sec</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{currentMetrics.errorRate.toFixed(2)}%</div>
              <p className="text-blue-100">Error Rate</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;