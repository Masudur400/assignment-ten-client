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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    allDAta.map(item => <LandscapePanting key={item._idi} item = {item}></LandscapePanting>)
                }
            </div>

             
        </div>
    );
};

export default LandScape;