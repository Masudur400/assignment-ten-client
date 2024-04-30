import { useEffect, useState } from "react";
import WaterColour from "../WaterColour/WaterColour";

 
const WatercolourPainting = () => {
    const [allDAta, setAllData] = useState([])
    const [allDataPro, setAllDataPro] = useState([])

    useEffect(() => {
        fetch('https://painting-and-drawing-server-nu.vercel.app/craft')
            .then(res => res.json())
            .then(data => {
                
                setAllDataPro(data)
            })
    }, [])
 
     

    useEffect(()=>{
        const landscapePainting = allDataPro.filter(item => item.subcategoryName.toLowerCase() === 'watercolour painting');
            setAllData(landscapePainting);
    },[allDataPro])

    return (
        <div>
                <h2 className="text-2xl font-bold text-center my-5">All Watercolour Painting Items</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 px-5">
                {
                    allDAta.map(item => <WaterColour key={item._id} item={item}></WaterColour> )
                }
            </div>

             
        </div>
    );
};

export default WatercolourPainting;