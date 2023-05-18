import React from 'react';

const Gallery = () => {
    return (
        <div>
            <div>
                <h4 className="text-center font-bold text-5xl m-6"> Toy Collection</h4>
            </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 m-10">
        <div className="aos-item" data-aos="fade-up">
          <img   src={`https://i.ibb.co/zrshhHC/1.jpg`} alt="" className="w-[600px] h-[300px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/MDKSWRM/2.jpg`} alt="" className="w-[600px] h-[300px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/sjPyvnJ/5.jpg`} alt="" className="w-[600px] h-[300px]  rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/3MngBvy/4.jpg`} alt="" className="w-[600px] h-[300px]  rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/m8Y1ttd/6.jpg`} alt="" className="w-[600px] h-[300px]  rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/vBkbH7b/10.jpg`} alt="" className="w-[600px] h-[300px]  rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/ZhsY3Bb/11.jpg`} alt="" className="w-[600px] h-[300px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/prpmG6J/13.jpg`} alt="" className="w-[600px] h-[300px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/YTdyLQx/8.jpg`} alt="" className="w-[600px] h-[300px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/tCwhgrG/12.jpg`} alt="" className="w-[600px] h-[300px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/mbJkx1K/3.jpg`} alt="" className="w-[600px] h-[300px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/FKPG1gm/7.jpg`} alt="" className="w-[600px] h-[300px] rounded" />
        </div>
        </div>
        </div>
    );
};

export default Gallery;