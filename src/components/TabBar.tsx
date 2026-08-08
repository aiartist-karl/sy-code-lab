import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const tabs = [
  { key: 'chat', label: 'Chat', path: '/home' },
  { key: 'explore', label: 'Explore', path: '/explore' },
  { key: 'me', label: 'Me', path: '/me' },
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
      <div className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1E293B] safe-bottom">
        <div className="flex justify-around items-center h-14 px-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => navigate(tab.path)}
                className="flex flex-col items-center justify-center gap-0.5 px-4 py-1 transition-colors"
              >
                <span className={`text-[11px] font-medium ${isActive ? 'text-indigo-600' : 'text-slate-400 dark:text-slate-500'}`}>
                  {tab.label}
                </span>
                <div className={`w-1 h-1 rounded-full ${isActive ? 'bg-indigo-600' : 'bg-transparent'}`} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
