import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashScreen() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => navigate('/home'), 600);
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`flex flex-col items-center justify-center h-full bg-gradient-to-br from-indigo-600 to-purple-700 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <img src="/assets/icons/icon-512.png" alt="SY Code Lab" className="w-24 h-24 rounded-3xl mb-4 shadow-2xl" />
      <h1 className="text-3xl font-bold text-white tracking-tight">SY Code Lab</h1>
      <p className="mt-2 text-indigo-200 text-sm">代码 · 创造 · 创新</p>
      <div className="mt-8">
        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      </div>
    </div>
  );
}
