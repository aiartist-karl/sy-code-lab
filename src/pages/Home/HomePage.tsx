import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { mockAgents } from '../../data/mockData';
import type { Agent } from '../../types';

export default function HomePage() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <img
          src={theme === 'dark' ? '/assets/images/home-logo-dark.png' : '/assets/images/home-logo-light.png'}
          alt="SY Code Lab" className="h-8 object-contain"
        />
        <button onClick={() => navigate('/explore')} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
      </div>

      <div className="px-4 py-4">
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">推荐智能体</h2>
        <div className="grid grid-cols-2 gap-3">
          {mockAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} onClick={() => navigate(`/agent/${agent.id}`)} />
          ))}
        </div>
      </div>

      <div className="px-4 py-4">
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">快捷操作</h2>
        <div className="flex flex-col gap-2">
          <button onClick={() => navigate('/browser')} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 text-left">
            <img src={theme === 'dark' ? '/assets/images/browser-dark.png' : '/assets/images/browser-light.png'} alt="Browser" className="w-10 h-10 rounded-lg object-cover" />
            <div><h3 className="text-sm font-medium text-slate-800 dark:text-slate-100">浏览器</h3><p className="text-xs text-slate-500 dark:text-slate-400">AI 智能网页浏览</p></div>
          </button>
          <button onClick={() => navigate('/file/pdf')} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 text-left">
            <img src="/assets/images/pdf.png" alt="Files" className="w-10 h-10 rounded-lg object-cover" />
            <div><h3 className="text-sm font-medium text-slate-800 dark:text-slate-100">文件预览</h3><p className="text-xs text-slate-500 dark:text-slate-400">预览文档和文件</p></div>
          </button>
        </div>
      </div>
    </div>
  );
}

function AgentCard({ agent, onClick }: { agent: Agent; onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex flex-col p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all text-left">
      <div className="flex items-start gap-2.5 mb-2">
        <img src={agent.avatar} alt={agent.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">{agent.name}</h3>
          <span className="text-[10px] text-indigo-600 dark:text-indigo-400">{agent.category}</span>
        </div>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-2">{agent.description}</p>
      <div className="flex items-center gap-1 mt-auto">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <span className="text-[10px] text-slate-400">{agent.conversationCount.toLocaleString()} 次对话</span>
      </div>
    </button>
  );
}
