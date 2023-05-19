import React from 'react';

const ExtraSection1 = () => {
    return (
        <div>
        <div>
            <h3 className='mt-4 mb-4 text-center text-3xl text-black font-bold'> Disney dolls Character  </h3>
        </div>
        <div>
        <div className="bg-fuchsia-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        <div className="aos-item" data-aos="fade-up">
          <img   src={`https://i.ibb.co/D1jDBTd/9773cea7861abd7e458cb761b08087ec.png`} alt="Image 1" className="w-[600px] h-[300px] rounded" />
          <h3 className=' text-2xl text-fuchsia-700'>Cinderella</h3>
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/ySTFQKZ/195-1957376-belle-png-picture-beauty-and-the-beast-princess.jpg`} alt="Image 2" className="w-[600px] h-[300px] rounded" />
          <h3 className=' text-2xl text-fuchsia-700'>Belle</h3>
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/PTW2yJ9/413-4136358-disney-elsa-frozen-freetoedit-elsa-frozen-png-transparent.png`} alt="Image 3" className="w-[600px] h-[300px]  rounded" />
          <h3 className=' text-2xl text-fuchsia-700'>Elsa</h3>
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/XxGQcLb/ariel.png`} alt="Image 3" className="w-[600px] h-[300px]  rounded" />
          <h3 className=' text-2xl text-fuchsia-700'> Ariel</h3>
        </div>
        
        </div>
        </div>
       </div>
    );
};

export default ExtraSection1;