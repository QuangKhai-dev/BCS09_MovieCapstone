import React, { useEffect, useState } from 'react';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';

const MovieManager = () => {
  const [listMovie, setListMovie] = useState([]);

  useEffect(() => {
    quanLyPhimServ
      .getAllMovie()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>MovieManager</div>;
};

export default MovieManager;
