import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

export default function BrowserPage() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [url, setUrl] = useState('https://www.coze.com');
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigate = () => { setIsLoading(true); setTimeout(() => setIsLoading(false), 1500); };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#0F172A]">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1E293B]">
        <button onClick={() => navigate(-1)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <div className="flex-1 flex items-center bg-slate-100 dark:bg-slate-700 rounded-full px-3 py-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400 mr-2 flex-shrink-0"><rect width="20" height="20" x="2" y="2" rx="2" ry="2"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleNavigate()} className="flex-1 bg-transparent text-xs text-slate-700 dark:text-slate-200 focus:outline-none" />
        </div>
        <img src={theme === 'dark' ? '/assets/images/browser-dark.png' : '/assets/images/browser-light.png'} alt="Browser" className="w-7 h-7 object-contain" />
      </div>

      <div className="flex items-center justify-center gap-4 px-4 py-2 border-b border-slate-200 dark:border-slate-700">
        <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m15 18-6-6 6-6"/></svg></button>
        <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m9 18 6-6-6-6"/></svg></button>
        <button onClick={handleNavigate} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/><polyline points="21 3 21 9 15 9"/></svg></button>
      </div>

      <div className="flex-1 flex items-center justify-center bg-slate-50 dark:bg-[#0F172A]">
        {isLoading ? (
          <div className="flex flex-col items-center gap-4">
            <img src={theme === 'dark' ? '/assets/images/loading-dark.gif' : '/assets/images/loading-light.gif'} alt="Loading" className="w-20 h-20 object-contain" />
            <p className="text-sm text-slate-500 dark:text-slate-400">页面加载中...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 p-8 text-center">
            <img src={theme === 'dark' ? '/assets/images/browser-dark.png' : '/assets/images/browser-light.png'} alt="Browser" className="w-24 h-24 object-contain opacity-60" />
            <div><h3 className="text-base font-medium text-slate-700 dark:text-slate-200 mb-1">AI 浏览器</h3><p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">AI 驱动的智能网页浏览与摘要</p></div>
            <div className="mt-4 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl transition-colors">开始浏览</div>
          </div>
        )}
      </div>
    </div>
  );
}
