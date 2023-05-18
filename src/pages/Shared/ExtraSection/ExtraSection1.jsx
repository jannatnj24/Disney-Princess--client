import React from 'react';

const ExtraSection1 = () => {
    return (
        <div>
        <div>
            <h3 className='mt-4 mb-4 text-center text-3xl text-black font-bold'> Disney dolls Character  </h3>
        </div>
        <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        <div className="aos-item" data-aos="fade-up">
          <img   src={`https://i.ibb.co/gw5tyRr/1v.jpg`} alt="Image 1" className="w-[600px] h-[300px] rounded" />
          <h3 className=' text-2xl text-fuchsia-700'>Cinderella</h3>
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/yRwvxX5/22.jpg`} alt="Image 2" className="w-[600px] h-[300px] rounded" />
          <h3 className=' text-2xl text-fuchsia-700'>Belle</h3>
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/4RKSrSN/3v.jpg`} alt="Image 3" className="w-[600px] h-[300px]  rounded" />
          <h3 className=' text-2xl text-fuchsia-700'>Elsa</h3>
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/hYvt3Bz/4v.jpg`} alt="Image 3" className="w-[600px] h-[300px]  rounded" />
          <h3 className=' text-2xl text-fuchsia-700'> Ariel</h3>
        </div>
        
        </div>
        </div>
       </div>
    );
};

export default ExtraSection1;