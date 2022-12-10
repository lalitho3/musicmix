import React from 'react';

const Error = ({title}) => (
  <div className='w-full flex justify-center items-center'>
    <h1 className='font-bold text-2xl text-gray-300 mt-2'>{title || "Ha ocurrido un error"}</h1>
  </div>
);

export default Error;
