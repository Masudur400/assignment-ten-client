import { useEffect, useState } from "react";
import Cartoon from "../Cartoon/Cartoon";

 
const CartoonDrawing = () => {
    const [allDAta, setAllData] = useState([])
    const [allDataPro, setAllDataPro] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/craft')
            .then(res => res.json())
            .then(data => {
                
                setAllDataPro(data)
            })
    }, [])
 
     

    useEffect(()=>{
        const landscapePainting = allDataPro.filter(item => item.subcategoryName.toLowerCase() === 'cartoon drawing');
            setAllData(landscapePainting);
    },[allDataPro])

    return (
        <div>
                <h2 className="text-2xl font-bold text-center my-5">All Cartoon Drawing Items</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 px-5">
                {
                    allDAta.map(item => <Cartoon key={item._id} item={item}></Cartoon>  )
                }
            </div>

             
        </div>
    );
};

export default CartoonDrawing;