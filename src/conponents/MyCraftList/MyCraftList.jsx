import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import MyCard from "../MyCard/MyCard";

 
const MyCraftList = () => {

    const{user} = useContext(AuthContext)
    const [items, setItems] = useState([])
    const [crafts, setCrafts] = useState(items)

 
    useEffect(()=>{
        fetch(`http://localhost:5000/myCraft/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setItems(data)})
    },[user?.email])

    return (
        <div className="min-h-screen mt-5 md:mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3 md:px-5">
             {
                items.map(item => <MyCard 
                    key={item._id}
                     item = {item}
                     crafts={crafts}
                     setCrafts={setCrafts}
                     ></MyCard>)
             }
        </div>
    );
};

export default MyCraftList;