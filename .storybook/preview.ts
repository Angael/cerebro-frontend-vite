import type { Preview } from '@storybook/react';
import '../src/style/global.scss';
import 'primereact/resources/primereact.min.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      current: 'dark',
      darkClass: 'theme-dark',
      lightClass: 'theme-light',
      classTarget: 'body',
      stylePreview: true,
    },
  },
};

export default preview;
