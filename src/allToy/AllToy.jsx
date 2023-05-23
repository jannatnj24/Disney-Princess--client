import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const AllToy = () => {
    const [Data, setData] = useState([]);
    
    useEffect(() => {
        fetch(' https://disney-princess-server.vercel.app/addDolls')
            .then(res => res.json())

            .then(data => setData(data));
    }, [])
      console.log(Data);
    return (
        <div>
            <h4 className='text-center font-bold text-5xl m-4'>  All Toy</h4>
            <Helmet>
                    <title>Disney-World | allToy</title>
                </Helmet>
            <div className="overflow-x-auto ">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>#</th> 
              <th> SellerName</th> 
              <th>Toy Name</th> 
              <th>Sub-category</th> 
              <th>Price</th> 
              <th>Available Quantity</th>
              <th>Button</th>
            </tr>
          </thead> 
          <tbody>
             {Data?.map((Toys, index) => (
              <tr className='text-black'>
                <th>{index+1}</th> 
              <td>{Toys.sellerName}</td> 
              <td>{Toys.name}</td> 
              
              <td>{Toys.subCategory}</td> 
              <td>{Toys.price}</td> 
              <td>{Toys.quantity}</td>
              <td>
              <Link to={`/toy/${Toys._id}`}>
              <button className="btn btn-outline  bg-fuchsia-400">View Details</button>
              </Link>
                </td>
              </tr>
            ))}
            
     
          </tbody> 
          
        </table>
      </div>
            </div>
        
    );
};

export default AllToy;