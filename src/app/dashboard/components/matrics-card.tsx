'use client';

import { DollarSign, TrendingUp, Star, Users } from 'lucide-react';

const metrics = [
  {
    title: '$2,847',
    subtitle: 'Total Earnings (This Month)',
    icon: DollarSign,
    iconBg: 'from-green-500 to-emerald-600',
    change: '+18.2%',
    positive: true,
  },
  {
    title: '4.8',
    subtitle: 'Average Rating',
    icon: Star,
    iconBg: 'from-yellow-500 to-orange-600',
    change: '+0.3',
    positive: true,
  },
  {
    title: '156',
    subtitle: 'Gigs Completed',
    icon: Users,
    iconBg: 'from-blue-500 to-cyan-600',
    change: '+12',
    positive: true,
  },
];

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="group backdrop-blur-xl rounded-2xl p-6 shadow-sm border border-slate-700/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${metric.iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <div
                className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${
                  metric.positive
                    ? 'bg-green-900/50 text-green-400 border border-green-700/50'
                    : 'bg-red-900/50 text-red-400 border border-red-700/50'
                }`}
              >
                <TrendingUp className="w-3 h-3" />
                <span>{metric.change}</span>
              </div>
            </div>

            <div>
              <p className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{metric.title}</p>
              <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{metric.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
