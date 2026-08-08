export default function EmptyState({ message = '暂无内容' }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <img src="/assets/images/task-empty.png" alt="空状态" className="w-20 h-20 object-contain mb-3 opacity-60" />
      <p className="text-sm text-slate-500 dark:text-slate-400">{message}</p>
    </div>
  );
}
