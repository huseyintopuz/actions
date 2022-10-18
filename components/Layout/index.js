import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from '../../app/api';
import TestcaseHeader from '../TestcaseHeader';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.actions);

  const router = useRouter();

  useEffect(() => {
    if (cartItems?.length < 1) dispatch(fetchTodos());
  }, [dispatch])

  return (
    <div>
      {router && router.asPath == "/intro" ? '' : <TestcaseHeader />}
      {children}
    </div>
  )
}

export default Layout
