import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const UpdateToy = ({id,isUpdate,setIsUpdate}) => {
    const [toy,setToy] =useState({});
    const { register, handleSubmit } = useForm();
const onSubmit=data=>{
    fetch(`https://disney-princess-server.vercel.app/doll/${id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount>0){
            setIsUpdate(!isUpdate)
            Swal.fire('Hurrah', ' Toy Updated Successfully', 'success');
        }
    })
}
    useEffect(()=>{
        fetch(`https://disney-princess-server.vercel.app/doll/${id}`)
        .then(res=>res.json())
        .then(data=>setToy(data))
    },[id])
    return (
        <div>
            {/* The button to open modal */}
<label htmlFor={id} className="btn bg-fuchsia-400 text-black">Update</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id={id} className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    {toy &&<form  onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>

<input type="text"
 placeholder="name" 
 className="input input-bordered input-secondary w-full max-w-xs mb-2" defaultValue={toy?.name} 
 {...register('name')}
 />
<input type="number" placeholder="Price" className="input input-bordered input-secondary w-full max-w-xs mb-2"  defaultValue={toy?.price} {...register('price')}/>
<input type="number" placeholder="Quantity" className="input input-bordered input-secondary w-full max-w-xs mb-2"  defaultValue={toy?.quantity} {...register('quantity')}/>
<button type="submit"  htmlFor={id} className=" modal-action  py-4 px-4 text-black bg-fuchsia-400 w-35  mx-auto rounded hover:bg-blue-600">Submit</button>
<div className="modal-action">
  <label htmlFor={id} className="btn bg-fuchsia-400" type='submit'>close</label>
</div>
</form>}
  </div>
</div>
        </div>
    );
};

export default UpdateToy;