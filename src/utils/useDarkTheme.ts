import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';

export const useDarkTheme = (): [boolean, (newVal: boolean) => void] => {
  const [darkTheme, setDarkTheme] = useLocalStorage('darkTheme', true);

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('theme-dark');
      document.body.classList.remove('theme-light');
    } else {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
    }
  }, [darkTheme]);

  return [darkTheme, toggleDarkTheme];
};
