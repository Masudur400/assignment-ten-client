
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';


const SingleCraftCard = ({ craft }) => {

    const { _id, itemType, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, photo } = craft;

    return ( 

        <div>
            <Fade>
            <div className="overflow-x-auto">
                <table className="table mb-5 border-b-2">
                     
                    <thead>
                        <tr>
                            <th className='text-center font-bold text-lg '>Image, ItemName & SubCategory</th>
                            <th className='text-center font-bold text-lg'>Description</th>
                            <th className='text-center font-bold text-lg'>Others</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className=" ">
                                        <div>
                                            <img className='w-64 h-52 rounded-md border' src={photo} alt="Avatar Tailwind CSS Component" />
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
            </Fade>
        </div>
    );
};

SingleCraftCard.propTypes = {
    craft: PropTypes.object
}

export default SingleCraftCard;