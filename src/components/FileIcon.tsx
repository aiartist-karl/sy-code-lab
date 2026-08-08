interface FileIconProps {
  type: string;
  size?: 'sm' | 'md' | 'lg';
}

const iconMap: Record<string, string> = {
  pdf: '/assets/images/pdf.png', excel: '/assets/images/excel.png', ppt: '/assets/images/ppt.png',
  image: '/assets/images/img.png', code: '/assets/images/code.png', jsx: '/assets/images/jsx.png',
  text: '/assets/images/txt.png', markdown: '/assets/images/md.png',
  video: '/assets/images/video.png', music: '/assets/images/music.png',
  blank: '/assets/images/file-blank.png', unknown: '/assets/images/unknow.png',
};
const sizeMap = { sm: 'w-6 h-6', md: 'w-10 h-10', lg: 'w-14 h-14' };

export default function FileIcon({ type, size = 'md' }: FileIconProps) {
  return <img src={iconMap[type] || iconMap.unknown} alt={type} className={`${sizeMap[size]} object-contain rounded-lg`} />;
}
