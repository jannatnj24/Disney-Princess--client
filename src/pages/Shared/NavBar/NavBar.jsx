import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthPovider/AuthPovider';

const NavBar = () => {
    const {user,logOut}=useContext(AuthContext);
  const handleLogOut = () => {
      logOut()
          .then()
          .catch(error => console.log(error));
  }
    return (
        <div className="navbar bg-fuchsia-600">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

            <li><Link className='text-white' to="/">Home</Link> </li>
            <li><Link className='text-white' to="/AllToys">All Toys</Link> </li>
            <li><Link className='text-white' to="/AddAToy">Add A Toy</Link> </li>
            <li><Link className='text-white' to="/myToy">My Toy</Link> </li>
            <li><Link className='text-white' to="/Blog">Blog</Link> </li>
                
            </ul>
          </div>
          <img className="w-[100px]" src={`https://i.ibb.co/m5r510q/logoo.png`} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           <li><Link className='text-white' to="/">Home</Link> </li>
            <li><Link className='text-white' to="/AllToy">all toy</Link>  </li>
            <li><Link className='text-white' to="/AddToy">Add toy</Link> </li>
            <li><Link className='text-white' to="/myToy">My toy</Link> </li>
            <li><Link className='text-white' to="/Blog">Blog</Link> </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && <img className='rounded-full w-[50px] m-4' src={user.photoURL}  /> }
           {user ? <button onClick={handleLogOut} className="btn btn-outline bg-rose-100 m-4">Log Out</button>:<Link to="/login" className="btn  bg-rose-200 hover:bg-rose-100 text-black mx-4">Login</Link> }
        </div>
      </div>
    );
};

export default NavBar;