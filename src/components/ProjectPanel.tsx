import { useState } from 'react';

interface ProjectFile {
  id: string;
  name: string;
  type: 'image' | 'document' | 'video' | 'audio' | 'code' | 'other';
  size: string;
  modifiedAt: string;
  conversationId: string;
}

const categories = [
  { key: 'all', label: '全部', icon: (active: boolean) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  )},
  { key: 'image', label: '图片', icon: (active: boolean) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
      <path d="m21 15-5-5L5 21"/>
    </svg>
  )},
  { key: 'document', label: '文档', icon: (active: boolean) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  )},
  { key: 'video', label: '视频', icon: (active: boolean) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
    </svg>
  )},
  { key: 'audio', label: '音频', icon: (active: boolean) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
    </svg>
  )},
  { key: 'code', label: '代码', icon: (active: boolean) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  )},
];

const mockProjectFiles: ProjectFile[] = [
  { id: 'pf-1', name: '产品原型.png', type: 'image', size: '2.4 MB', modifiedAt: '今天 14:30', conversationId: 'conv-1' },
  { id: 'pf-2', name: '需求文档.pdf', type: 'document', size: '1.8 MB', modifiedAt: '今天 13:20', conversationId: 'conv-1' },
  { id: 'pf-3', name: '数据分析.xlsx', type: 'document', size: '856 KB', modifiedAt: '昨天 16:45', conversationId: 'conv-1' },
  { id: 'pf-4', name: '演示截图.jpg', type: 'image', size: '3.1 MB', modifiedAt: '昨天 10:20', conversationId: 'conv-1' },
  { id: 'pf-5', name: '架构设计.png', type: 'image', size: '1.5 MB', modifiedAt: '3天前', conversationId: 'conv-1' },
  { id: 'pf-6', name: '接口文档.md', type: 'code', size: '12 KB', modifiedAt: '3天前', conversationId: 'conv-1' },
  { id: 'pf-7', name: '演示视频.mp4', type: 'video', size: '48 MB', modifiedAt: '5天前', conversationId: 'conv-1' },
  { id: 'pf-8', name: '会议录音.mp3', type: 'audio', size: '15 MB', modifiedAt: '1周前', conversationId: 'conv-1' },
  { id: 'pf-9', name: '测试报告.pdf', type: 'document', size: '2.1 MB', modifiedAt: '1周前', conversationId: 'conv-1' },
  { id: 'pf-10', name: 'UI素材包.png', type: 'image', size: '5.6 MB', modifiedAt: '2周前', conversationId: 'conv-1' },
];

function getFileIcon(type: ProjectFile['type']) {
  switch (type) {
    case 'image': return {
      bg: 'bg-emerald-100 dark:bg-emerald-900/40',
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-emerald-600 dark:text-emerald-400"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>,
    };
    case 'document': return {
      bg: 'bg-blue-100 dark:bg-blue-900/40',
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-600 dark:text-blue-400"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    };
    case 'video': return {
      bg: 'bg-purple-100 dark:bg-purple-900/40',
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-purple-600 dark:text-purple-400"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
    };
    case 'audio': return {
      bg: 'bg-orange-100 dark:bg-orange-900/40',
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-orange-600 dark:text-orange-400"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
    };
    case 'code': return {
      bg: 'bg-cyan-100 dark:bg-cyan-900/40',
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-cyan-600 dark:text-cyan-400"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    };
    default: return {
      bg: 'bg-slate-100 dark:bg-slate-700',
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-slate-500"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>,
    };
  }
}

interface Props {
  onClose: () => void;
  conversationId: string;
}

export default function ProjectPanel({ onClose, conversationId }: Props) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [files] = useState<ProjectFile[]>(mockProjectFiles.map(f => ({ ...f, conversationId })));
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFiles = files.filter(f => {
    const matchCategory = activeCategory === 'all' || f.type === activeCategory;
    const matchSearch = !searchQuery || f.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const getCategoryCount = (key: string) => {
    if (key === 'all') return files.length;
    return files.filter(f => f.type === key).length;
  };

  return (
    <div className="absolute inset-0 z-40 flex flex-col bg-white dark:bg-[#0F172A] animate-slide-up">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
        <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 active:bg-slate-200 dark:active:bg-slate-600">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m18 6-12 12"/><path d="m6 6 12 12"/></svg>
        </button>
        <div className="flex-1 min-w-0">
          <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-100">项目管理</h2>
          <p className="text-[10px] text-slate-400">{files.length} 个文件</p>
        </div>
        <button className="p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        </button>
      </div>

      {/* Search */}
      <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-700/50 flex-shrink-0">
        <div className="relative">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索文件..."
            className="w-full bg-slate-100 dark:bg-slate-800 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-1 px-3 py-2 overflow-x-auto flex-shrink-0 no-scrollbar">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          const count = getCategoryCount(cat.key);
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.icon(isActive)}
              {cat.label}
              <span className={`text-[10px] ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* File List */}
      <div className="flex-1 overflow-y-auto px-3 py-2">
        {filteredFiles.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-slate-400">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="mb-3 opacity-40">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
            <p className="text-sm font-medium">暂无文件</p>
            <p className="text-xs mt-1">点击上方按钮上传文件</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {filteredFiles.map((file) => {
              const icon = getFileIcon(file.type);
              return (
                <div
                  key={file.id}
                  className="flex flex-col p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 active:scale-[0.98] transition-transform"
                >
                  <div className="flex items-start gap-2.5">
                    <div className={`w-9 h-9 rounded-lg ${icon.bg} flex items-center justify-center flex-shrink-0`}>
                      {icon.svg}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-slate-800 dark:text-slate-100 truncate">{file.name}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{file.size} · {file.modifiedAt}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
