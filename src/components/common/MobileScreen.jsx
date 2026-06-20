'use client';

import { useState, useEffect } from 'react';

export default function NorthStarPhoneMockup() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [isDark, setIsDark] = useState(true);
  const [time, setTime] = useState('9:41');
  const [expandedDeal, setExpandedDeal] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(
        `${now.getHours().toString().padStart(2, '0')}:${now
          .getMinutes()
          .toString()
          .padStart(2, '0')}`
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const metrics = [
    { label: 'ARR', value: '$8.6M', change: '+24%', trend: 'up' },
    { label: 'Growth', value: '4.8x', change: '+12%', trend: 'up' },
    { label: 'Churn', value: '2.1%', change: '-0.4%', trend: 'down' },
    { label: 'NRR', value: '142%', change: '+8%', trend: 'up' },
  ];

  const deals = [
    { name: 'Linear', stage: 'Proposal', value: '$240K', prob: 78 },
    { name: 'Vercel', stage: 'Negotiation', value: '$180K', prob: 85 },
    { name: 'Retool', stage: 'Discovery', value: '$95K', prob: 42 },
    { name: 'Notion', stage: 'Closed Won', value: '$320K', prob: 100 },
  ];

  const chartData = [32, 45, 38, 52, 61, 58, 72, 68, 85, 79, 92, 96];
  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

  const bg = isDark ? 'bg-black' : 'bg-white';
  const textPrimary = isDark ? 'text-white' : 'text-black';
  const textSecondary = isDark ? 'text-neutral-400' : 'text-neutral-500';
  const borderColor = isDark ? 'border-neutral-800' : 'border-neutral-200';
  const cardBg = isDark ? 'bg-neutral-900' : 'bg-neutral-50';

  return (
    <div className="flex items-center justify-center p-8 bg-gradient-to-br from-neutral-100 to-neutral-200 min-h-screen">
      {/* Phone Frame */}
      <div className="relative">
        {/* Phone outer frame */}
        <div className="relative w-[320px] h-[640px] bg-neutral-900 rounded-[48px] p-3 shadow-2xl shadow-black/40 ring-1 ring-neutral-800">
          {/* Side buttons */}
          <div className="absolute -left-[3px] top-24 w-[3px] h-12 bg-neutral-800 rounded-l" />
          <div className="absolute -left-[3px] top-40 w-[3px] h-16 bg-neutral-800 rounded-l" />
          <div className="absolute -right-[3px] top-32 w-[3px] h-20 bg-neutral-800 rounded-r" />

          {/* Screen */}
          <div className={`relative w-full h-full ${bg} rounded-[40px] overflow-hidden`}>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-50 flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 bg-neutral-700 rounded-full" />
              <div className="w-8 h-1.5 bg-neutral-800 rounded-full" />
            </div>

            {/* Status Bar */}
            <div className={`relative z-40 flex items-center justify-between px-6 pt-3 pb-2 text-xs font-semibold ${textPrimary}`}>
              <span>{time}</span>
              <div className="flex items-center gap-1">
                <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor">
                  <rect x="0" y="6" width="3" height="4" rx="0.5" />
                  <rect x="4" y="4" width="3" height="6" rx="0.5" />
                  <rect x="8" y="2" width="3" height="8" rx="0.5" />
                  <rect x="12" y="0" width="3" height="10" rx="0.5" opacity="0.3" />
                </svg>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
                  <path d="M7 2C9.5 2 11.7 3 13.3 4.5L12 5.8C10.8 4.7 9 4 7 4C5 4 3.2 4.7 2 5.8L0.7 4.5C2.3 3 4.5 2 7 2Z" />
                  <path d="M7 5C8.6 5 10 5.6 11.1 6.5L10 7.6C9.3 7.1 8.2 6.7 7 6.7C5.8 6.7 4.7 7.1 4 7.6L2.9 6.5C4 5.6 5.4 5 7 5Z" />
                  <circle cx="7" cy="9" r="1" />
                </svg>
                <div className="flex items-center gap-0.5 ml-1">
                  <div className="w-5 h-2.5 border border-current rounded-sm p-[1px]">
                    <div className="h-full w-[80%] bg-current rounded-[1px]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="h-[calc(100%-88px)] overflow-y-auto pb-4">
              {/* App Header */}
              <div className={`px-5 pt-2 pb-4 border-b ${borderColor}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-amber-400 rounded-md flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="black">
                        <path d="M6 0L7 5L12 6L7 7L6 12L5 7L0 6L5 5L6 0Z" />
                      </svg>
                    </div>
                    <span className={`font-bold text-sm tracking-tight ${textPrimary}`}>
                      Northstar
                    </span>
                  </div>
                  <button
                    onClick={() => setIsDark(!isDark)}
                    className={`w-7 h-7 rounded-full ${cardBg} flex items-center justify-center transition-all hover:scale-110`}
                  >
                    {isDark ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400">
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-700">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Tab Navigation */}
                <div className={`flex gap-1 p-1 ${cardBg} rounded-lg`}>
                  {['overview', 'metrics', 'pipeline'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-1.5 text-[10px] font-semibold uppercase tracking-wider rounded-md transition-all ${
                        activeTab === tab
                          ? 'bg-amber-400 text-black'
                          : `${textSecondary} hover:${textPrimary}`
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="px-5 pt-4">
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    {/* Main Metric Card */}
                    <div className={`${cardBg} rounded-2xl p-4 border ${borderColor}`}>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[10px] uppercase tracking-wider font-semibold ${textSecondary}`}>
                          Revenue / 수익
                        </span>
                        <span className="text-[10px] text-emerald-400 font-semibold">
                          +24%
                        </span>
                      </div>
                      <div className={`text-3xl font-bold ${textPrimary} mb-1`}>
                        $8.6M
                      </div>
                      <div className={`text-[10px] ${textSecondary}`}>
                        Annual Recurring Revenue
                      </div>

                      {/* Chart */}
                      <div className="mt-4 h-24 flex items-end gap-1">
                        {chartData.map((val, idx) => (
                          <div
                            key={idx}
                            className="flex-1 group relative"
                            style={{ height: `${val}%` }}
                          >
                            <div
                              className={`w-full h-full rounded-sm transition-all hover:opacity-80 ${
                                idx === chartData.length - 1
                                  ? 'bg-amber-400'
                                  : isDark
                                  ? 'bg-neutral-700'
                                  : 'bg-neutral-300'
                              }`}
                            />
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              ${((val / 100) * 8.6).toFixed(1)}M
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-1">
                        {months.map((m, idx) => (
                          <span
                            key={idx}
                            className={`flex-1 text-center text-[8px] ${textSecondary}`}
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: 'Velocity', value: '4.8x', icon: '⚡' },
                        { label: 'Retention', value: '91%', icon: '◎' },
                      ].map((stat, idx) => (
                        <div
                          key={idx}
                          className={`${cardBg} rounded-xl p-3 border ${borderColor} cursor-pointer hover:border-amber-400 transition-all`}
                        >
                          <div className="text-lg mb-1">{stat.icon}</div>
                          <div className={`text-lg font-bold ${textPrimary}`}>
                            {stat.value}
                          </div>
                          <div className={`text-[9px] uppercase tracking-wider ${textSecondary}`}>
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Alert Banner */}
                    <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl p-3 flex items-center gap-2">
                      <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-[10px] font-semibold ${textPrimary}`}>
                          3 deals need attention
                        </div>
                        <div className={`text-[9px] ${textSecondary}`}>
                          Tap to review pipeline
                        </div>
                      </div>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={textSecondary}>
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                )}

                {activeTab === 'metrics' && (
                  <div className="space-y-2">
                    {metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        onClick={() =>
                          setSelectedMetric(selectedMetric === idx ? null : idx)
                        }
                        className={`${cardBg} rounded-xl p-3 border ${borderColor} cursor-pointer transition-all ${
                          selectedMetric === idx
                            ? 'border-amber-400 ring-1 ring-amber-400/30'
                            : 'hover:border-neutral-600'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className={`text-[10px] uppercase tracking-wider font-semibold ${textSecondary}`}>
                              {metric.label}
                            </div>
                            <div className={`text-2xl font-bold ${textPrimary}`}>
                              {metric.value}
                            </div>
                          </div>
                          <div className="text-right">
                            <div
                              className={`text-xs font-semibold ${
                                metric.trend === 'up'
                                  ? 'text-emerald-400'
                                  : 'text-red-400'
                              }`}
                            >
                              {metric.change}
                            </div>
                            <div className={`text-[9px] ${textSecondary}`}>
                              vs last month
                            </div>
                          </div>
                        </div>

                        {selectedMetric === idx && (
                          <div className={`mt-3 pt-3 border-t ${borderColor}`}>
                            <div className="flex gap-1 h-8 items-end">
                              {[40, 55, 45, 60, 70, 65, 80].map((v, i) => (
                                <div
                                  key={i}
                                  className="flex-1 bg-amber-400 rounded-sm"
                                  style={{ height: `${v}%` }}
                                />
                              ))}
                            </div>
                            <div className={`text-[9px] ${textSecondary} mt-2`}>
                              7-day trend · Updated 2m ago
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'pipeline' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] uppercase tracking-wider font-semibold ${textSecondary}`}>
                        Active Deals
                      </span>
                      <span className="text-[10px] text-amber-400 font-semibold">
                        {deals.length} total
                      </span>
                    </div>
                    {deals.map((deal, idx) => (
                      <div
                        key={idx}
                        onClick={() =>
                          setExpandedDeal(expandedDeal === idx ? null : idx)
                        }
                        className={`${cardBg} rounded-xl p-3 border ${borderColor} cursor-pointer transition-all ${
                          expandedDeal === idx
                            ? 'border-amber-400'
                            : 'hover:border-neutral-600'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-xs">
                            {deal.name[0]}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`text-xs font-semibold ${textPrimary}`}>
                              {deal.name}
                            </div>
                            <div className={`text-[9px] ${textSecondary}`}>
                              {deal.stage}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`text-xs font-bold ${textPrimary}`}>
                              {deal.value}
                            </div>
                            <div className="flex items-center gap-1">
                              <div className={`w-12 h-1 rounded-full ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'} overflow-hidden`}>
                                <div
                                  className="h-full bg-amber-400 rounded-full"
                                  style={{ width: `${deal.prob}%` }}
                                />
                              </div>
                              <span className={`text-[9px] ${textSecondary}`}>
                                {deal.prob}%
                              </span>
                            </div>
                          </div>
                        </div>

                        {expandedDeal === idx && (
                          <div className={`mt-3 pt-3 border-t ${borderColor} space-y-2`}>
                            <div className="flex justify-between">
                              <span className={`text-[9px] ${textSecondary}`}>
                                Expected close
                              </span>
                              <span className={`text-[9px] font-semibold ${textPrimary}`}>
                                Q3 2026
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className={`text-[9px] ${textSecondary}`}>
                                Decision maker
                              </span>
                              <span className={`text-[9px] font-semibold ${textPrimary}`}>
                                VP Revenue
                              </span>
                            </div>
                            <button className="w-full mt-2 py-1.5 bg-amber-400 text-black text-[10px] font-bold uppercase tracking-wider rounded-lg hover:bg-amber-300 transition-colors">
                              View Details
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Nav */}
            <div className={`absolute bottom-0 left-0 right-0 ${bg} border-t ${borderColor} px-6 py-2 pb-6`}>
              <div className="flex items-center justify-around">
                {[
                  { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', label: 'Home', active: true },
                  { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', label: 'Analytics', active: false },
                  { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: 'History', active: false },
                  { icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z', label: 'Settings', active: false },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    className={`flex flex-col items-center gap-1 transition-colors ${
                      item.active ? 'text-amber-400' : textSecondary
                    }`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                    <span className="text-[8px] font-semibold">{item.label}</span>
                  </button>
                ))}
              </div>
              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-neutral-700 rounded-full" />
            </div>
          </div>
        </div>

        {/* Floating badges around phone */}
        <div className="absolute -top-4 -right-4 bg-black text-white px-3 py-1.5 rounded-full text-[10px] font-semibold shadow-lg flex items-center gap-1.5 animate-pulse">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
          Live sync
        </div>

        <div className="absolute -bottom-2 -left-6 bg-white text-black px-3 py-1.5 rounded-full text-[10px] font-semibold shadow-lg flex items-center gap-1.5">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 13l4 4L19 7" />
          </svg>
          4.8x velocity
        </div>
      </div>
    </div>
  );
}
