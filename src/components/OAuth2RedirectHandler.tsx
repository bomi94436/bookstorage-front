import { Navigate } from 'react-router-dom';
import React from 'react';

const OAuth2RedirectHandler = () => {
  const getUrlParameter = (name: string) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  const token = getUrlParameter('token');
  const error = getUrlParameter('error');

  if (token) {
    localStorage.setItem('accessToken', token);
    return (
      <Navigate
        to={{
          pathname: '/',
          // state: { from: window.location },
        }}
      />
    );
  } else {
    return (
      <Navigate
        to={{
          pathname: '/error',
          // state: {
          //   from: window.location,
          //   error: error,
          // },
        }}
      />
    );
  }
};

export default OAuth2RedirectHandler;
