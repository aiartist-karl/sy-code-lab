import { useParams, useNavigate } from 'react-router-dom';
import { mockAgents } from '../../data/mockData';

export default function AgentDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const agent = mockAgents.find(a => a.id === id) || mockAgents[0];

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#0F172A] overflow-y-auto">
      <div className="flex items-center px-3 py-2.5 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
        <button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 active:bg-slate-200 dark:active:bg-slate-600">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h1 className="ml-2 text-base font-semibold text-slate-800 dark:text-slate-100">智能体详情</h1>
      </div>

      <div className="flex flex-col items-center px-5 pt-6 pb-4">
        <img src={agent.avatar} alt={agent.name} className="w-20 h-20 rounded-full object-cover mb-3 ring-4 ring-indigo-100 dark:ring-indigo-900" />
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">{agent.name}</h2>
        <span className="mt-1 px-3 py-0.5 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-full">{agent.category}</span>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 text-center leading-relaxed px-4">{agent.description}</p>
        <div className="flex items-center gap-5 mt-4">
          <div className="text-center"><p className="text-lg font-bold text-slate-800 dark:text-slate-100">{agent.conversationCount.toLocaleString()}</p><p className="text-[11px] text-slate-500 dark:text-slate-400">对话数</p></div>
          <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
          <div className="text-center"><p className="text-lg font-bold text-slate-800 dark:text-slate-100">4.8</p><p className="text-[11px] text-slate-500 dark:text-slate-400">评分</p></div>
          <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
          <div className="text-center"><p className="text-lg font-bold text-slate-800 dark:text-slate-100">免费</p><p className="text-[11px] text-slate-500 dark:text-slate-400">价格</p></div>
        </div>
      </div>

      <div className="px-5 mt-2">
        <button onClick={() => navigate(`/chat/${agent.id}`)} className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold rounded-xl transition-colors text-sm">
          开始对话
        </button>
      </div>

      <div className="px-5 mt-5 pb-6">
        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">创建者</h3>
        <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
          <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
            <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">SY</span>
          </div>
          <div><p className="text-sm font-medium text-slate-800 dark:text-slate-100">SY Code Lab Official</p><p className="text-xs text-slate-500 dark:text-slate-400">认证创作者</p></div>
        </div>
      </div>
    </div>
  );
}
