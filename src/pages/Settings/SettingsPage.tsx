import { useTheme } from '../../hooks/useTheme';

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-white dark:bg-[#0F172A]">
      <div className="flex flex-col items-center pt-8 pb-6 px-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-700 flex items-center justify-center mb-3 ring-4 ring-indigo-100 dark:ring-indigo-900/50">
          <span className="text-2xl font-bold text-white">U</span>
        </div>
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">User</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">user@sycodelab.com</p>
      </div>

      <div className="px-4 space-y-1">
        <SettingItem icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>} label="Account Settings" subtitle="Manage your account info" />
        <SettingItem icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>} label="Appearance" subtitle="Theme and display" action={
          <button onClick={toggleTheme} className={`relative w-12 h-6 rounded-full transition-colors ${theme === 'dark' ? 'bg-indigo-600' : 'bg-slate-300'}`}>
            <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
        } />
        <SettingItem icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>} label="Notifications" subtitle="Push notifications and alerts" />
        <SettingItem icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>} label="Data & Storage" subtitle="Cache and download settings" />
        <SettingItem icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>} label="About" subtitle="SY Code Lab v1.0.0" />
        <button className="flex items-center justify-center w-full mt-6 py-3 rounded-xl border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-sm font-medium hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
          Sign Out
        </button>
      </div>
    </div>
  );
}

function SettingItem({ icon, label, subtitle, action }: { icon: React.ReactNode; label: string; subtitle: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
      <div className="text-slate-500 dark:text-slate-400">{icon}</div>
      <div className="flex-1 min-w-0"><p className="text-sm font-medium text-slate-800 dark:text-slate-100">{label}</p><p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p></div>
      {action || <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400"><path d="m9 18 6-6-6-6"/></svg>}
    </div>
  );
}
