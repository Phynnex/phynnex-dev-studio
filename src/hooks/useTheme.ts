import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

/**
 * Hook to manage light/dark theme.
 * Reads initial value from localStorage and toggles the `dark` class
 * on the document root element.
 */
const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', nextTheme === 'dark');
      localStorage.setItem('theme', nextTheme);
    }
  };

  return [theme, toggleTheme];
};

export default useTheme;
