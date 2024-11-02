import React from 'react';
import { FaDollarSign, FaUserPlus, FaChartLine } from 'react-icons/fa'; 

function Home() {
  return (
    <div className="home-container flex">
      <aside className="sidebar h-full justify-start w-1/4 bg-white shadow-lg"> 
  <section className="sidebar-title items-center p-4">
    <svg fill="none" height="42" viewBox="0 0 32 32" width="42" xmlns="http://www.w3.org/2000/svg">
      <rect height="100%" rx="16" width="100%"></rect>
      <path clipRule="evenodd" d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z" fill="currentColor" fillRule="evenodd"></path>
    </svg>
    <div className="flex flex-col ml-2">
      <span className="font-bold text-lg">Appzest</span>
    </div>
  </section>

  <section className="sidebar-content h-fit min-h-[20rem] overflow-visible flex-grow">
    <nav className="menu rounded-md">
      <section className="menu-section px-4">
        <ul className="menu-items">
          <li className="menu-item py-2 hover:bg-gray-200">Analytics</li> 
          <li className="menu-item menu-active py-2 bg-gray-300">Users</li> 
          <li className="menu-item py-2 hover:bg-gray-200">Notifications</li>
        </ul>
      </section>
    </nav>
  </section>

  <section className="sidebar-footer h-fit justify-end bg-gray-2 pt-2">
    <div className="dropdown flex h-fit w-full cursor-pointer hover:bg-gray-4">
      <label className="flex h-fit w-full p-0 hover:bg-gray-4" tabIndex="0">
        <div className="flex flex-row gap-4 p-4">
          <div className="avatar avatar-md">
            <img src="https://i.pravatar.cc/150?img=30" alt="avatar" width={"30px"}/>
          </div>
          <div className="flex flex-col">
            <span>Sandra Marx</span>
          </div>
        </div>
      </label>
    </div>
  </section>
</aside>

      <div className="main-content w-3/4 p-4">
        <h1 className="home-title">Analytics</h1>

        <div className="cards-container">
          <div className="card">
            <h3 className="card-title">Total Sales</h3>
            <p className="card-content">$5,000</p>
          </div>
          <div className="card">
            <h3 className="card-title">New Users</h3>
            <p className="card-content">150</p>
          </div>
          <div className="card">
            <h3 className="card-title">Revenue</h3>
            <p className="card-content">$15,000</p>
          </div>
          <div className="card">
            <h3 className="card-title">This Month</h3>
            <p className="card-content">$5,000</p>
          </div>
          <div className="card">
            <h3 className="card-title">This Weak</h3>
            <p className="card-content">150</p>
          </div>
          <div className="card">
            <h3 className="card-title">This Year</h3>
            <p className="card-content">$15,000</p>
          </div>
        </div>

        <div className="graph-container mt-4">
          <h3 className="graph-title">Monthly Sales</h3>
          <div className="graph-placeholder">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
