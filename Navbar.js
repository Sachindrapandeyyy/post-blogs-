import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold">VlogWebsite</Link>
          <div>
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/signup" className="mr-4">Signup</Link>
            <Link to="/profile" className="mr-4">Profile</Link>
            <Link to="/post-vlog" className="bg-blue-500 text-white px-3 py-2 rounded">Post Vlog</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
