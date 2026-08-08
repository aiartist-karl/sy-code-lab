import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const tabs = [
  { key: 'chat', label: '对话', path: '/home', icon: (active: boolean) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  )},
  { key: 'explore', label: '发现', path: '/explore', icon: (active: boolean) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
  )},
  { key: 'me', label: '我的', path: '/me', icon: (active: boolean) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  )},
];

export default function TabLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = () => {
    if (location.pathname.startsWith('/home')) return 'chat';
    if (location.pathname.startsWith('/explore') || location.pathname.startsWith('/search')) return 'explore';
    if (location.pathname.startsWith('/me') || location.pathname.startsWith('/settings')) return 'me';
    return 'chat';
  };

  const activeTab = getActiveTab();

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#0F172A]">
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
      <div className="border-t border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-[#1E293B]/95 backdrop-blur-lg safe-bottom">
        <div className="flex justify-around items-center h-14 px-4 max-w-lg mx-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => navigate(tab.path)}
                className={`flex flex-col items-center justify-center gap-0.5 px-5 py-1 transition-colors ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}`}
              >
                {tab.icon(isActive)}
                <span className={`text-[10px] font-medium ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
