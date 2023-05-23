import React, { useContext } from 'react';
import { AuthContext } from '../AuthPovider/AuthPovider';
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const AddToy = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    //   const {displayName,email}=user;

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/addDolls", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                
            });
        console.log(data);
        Swal.fire('Hurrah', ' Toy Added Successfully', 'success');
    }
    return (
        <div>
            <div>
                <Helmet>
                    <title>Disney-World | MyToy</title>
                </Helmet>
            </div>
            <div className='m-6'>
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="pictureUrl" className="block mb-1">Picture URL of the toy:</label>
                        <input type="text" id="pictureUrl" {...register('pictureUrl')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-1">Name:</label>
                        <input type="text" id="name" {...register('name')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="sellerName" className="block mb-1">Seller name (if available):</label>
                        <input type="text" id="sellerName" {...register('sellerName')} defaultValue={user?.displayName} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="sellerEmail" className="block mb-1">Seller email:</label>
                        <input type="email" id="sellerEmail" {...register('sellerEmail')} defaultValue={user?.email} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="subCategory" className="block mb-1">Sub-category:</label>
                        <select id="subCategory" {...register('subCategory')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
                            <option value="Disney-Princess">Disney-Princess</option>
                            <option value="Marvel">Marvel</option>
                            <option value="Pixar">Pixar</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="price" className="block mb-1">Price:</label>
                        <input type="number" step="0.01" id="price" {...register('price')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="rating" className="block mb-1">Rating:</label>
                        <input type="number" step="0.01" id="rating" {...register('rating')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="quantity" className="block mb-1">Available quantity:</label>
                        <input type="number" step="0.01" id="quantity" {...register('quantity')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block mb-1">Detail description:</label>
                        <textarea id="description" {...register('description')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                    </div>

                    <button type="submit" className="px-4 py-2 text-black bg-fuchsia-400  rounded hover:bg-blue-600">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddToy;