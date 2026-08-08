export default function ErrorState({ onRetry, message = '出错了' }: { onRetry?: () => void; message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-3">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-500"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300 font-medium mb-1">{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="mt-2 px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 active:bg-indigo-800 transition-colors">
          重试
        </button>
      )}
    </div>
  );
}
