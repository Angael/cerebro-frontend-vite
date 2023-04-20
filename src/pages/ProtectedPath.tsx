import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/auth/authStore';
import CircleLoader from '../styled/loaders/CircleLoader';

type Props = {
  children: React.ReactNode;
};

const ProtectedPath = ({ children }: Props) => {
  let { state } = useAuthStore();
  let location = useLocation();

  if (state === 'wait') {
    return <CircleLoader isOverlay />;
  }

  if (state === 'loggedOut') {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedPath;
