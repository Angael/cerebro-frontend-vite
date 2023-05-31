import { QueryClientProvider } from '@tanstack/react-query';
import Router from './pages/Router';
import { BrowserRouter } from 'react-router-dom';
import { queryClient } from './api/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
