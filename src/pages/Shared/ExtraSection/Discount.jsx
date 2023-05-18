import React from 'react';

const Discount = () => {
    return (
        <div>
    <div>
        <h4 className='text-center text-5xl tex-black font-bold  mt-[100px]'>Brand launch 20% off!</h4>
    </div>
    <div>
    <div className="hero min-h-screen" >
     <img className=' rounded-md w-[1000px] h-[500px]' src={`https://i.ibb.co/YTGnKvf/oooo.jpg`} alt="" />
  <div className=" bg-opacity-60"></div>
  <div className="hero-content text-left text-neutral-content">
    <div className="max-w-md space--0">
      <h1 className="mb-5 text-5xl font-bold text-black">Up to 20% Off <br /> Select Toys & more</h1>
      <p className="mb-5">Clearance; 50% Off Select Toys. 50% Off Select Toys. Showing 1-12 of 16 Results. While Supplies Last. View as Grid List.</p>
      <div>
      <a className="link link-hover">Shop Now</a>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
    );
};

export default Discount;