import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

 
const CardDetails = () => {

    const [ DetailsCard, setDetailsCard] = useState({});

    const details = useLoaderData();
    const {id} = useParams(); 

     
    useEffect(() => {
        const fetchData = async () => {
          const aCard =await details.find(card => card._id == id);
          console.log('details card', aCard);
          setDetailsCard(aCard);
        };
      
        fetchData();
      
      }, [details, id]); 
     

     
    const { name, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, email, photo } = DetailsCard;

    return (
        <div className="min-h-screen md:p-20 p-5">
           <div className="lg:flex md:mt-10 mt-5 gap-10 shadow-2xl rounded-md p-10">
            <div>
                <img className="lg:w-[500px] w-[400px] h-[150px] lg:h-[300px] border" src={photo} alt="" />
            </div>
            <div>
                <h2 className="md:text-2xl text-xl font-bold my-3">{itemName}</h2>
                <h2 className="text-xl font-bold opacity-80">{subcategoryName}</h2>
                <p className="my-5">{shortDescription}</p>
                <div className="flex my-5 justify-between items-center">
                    <p className="font-bold">Price: {price}</p>
                    <p className="font-bold">Rating: {rating}</p>
                </div>
                <div className="md:flex my-5 justify-between items-center">
                    <p className="font-bold">Processing Time: {processingTime}</p>
                    <p className="font-bold">Stock Status: {stockStatus}</p>
                    <p className="font-bold">Customization: {customization}</p>
                </div>
            </div>
            </div> 
        </div>
    );
};

export default CardDetails;