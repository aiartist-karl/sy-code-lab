import { useParams, useNavigate } from 'react-router-dom';
import { mockFiles } from '../../data/mockData';

const fileTypeIcons: Record<string, string> = {
  pdf: '/assets/images/pdf.png', excel: '/assets/images/excel.png', ppt: '/assets/images/ppt.png',
  image: '/assets/images/img.png', code: '/assets/images/code.png', text: '/assets/images/txt.png',
  video: '/assets/images/video.png', music: '/assets/images/music.png', unknown: '/assets/images/unknow.png',
};

export default function FilePreviewPage() {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const files = type ? mockFiles.filter(f => f.type === type) : mockFiles;

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#0F172A] overflow-y-auto">
      <div className="flex items-center px-3 py-2.5 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
        <button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 active:bg-slate-200 dark:active:bg-slate-600">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h1 className="ml-2 text-base font-semibold text-slate-800 dark:text-slate-100">
          {type ? `${type.toUpperCase()} 文件` : '全部文件'}
        </h1>
      </div>

      <div className="px-4 py-3 space-y-1.5">
        {files.map((file) => (
          <div key={file.id} className="flex items-center gap-3 p-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
            <img src={fileTypeIcons[file.type] || fileTypeIcons.unknown} alt={file.type} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
            <div className="flex-1 min-w-0"><h4 className="text-sm font-medium text-slate-800 dark:text-slate-100 truncate">{file.name}</h4><p className="text-xs text-slate-500 dark:text-slate-400">{file.size} · {file.modifiedAt}</p></div>
          </div>
        ))}
        {files.length === 0 && (
          <div className="flex flex-col items-center py-10">
            <img src="/assets/images/file-blank.png" alt="无文件" className="w-16 h-16 object-contain mb-3 opacity-60" />
            <p className="text-sm text-slate-500 dark:text-slate-400">暂无此类文件</p>
          </div>
        )}
      </div>

      <div className="px-4 pb-4 mt-auto flex-shrink-0">
        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">按类型浏览</h3>
        <div className="flex flex-wrap gap-1.5">
          {Object.keys(fileTypeIcons).map((t) => (
            <button key={t} onClick={() => navigate(`/file/${t}`)} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors active:scale-95 ${type === t ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
              <img src={fileTypeIcons[t]} alt={t} className="w-4 h-4" />{t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
