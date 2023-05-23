import React from 'react';
import UpdateToy from './UpdateToy';

const HandleDelete = ({Toy,handleDelete,index,isUpdate,setIsUpdate}) => {
    const {_id}=Toy;
    return (
        
            <tr className='text-black'>
            <th>{index+1}</th> 
          <td>{Toy.sellerName}</td> 
          <td>{Toy.name}</td> 
          <td><img className ='rounded w-[80px]' src={Toy.pictureUrl} alt="" /></td> 
          
          <td>{Toy.subCategory}</td> 
          <td>{Toy.price}</td> 
          <td>{Toy.quantity}</td>
          <td><UpdateToy 
          id={_id}
          isUpdate ={isUpdate}
          setIsUpdate={setIsUpdate}
          /></td>
          <td>
          <button onClick={()=>handleDelete(_id)} className="btn btn-outline bg-fuchsia-400">Delete</button>
            </td>
          </tr>
        
    );
};

export default HandleDelete;