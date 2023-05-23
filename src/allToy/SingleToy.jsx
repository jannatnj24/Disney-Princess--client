import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const toy = useLoaderData();
    console.log(toy);
    return (
        <div>
            <h1>singler data</h1>
        </div>
    );
};

export default SingleToy;