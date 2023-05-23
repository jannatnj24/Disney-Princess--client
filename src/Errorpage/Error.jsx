import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
         <Helmet>
           <title>Disney World | Error</title>
         </Helmet>
        
     
         <div className="flex flex-col items-center justify-center h-screen">
      <div className=" text-white p-10 rounded-lg shadow-xl bg-lime-100 animate-bounce">
        <h1 className="text-6xl mb-4 text-purple-500">404</h1>
        <p className="text-2xl text-purple-500">Your Page not found</p>
      </div>
      <img  src={`https://i.ibb.co/vhXJcKy/404.webp`} alt="404" className="mt-8  w-96 h-96" />
    </div>
    <p><Link to="/" className="bg-purple-500 text-white px-4 py-2 rounded-md">
         Back to Home
      </Link></p>
      </div>
    );
};

export default Error;