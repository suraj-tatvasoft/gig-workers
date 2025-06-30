'use client';

import React, { useState } from 'react';

import { DashboardHeader } from '@/components/dashboard/header';
import { Sidebar } from '@/components/dashboard/sidebar';
import { MetricsCards } from './components/matrics-card';
import { AnalyticsChart } from './components/analytics-chart';
import { UserProfile } from './components/user-profile';
import { WeeklySummary } from './components/weekly-summary';

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <>
      <div className="min-h-screen flex w-full bg-foreground">
        <Sidebar collapsed={sidebarCollapsed} onToggle={(collapsed) => setSidebarCollapsed(collapsed)} />

        <div className={`flex-1 transition-all duration-300 w-full overflow-hidden ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
          <DashboardHeader collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

          <main className="p-3 pl-5 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
            <div className="animate-fade-in">
              <MetricsCards />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <AnalyticsChart />
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="space-y-3 sm:space-y-4">
                  <UserProfile />
                </div>
              </div>
            </div>

            <div className="animate-fade-in pb-4 sm:pb-6" style={{ animationDelay: '0.3s' }}>
              <WeeklySummary />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
