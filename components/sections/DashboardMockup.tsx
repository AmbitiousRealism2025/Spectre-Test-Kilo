import React from 'react';

export const DashboardMockup: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
      {/* Dashboard Grid Container */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 opacity-80">

        {/* Kanban Cards with Floating Animations */}
        <div className="glass-card p-4 rounded-lg border border-teal-500/20 dashboard-element hover-glow-teal" style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '0s' }}>
          <h3 className="text-xs font-semibold text-teal-300 mb-2">In Progress</h3>
          <div className="space-y-2">
            <div className="bg-purple-900/30 rounded p-2 text-xs">Feature Implementation</div>
            <div className="bg-purple-900/30 rounded p-2 text-xs">UI Design Review</div>
          </div>
        </div>

        <div className="glass-card p-4 rounded-lg border border-purple-500/20 dashboard-element hover-glow-purple" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '0.5s' }}>
          <h3 className="text-xs font-semibold text-purple-300 mb-2">Review</h3>
          <div className="space-y-2">
            <div className="bg-amber-900/30 rounded p-2 text-xs">Code Quality Check</div>
            <div className="bg-amber-900/30 rounded p-2 text-xs">User Testing</div>
          </div>
        </div>

        <div className="glass-card p-4 rounded-lg border border-amber-500/20 dashboard-element hover-glow-amber" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }}>
          <h3 className="text-xs font-semibold text-amber-300 mb-2">Done</h3>
          <div className="space-y-2">
            <div className="bg-teal-900/30 rounded p-2 text-xs">Architecture Finalized</div>
            <div className="bg-teal-900/30 rounded p-2 text-xs">Deployment Ready</div>
          </div>
        </div>

        {/* Line Chart with Floating Animation */}
        <div className="glass-card p-4 rounded-lg border border-teal-500/20 lg:col-span-2 dashboard-element hover-glow-teal" style={{ animation: 'float 9s ease-in-out infinite', animationDelay: '1.5s' }}>
          <h3 className="text-xs font-semibold text-teal-300 mb-4">Performance Metrics</h3>
          <svg className="w-full h-32" viewBox="0 0 300 100">
            <path
              d="M10 80 L50 60 L90 45 L130 30 L170 20 L210 15 L250 10 L290 5"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#0d9488' }} />
                <stop offset="100%" style={{ stopColor: '#7c3aed' }} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Bar Chart with Floating Animation */}
        <div className="glass-card p-4 rounded-lg border border-purple-500/20 dashboard-element hover-glow-purple" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '2s' }}>
          <h3 className="text-xs font-semibold text-purple-300 mb-4">Project Status</h3>
          <div className="flex items-end justify-between h-24 space-x-2">
            <div className="bg-purple-500/50 w-4 h-16 rounded-t"></div>
            <div className="bg-purple-500/50 w-4 h-20 rounded-t"></div>
            <div className="bg-purple-500/50 w-4 h-12 rounded-t"></div>
            <div className="bg-purple-500/50 w-4 h-24 rounded-t"></div>
            <div className="bg-purple-500/50 w-4 h-18 rounded-t"></div>
          </div>
        </div>

        {/* AI Chat Bubbles with Floating Animation */}
        <div className="glass-card p-4 rounded-lg border border-amber-500/20 lg:col-span-2 dashboard-element hover-glow-amber" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '2.5s' }}>
          <h3 className="text-xs font-semibold text-amber-300 mb-4">AI Assistant</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <svg className="w-4 h-4 text-amber-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="bg-amber-900/30 rounded-lg p-2 text-xs max-w-[200px]">
                Let me analyze your requirements and suggest an optimal architecture...
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <svg className="w-4 h-4 text-teal-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="bg-teal-900/30 rounded-lg p-2 text-xs max-w-[180px]">
                I will generate a component structure that balances innovation with practicality
              </div>
            </div>
          </div>
        </div>

        {/* Code Snippet with Floating Animation */}
        <div className="glass-card p-4 rounded-lg border border-teal-500/20 dashboard-element hover-glow-teal" style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '3s' }}>
          <h3 className="text-xs font-semibold text-teal-300 mb-3">Code Implementation</h3>
          <div className="bg-charcoal-800 rounded p-3 font-mono text-xs overflow-hidden">
            <div className="text-amber-400">function</div>
            <div className="text-teal-400 ml-2">buildSystem</div>
            <div className="text-white">(requirements)</div>
            <div className="text-white ml-2">{"{"}</div>
            <div className="text-purple-400 ml-4">return</div>
            <div className="text-white ml-6">{"{"}</div>
            <div className="text-amber-400 ml-8">architecture:</div>
            <div className="text-white ml-10">&rsquo;scalable&rsquo;</div>
            <div className="text-white ml-6">{"}"}</div>
            <div className="text-white">{"}"}</div>
          </div>
        </div>

        {/* A.I.R. Acronym Integration with Floating Animation */}
        <div className="glass-card p-4 rounded-lg border border-white/10 dashboard-element" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '3.5s' }}>
          <h3 className="text-xs font-semibold text-white mb-3">A.I.R. Framework</h3>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-teal-900/30 rounded p-2 text-center hover-glow-teal">Architect</div>
            <div className="bg-purple-900/30 rounded p-2 text-center hover-glow-purple">Implement</div>
            <div className="bg-amber-900/30 rounded p-2 text-xs text-center hover-glow-amber">Review</div>
          </div>
        </div>

      </div>
    </div>
  );
};