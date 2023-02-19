import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../store/auth/firebase';

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    logEvent(analytics, 'route_visit', { path: location.pathname });
    // analytics().logEvent('screen_view', { screen_name: hash.substring(1) });
  }, [location.pathname]);
};
