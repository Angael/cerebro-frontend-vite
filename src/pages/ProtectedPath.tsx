import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../store/auth/authStore';
import CircleLoader from '../styled/loaders/CircleLoader';

type Props = {
  children: React.ReactNode;
  redirect?: string;
};

const ProtectedPath = ({ children, redirect = '/login' }: Props) => {
  const { state } = useAuth();
  const location = useLocation();

  if (state === 'wait') {
    return <CircleLoader isOverlay />;
  }

  if (state === 'loggedOut') {
    return <Navigate to={redirect} state={{ from: location }} replace />;
  }

  // Slight lie, but it's fine
  return children as React.ReactElement;
};

export default ProtectedPath;
