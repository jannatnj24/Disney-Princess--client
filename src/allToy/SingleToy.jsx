import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const toy = useLoaderData();
    console.log(toy);
    return (
        <div className='mx-[500px] mt-4 mb-4'>
            <div className="card  bg-rose-50 w-96 bg-base-100 shadow-xl">
  <figure><img className='w-[200px] m-2' src={toy.pictureUrl} alt="Toy" /></figure>
  <div className="card-body">
    <h2 className="card-title text-purple-700"> Toy Name :{toy.name}</h2>
       <p className='text-2xl text-purple-700'>sellerName:{toy.sellerName}</p>
       <p className=' text-purple-700' > Email:{toy.sellerEmail}</p>
       <p className='text-1xl text-purple-700'>SubCategory:{toy.subCategory}</p>
       <p  className='text-1xl text-purple-700'>Price:${toy.price}</p>
       <p className='text-1xl text-purple-700'>Rating:{toy.rating}</p>
       <p className='text-1xl text-purple-700'>Quantity:{toy.quantity}</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleToy;