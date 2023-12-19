import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading/Loading';
const UserTemplate = () => {
  const { isActive } = useSelector((state) => state.loadingSlice);

  return (
    <>
      {isActive ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};

export default UserTemplate;
