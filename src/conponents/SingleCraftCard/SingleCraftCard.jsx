
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const SingleCraftCard = ({craft}) => {

    const { _id,itemType,  itemName, subcategoryName,shortDescription,  price, rating, customization, processingTime,   photo } = craft; 

    return (
        // <div data-aos="zoom-in" className='border p-5 flex flex-col shadow-lg rounded-md'>
        //      <div className='flex justify-center items-center'>
        //         <img className='w-72 h-48 rounded-md border mb-5' src={photo} alt="" />
        //      </div>
        //      <div className='flex-grow'>
        //      <h2 className='text-2xl font-bold mb-5'>{itemName}</h2>
        //      <h2 className='text-2xl font-bold  '>Category: <span className='text-2xl font-bold text-red-400'>{subcategoryName}</span></h2>
        //      <div className='my-5 flex justify-between items-center '>
        //         <p className='font-bold'>Price : {price}</p>
        //         <p className='font-bold flex gap-2'>Rating : <span className='text-yellow-700 text-xl'>{rating}</span></p>
        //      </div>
        //      <div className='my-5  '>
        //         <p className='font-bold mb-3'>Item Type : {itemType}</p>
        //         <p className='font-bold mb-3'>Processing Time : {processingTime} days</p>
        //         <p className='font-bold flex gap-2'>Customization : <span className='text-red-500'>{customization}</span></p>
        //      </div>

        //      </div>
        //      <Link to={`/craft/${_id}`}><button className='bg-green-500 px-4 py-2 rounded-md w-full text-bold text-white'>View More</button></Link>
             

        // </div>

        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr> 
        <th className='text-center font-bold text-lg '>Image & SubCategory</th>
        <th  className='text-center font-bold text-lg'>Description</th>
        <th  className='text-center font-bold text-lg'>Others</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
       
      {/* row 2 */}
      
      {/* row 3 */}
     
      {/* row 4 */}
      <tr> 
        <td>
          <div className="flex items-center gap-3">
            <div className=" ">
              <div>
                <img className='w-64 h-52' src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div className='w-[300px] '>
              <p className='text-xl font-bold mb-6'>Subcategory Name: {subcategoryName}</p>
               <p className='text-xl font-bold'>Item Name : {itemName}</p>
            </div>
          </div>
        </td>
        <td className='w-[300px]'> 
          <p><span className='font-bold'>Description :</span> {shortDescription}</p>
        </td>
        <td>
            <p><span className='font-bold'>Price :</span> {price}</p>
            <p><span className='font-bold'>Rating :</span> {rating} star</p>
            <p><span className='font-bold'>Processing Time :</span> {processingTime} days</p>
            <p><span className='font-bold'>Customization : </span>{customization}</p>
            <p><span className='font-bold'>Item Type : </span>{itemType}</p>
        </td>
        <th>
          <Link to={`/craft/${_id}`}><button className="bg-green-500 text-white font-bold px-4 py-2 rounded-md">details</button></Link>
        </th>
      </tr>
    </tbody> 
    
    
  </table>
</div>
        </div>
    );
};

SingleCraftCard.propTypes = {
    craft:PropTypes.object
}

export default SingleCraftCard;