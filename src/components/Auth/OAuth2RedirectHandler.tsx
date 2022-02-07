import { Navigate } from 'react-router-dom';
import React from 'react';
import QueryString from 'qs';
import { useQuery } from 'react-query';
import { IUserInfo } from '../../types/index';
import { getUser } from '@apis/user';

const OAuth2RedirectHandler = () => {
  const { token, error } = QueryString.parse(window.location.search, { ignoreQueryPrefix: true });

  useQuery<IUserInfo, Error>(['user'], getUser, {
    retry: false,
  });

  if (token) {
    localStorage.setItem('accessToken', token as string);

    return <Navigate to={{ pathname: '/' }} state={{ from: window.location }} />;
  } else {
    return <Navigate to={{ pathname: '/' }} state={{ from: window.location, error: error }} />;
  }
};

export default OAuth2RedirectHandler;
