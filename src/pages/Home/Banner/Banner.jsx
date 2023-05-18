import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src={`https://i.ibb.co/RPY3yw2/b0.jpg`} className="w-full h-[600px]" />
  </div> 
  <div id="item2" className="carousel-item w-full">
  <img src={`https://i.ibb.co/ZGQr8TY/03.jpg`} className="w-full h-[600px]" />
  </div> 
  <div id="item3" className="carousel-item w-full">
  <img src={`https://i.ibb.co/mF2Jng7/c2.jpg`} className="w-full h-[600px]" />
  </div> 
  <div id="item4" className="carousel-item w-full">
  <img src={`https://i.ibb.co/9tG9yvX/02.jpg`} className="w-full h-[600px]" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn  bg-blue-700 text-slate-50">1</a> 
  <a href="#item2" className="btn  bg-blue-700 text-slate-50">2</a> 
  <a href="#item3" className="btn  bg-blue-700 text-slate-50">3</a> 
  <a href="#item4" className="btn  bg-blue-700 text-slate-50">4</a>
</div>
        </div>
    );
};

export default Banner;