interface ErrorStateProps {
  type?: 'network' | 'server' | 'general';
  onRetry?: () => void;
}

export default function ErrorState({ type = 'network', onRetry }: ErrorStateProps) {
  const images = {
    network: '/assets/images/network-disconnected.png',
    server: '/assets/images/server-error.png',
    general: '/assets/images/network-disconnected.png',
  };
  const titles = {
    network: '网络错误',
    server: '服务器错误',
    general: '出错了',
  };
  const descs = {
    network: '请检查网络连接后重试',
    server: '服务器遇到问题，请稍后再试',
    general: '发生了意外错误',
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-6">
      <img src={images[type]} alt={type} className="w-28 h-28 object-contain mb-4 opacity-70" />
      <h3 className="text-base font-medium text-slate-700 dark:text-slate-200 mb-1">{titles[type]}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 text-center mb-4">{descs[type]}</p>
      {onRetry && (
        <button onClick={onRetry} className="px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-colors">
          Retry
        </button>
      )}
    </div>
  );
}
