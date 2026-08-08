import { useTheme } from '../hooks/useTheme';

interface LoadingAnimationProps {
  type?: 'loading' | 'answer';
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = { sm: 'w-8 h-8', md: 'w-16 h-16', lg: 'w-24 h-24' };

export default function LoadingAnimation({ type = 'answer', size = 'md' }: LoadingAnimationProps) {
  const { theme } = useTheme();
  const src = type === 'loading'
    ? (theme === 'dark' ? '/assets/images/loading-dark.gif' : '/assets/images/loading-light.gif')
    : (theme === 'dark' ? '/assets/images/answer-loading-dark.gif' : '/assets/images/answer-loading-light.gif');
  return <img src={src} alt="Loading" className={`${sizeMap[size]} object-contain`} />;
}
