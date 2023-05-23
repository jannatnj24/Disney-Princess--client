import React from 'react';

const HandleDelete = ({Toy,handleDelete,index}) => {
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
          <td> <button className="btn btn-outline bg-fuchsia-400">Update</button></td>
          <td>
          <button onClick={()=>handleDelete(_id)} className="btn btn-outline bg-fuchsia-400">Delete</button>
            </td>
          </tr>
        
    );
};

export default HandleDelete;