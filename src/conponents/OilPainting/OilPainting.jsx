import { useEffect, useState } from "react";
import OilPaint from "../OilPaint/OilPaint";

 
const OilPainting = () => {
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
        const landscapePainting = allDataPro.filter(item => item.subcategoryName.toLowerCase() === 'oil painting');
            setAllData(landscapePainting);
    },[allDataPro])

    return (
        <div>
                <h2 className="text-2xl font-bold text-center my-5">All Oil Painting Items</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 px-5">
                {
                    allDAta.map(item =><OilPaint key={item._id} item ={item}></OilPaint>  )
                }
            </div>

             
        </div>
    );
};

export default OilPainting;