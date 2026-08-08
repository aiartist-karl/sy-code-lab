import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockSearchResults, hotTopics } from '../../data/mockData';

export default function SearchPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(mockSearchResults);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim()) {
      setResults(mockSearchResults.filter(r => r.title.toLowerCase().includes(value.toLowerCase()) || r.description.toLowerCase().includes(value.toLowerCase())));
    } else {
      setResults(mockSearchResults);
    }
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="px-4 pt-3 pb-2 flex-shrink-0">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input type="text" value={query} onChange={(e) => handleSearch(e.target.value)} placeholder="搜索智能体、工具..." className="w-full bg-slate-100 dark:bg-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
      </div>

      <div className="px-4 py-2">
        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">热门话题</h3>
        <div className="flex flex-wrap gap-1.5">
          {hotTopics.map((topic) => (
            <button key={topic} onClick={() => handleSearch(topic)} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 active:bg-indigo-200 dark:active:bg-indigo-800 transition-colors">
              {topic}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-2 pb-4">
        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">{query ? '搜索结果' : '热门智能体'}</h3>
        <div className="space-y-1.5">
          {results.map((result) => (
            <button key={result.id} onClick={() => navigate('/chat/agent-1')} className="flex items-center gap-3 w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800 active:bg-slate-100 dark:active:bg-slate-700 transition-all text-left">
              <img src={result.icon} alt={result.title} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0"><h4 className="text-sm font-medium text-slate-800 dark:text-slate-100 truncate">{result.title}</h4><p className="text-xs text-slate-500 dark:text-slate-400 truncate">{result.description}</p></div>
              <span className="text-[10px] px-2 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full flex-shrink-0">{result.category}</span>
            </button>
          ))}
          {results.length === 0 && (
            <div className="flex flex-col items-center py-8">
              <img src="/assets/images/task-empty.png" alt="无结果" className="w-20 h-20 object-contain mb-3 opacity-60" />
              <p className="text-sm text-slate-500 dark:text-slate-400">未找到相关内容</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
