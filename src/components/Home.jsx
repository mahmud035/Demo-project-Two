import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import Table from './Table';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-lg mx-auto pb-10  pt-4">
        <div className="h-fit container sm:mx-auto rounded-3xl sm:border-2 sm:border-gray-200 ">
          <Profile />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
