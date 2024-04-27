import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

 
const CardDetails = () => {

    const [ DetailsCard, setDetailsCard] = useState();

    const details = useLoaderData();
    const {id} = useParams();
    
    
    

    useEffect(()=>{
        const aCard = details?.find(card => card._id === id)
        setDetailsCard(aCard);
    },[details,id])

    const { name, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, email, photo } = DetailsCard;

    return (
        <div className="min-h-screen">
            CardDetails :  
        </div>
    );
};

export default CardDetails;