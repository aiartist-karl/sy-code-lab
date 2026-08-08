import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashScreen() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      navigate('/home', { replace: true });
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`h-full w-full flex items-center justify-center ${show ? 'bg-[#F8FAFC] dark:bg-[#0F172A]' : 'bg-white dark:bg-[#0F172A]'} transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex flex-col items-center gap-6">
        <img src="/assets/images/splash.png" alt="SY Code Lab" className="w-48 h-48 object-contain rounded-2xl" />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">SY Code Lab</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Code. Create. Innovate.</p>
        </div>
      </div>
    </div>
  );
}
