import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthPovider/AuthPovider';

const MyToy = () => {
    
      const [MToys, setMToys] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/AddDolls/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setMToys(data);
          });
      }, [user]);
    return (
        <div>
        <h4>  All Toy</h4>
       
        <div className="overflow-x-auto ">
    <table className="table table-compact w-full">
      <thead>
        <tr>
          <th>#</th> 
          <th> SellerName</th> 
          <th>Toy Name</th> 
          <th>Toy Image</th> 
          <th>Sub category</th> 
          <th>Price</th> 
          <th>Available Quantity</th>
          <th>Button</th>
        </tr>
      </thead> 
      <tbody>
         {MToys?.map((Toy, index) => (
          <tr className='text-black'>
            <th>{index+1}</th> 
          <td>{Toy.sellerName}</td> 
          <td>{Toy.name}</td> 
          <td><img className='rounded w-[80px]' src={Toy.pictureUrl} alt="" /></td> 
          
          <td>{Toy.subCategory}</td > 
          <td>{Toy.price}</td> 
          <td>{Toy.quantity}</td>
          <td>
          <button className="btn btn-outline bg-red-400">View Details</button>
            </td>
          </tr>
        ))}
        
 
      </tbody> 
      
    </table>
  </div>
        </div>
    );
};

export default MyToy;