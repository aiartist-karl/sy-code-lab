interface EmptyStateProps {
  image?: string;
  title?: string;
  description?: string;
}

export default function EmptyState({
  image = '/assets/images/task-empty.png',
  title = '暂无内容',
  description = '开始创建你的第一个项目',
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6">
      <img src={image} alt="Empty" className="w-28 h-28 object-contain mb-4 opacity-70" />
      <h3 className="text-base font-medium text-slate-700 dark:text-slate-200 mb-1">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 text-center">{description}</p>
    </div>
  );
}
