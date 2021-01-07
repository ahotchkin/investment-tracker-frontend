import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      or
      <Link to="/login">
        <button>Log In</button>
      </Link>
    </div>
  )
}

export default Home;
