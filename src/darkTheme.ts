// Maybe imporove speed of loading theme with this?
const darkTheme = localStorage.getItem('darkTheme');

if (darkTheme === 'true' || !darkTheme) {
  document.body.classList.add('theme-dark');
  document.body.classList.remove('theme-light');
} else {
  document.body.classList.remove('theme-dark');
  document.body.classList.add('theme-light');
}

export {};
