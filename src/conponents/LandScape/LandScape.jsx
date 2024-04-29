import { useEffect, useState } from "react"; 
import LandscapePanting from "../landscapePainting/LandscapePanting";

 
const LandScape = () => {
    
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
        const landscapePainting = allDataPro.filter(item => item.subcategoryName == 'Landscape Painting');
            setAllData(landscapePainting);
    },[allDataPro])

    return (
        <div>
                <h2 className="text-2xl font-bold text-center my-5">All Landscape Painting Items</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 px-5">
                {
                    allDAta.map(item => <LandscapePanting key={item._idi} item = {item}></LandscapePanting>)
                }
            </div>

             
        </div>
    );
};

export default LandScape;