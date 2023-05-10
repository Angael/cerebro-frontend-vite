// Maybe imporove speed of loading theme with this?
const darkTheme = localStorage.getItem('darkTheme');

const classList = document.documentElement.classList;
if (darkTheme === 'true' || !darkTheme) {
  classList.add('theme-dark');
  classList.remove('theme-light');
} else {
  classList.remove('theme-dark');
  classList.add('theme-light');
}

export {};
