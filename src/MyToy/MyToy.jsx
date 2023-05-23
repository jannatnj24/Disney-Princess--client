import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthPovider/AuthPovider';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import HandleDelete from './HandleDelete';
import { Helmet } from 'react-helmet';

const MyToy = () => {

    const [MToys, setMToys] = useState([]);
    const { user } = useContext(AuthContext);
    const [isUpdate,setIsUpdate] = useState(true);
    useEffect(() => {
        fetch(`https://disney-princess-server.vercel.app/addDolls/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMToys(data);
            });
    }, [user,isUpdate]);

    const handleDelete = id => {
        console.log(id)
        const proceed = confirm(' want you  to delete this toy?');
        if (proceed) {
            fetch(`https://disney-princess-server.vercel.app/addDolls/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire('Hurrah', ' Toy Deleted ', 'success');
                        const remaining = MToys.filter(Toy => Toy._id !== id);
                        setMToys(remaining);
                    }
                })
        }
    }

    return (


        <div>
            <div>
                <Helmet>
                    <title>Disney-World | MyToy</title>
                </Helmet>
            </div>
            <div>
                <h4 className='text-center font-bold text-5xl m-4'>  My Toys</h4>

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
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>


                            {MToys?.map((Toy, index) => (
                                <HandleDelete
                                    Toy={Toy}
                                    handleDelete={handleDelete}
                                    index={index}
                                    isUpdate ={isUpdate}
                                    setIsUpdate={setIsUpdate}
                                ></HandleDelete>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyToy;

