import React from 'react';
import {
  LayoutDashboard,
  BrainCircuit,
  BarChart3,
  Users,
  Sparkles,
  HeartHandshake,
  Smile,
  Settings,
  Bot,
  Zap,
  Crown
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'ultra-premium', label: 'Ultra Premium AI', icon: Crown }, // New ultra premium option
    { id: 'ai-engine', label: 'AI Engine', icon: BrainCircuit },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'quantum-analytics', label: 'Quantum Analytics', icon: Bot },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'personalization', label: 'Personalization', icon: Sparkles },
    { id: 'sentiment', label: 'Sentiment', icon: Smile },
    { id: 'behavior', label: 'Behavior', icon: HeartHandshake },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white/10 backdrop-blur-sm border-r border-white/20 h-screen sticky top-16">
      <div className="p-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`ultra-premium-card flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 text-left ${
              activeSection === item.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'text-gray-300 hover:bg-white/20 hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5 mr-4" />
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="ultra-premium-card bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5" />
                <div className="font-bold text-lg">Wirecutter AI</div>
              </div>
              <p className="text-xs mt-1">Ultra Premium Enhancement</p>
              <p className="text-xs font-semibold mt-2">v2.0 Quantum Revolution</p>
          </div>
      </div>
    </aside>
  );
};

