import {loader} from '../assets';

const Loader = ({title}) => (
  <div className='w-full flex justify-center items-center flex-col text-center'>
    <img src={loader} alt='loader' className='w-32 h-32 object-contain' />
    <h1 className='font-bold text-2xl text-gray-300 mt-2'>{title || "Espera unos segundos"}</h1>
  </div>
);

export default Loader;
