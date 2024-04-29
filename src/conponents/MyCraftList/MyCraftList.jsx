import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import MyCard from "../MyCard/MyCard";
import { FaChevronDown } from "react-icons/fa";
import { useLoaderData } from "react-router-dom"; 
import { Helmet } from "react-helmet";


const MyCraftList = () => {

    const allItems = useLoaderData()
    const { user } = useContext(AuthContext)
    const [items, setItems] = useState([]) 
    const [myItems, setMyItems] = useState([]);
    



    useEffect(() => { 
        
        const myItems = allItems.filter(item => item.email === user.email)
        setMyItems(myItems); 
        setItems(myItems)
    }, [allItems,user.email])


     const handleYesNo = element =>{
        if(element === 'yes'){
            const yesItem = myItems.filter(item => item.customization === 'yes');
            setItems(yesItem);
        }
        else if (element === 'no'){
            const noItem = myItems.filter(item => item.customization === 'no');
            setItems(noItem);
        }
     }
      

    return (
        <div>
            <Helmet>
                <title>My Card & Craft List</title>
            </Helmet>
            <div className="my-5 flex justify-center items-center">
                <details className="dropdown">
                    <summary className="m-1 btn font-bold flex gap-2 justify-center items-center">Customization <FaChevronDown></FaChevronDown></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box  w-32">
                        <li  onClick={()=>handleYesNo('yes')} className="btn font-bold mb-3 text-center"> Yes </li>
                        <li onClick={()=>handleYesNo('no')} className="btn font-bold mb-3 text-center"> No </li>
                    </ul>
                </details>
            </div>

            <div className="min-h-screen mt-5 md:mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3 md:px-5">
                {
                    items.map(item => <MyCard
                        key={item._id}
                        item={item}
                    ></MyCard>)
                }
            </div>
        </div>
    );
};

export default MyCraftList;