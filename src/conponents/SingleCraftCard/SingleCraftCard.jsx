
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const SingleCraftCard = ({craft}) => {

    const { _id,  itemName, subcategoryName,  price, rating, customization, processingTime,   photo } = craft; 

    return (
        <div className='border p-5 flex flex-col shadow-lg rounded-md'>
             <div className='flex justify-center items-center'>
                <img className='w-72 h-48 rounded-md border mb-5' src={photo} alt="" />
             </div>
             <div className='flex-grow'>
             <h2 className='text-2xl font-bold mb-5'>{itemName}</h2>
             <h2 className='text-2xl font-bold  '>Category: <span className='text-2xl font-bold text-red-400'>{subcategoryName}</span></h2>
             <div className='my-5 flex justify-between items-center '>
                <p className='font-bold'>Price : {price}</p>
                <p className='font-bold flex gap-2'>Rating : <span className='text-yellow-700 text-xl'>{rating}</span></p>
             </div>
             <div className='my-5  '>
                <p className='font-bold mb-3'>Processing Time : {processingTime}</p>
                <p className='font-bold flex gap-2'>Customization : <span className='text-red-500'>{customization}</span></p>
             </div>

             </div>
             <Link to={`/craft/${_id}`}><button className='bg-green-500 px-4 py-2 rounded-md w-full text-bold text-white'>View More</button></Link>
             

        </div>
    );
};

SingleCraftCard.propTypes = {
    craft:PropTypes.object
}

export default SingleCraftCard;