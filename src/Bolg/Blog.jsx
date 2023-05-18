import React from 'react';

const Blog = () => {
    return (
        <div className='m-2'>
            <h2 className=' mb-6 rounded-md text-black bg-rose-100'>1.What is an access token and refresh token?
                <br />
                Ans:A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. <br />
                1.0.How do they work and where should we store them on the client-side? <br />
                Ans:Client-side storage works on similar principles, but has different uses. It consists of JavaScript APIs that allow you to store data on the client and then retrieve it when needed.
            </h2>
            <h2 className='mb-6 rounded-md text-black bg-rose-100'>
                2.Compare SQL and NoSQL databases? <br />
                Ans:SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
            </h2>
            <h2 className=' mb-6 rounded-md text-black bg-rose-100'>
                3.What is express js? What is Nest JS (google it)? <br />
                Ans:NestJS is a framework for developing modern server-side applications in Node. js. It is built on top of Express, a popular server framework for Node. js, and provides a robust set of features for building efficient, scalable, and enterprise-grade applications.
            </h2>
            <h2 className='mb-6  rounded-md text-black bg-rose-100'>
                4.What is MongoDB aggregate and how does it work (google it)? <br />
                Ans:Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
            </h2>
        </div>
    );
};

export default Blog;