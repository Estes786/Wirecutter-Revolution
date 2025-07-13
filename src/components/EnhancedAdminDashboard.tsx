import React, { useState } from 'react';
import { Header } from './Admin/Layout/Header';
import { Sidebar } from './Admin/Layout/Sidebar';
import { MainDashboard } from './Admin/Dashboard/MainDashboard';
import { QuantumAnalytics } from './Admin/QuantumAnalytics';
import UltraPremiumAdminDashboard from './UltraPremiumAdminDashboard';

const EnhancedAdminDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <MainDashboard />;
      case 'quantum-analytics':
        return <QuantumAnalytics />;
      case 'ultra-premium': // New ultra premium dashboard
        return <UltraPremiumAdminDashboard />;
      case 'ai-engine':
        return <div className="text-center py-20"><h2 className="text-2xl font-bold">AI Engine</h2></div>;
      case 'analytics':
        return <div className="text-center py-20"><h2 className="text-2xl font-bold">Analytics</h2></div>;
      case 'users':
        return <div className="text-center py-20"><h2 className="text-2xl font-bold">Users</h2></div>;
      default:
        return <MainDashboard />;
    }
  };

  return (
    <div className="ultra-premium-container min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default EnhancedAdminDashboard;

