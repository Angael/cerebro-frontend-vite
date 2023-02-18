import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './pages/Router';
import { BrowserRouter } from 'react-router-dom';

export const queryClient = new QueryClient();

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
