import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

 
const CraftItemsSection = () => {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('https://painting-and-drawing-server-nu.vercel.app/craft')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    const sliceItem = items.slice(0,6)
     


    return (
        <div>
            <h2 className="text-2xl font-bold text-center mb-5">Craft Items  </h2>
            <p className="md:w-1/3 mx-auto">Craft items can be made from various materials, including wood, metal, glass, fabric, paper, clay, and natural elements like shells or stones. The choice of material often depends on the desired aesthetic, function, and the artisan expertise.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 md:mt-10">
                {
                    sliceItem.map(slItem =>    <div key={slItem._id} data-aos="zoom-in" className='border p-5 flex flex-col shadow-lg rounded-md'>
                         <div className='flex justify-center items-center'>
                              <img className='w-72 h-48 rounded-md border mb-5' src={slItem.photo} alt="" />
                           </div>
                          <div className='flex-grow'>
                           <h2 className='text-2xl font-bold mb-5'>{slItem.itemName}</h2>
                          <h2 className='text-2xl font-bold  '>Category: <span className='text-2xl font-bold text-red-400'>{slItem.subcategoryName}</span></h2>
                           <div className='my-5 flex justify-between items-center '>
                              <p className='font-bold'>Price : {slItem.price}</p>
                              <p className='font-bold flex gap-2'>Rating : <span className='text-yellow-700 text-xl'>{slItem.rating}</span></p>
                         </div>
                           <div className='my-5  '>
                             <p className='font-bold mb-3'>Item Type : {slItem.itemType}</p>
                              <p className='font-bold mb-3'>Processing Time : {slItem.processingTime} days</p>
                              <p className='font-bold flex gap-2'>Customization : <span className='text-red-500'>{slItem.customization}</span></p>
                          </div>
            
                           </div>
                           <Link to={`/craft/${slItem._id}`}><button className='bg-green-500 px-4 py-2 rounded-md w-full text-bold text-white'>View More</button></Link>
                         
            
                      </div>)
                }
            </div>
        </div>
    );
};

export default CraftItemsSection;