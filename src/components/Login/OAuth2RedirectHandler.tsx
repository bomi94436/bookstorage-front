import { Navigate } from 'react-router-dom';
import React from 'react';
import QueryString from 'qs';

const OAuth2RedirectHandler = () => {
  const { token, error } = QueryString.parse(window.location.search, { ignoreQueryPrefix: true });

  if (token) {
    localStorage.setItem('accessToken', token as string);
    return <Navigate to={{ pathname: '/' }} state={{ from: window.location }} />;
  } else {
    return <Navigate to={{ pathname: '/' }} state={{ from: window.location, error: error }} />;
  }
};

export default OAuth2RedirectHandler;
