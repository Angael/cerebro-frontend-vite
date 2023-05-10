import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';

export const useDarkTheme = (): [boolean, (newVal: boolean) => void] => {
  const [darkTheme, setDarkTheme] = useLocalStorage('darkTheme', true);

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    const classList = document.documentElement.classList;
    if (darkTheme) {
      classList.add('theme-dark');
      classList.remove('theme-light');
    } else {
      classList.remove('theme-dark');
      classList.add('theme-light');
    }
  }, [darkTheme]);

  return [darkTheme, toggleDarkTheme];
};
