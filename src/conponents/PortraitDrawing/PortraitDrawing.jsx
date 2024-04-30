import { useEffect, useState } from "react";
import Portrait from "../Portrait/Portrait";

 
const PortraitDrawing = () => {

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
        const landscapePainting = allDataPro.filter(item => item.subcategoryName == 'Portrait Drawing');
            setAllData(landscapePainting);
    },[allDataPro])


    return (
        <div>
            <h2 className="text-2xl font-bold text-center my-5">All Portrait Drawing Items</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-5">
                {
                    allDAta.map(item => <Portrait key={item._id} item ={item}></Portrait>)
                }
            </div>

             
        </div>
    );
};

export default PortraitDrawing;