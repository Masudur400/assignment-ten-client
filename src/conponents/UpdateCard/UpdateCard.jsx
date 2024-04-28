import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";

 
const UpdateCard = () => {
    const {user} = useContext(AuthContext);

    const craft = useLoaderData();
    const navigate = useNavigate();

    console.log(craft)
    const { _id, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus,  photo } = craft;



    const handleUpdateCraft = e => {
        e.preventDefault()
        const form = e.target 
        const itemName = form.itemName.value
        const subcategoryName = form.subcategoryName.value
        const shortDescription = form.shortDescription.value
        const price = form.price.value
        const rating = form.rating.value
        const customization = form.customization.value
        const processingTime = form.processingTime.value
        const stockStatus = form.stockStatus.value 
        const photo = form.photo.value
        const email= user.email

        const updateCoffee = {  email,itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus,   photo }

        console.log(updateCoffee)

        // update data to server 

        fetch(`http://localhost:5000/craft/${_id}`, {
                method:'PUT',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: "Success!",
                        text: "Update craft successfully!",
                        icon: "success"
                      });
                }
                navigate('/myCraftList')
            })

    }

    return (
        <div>
            <div data-aos="zoom-in-up" className="md:w-2/3 w-4/5 mx-auto shadow-lg bg-green-100 text-black mt-5 md:mt-10 p-5 rounded-lg">
                <h3 className="text-lg font-bold text-center">Update Craft Item</h3>
                <form onSubmit={handleUpdateCraft}>
                    <div className="grid md:grid-cols-2 gap-5 mt-5">


                        <div>
                            <p className="text-start">Item Name </p>
                            <input className="w-full border-2 px-4 py-3 rounded-md" type="text" placeholder="Item Name" name="itemName" defaultValue={itemName} id="" />
                        </div>

                        <div>
                            <p className="text-start">Subcategory Name </p>
                            <input className="w-full border-2 px-4 py-3 rounded-md" type="text" placeholder="Subcategory Name" name="subcategoryName" defaultValue={subcategoryName} id="" />
                        </div>

                        <div>
                            <p className="text-start">Short Description </p>
                            <input className="w-full border-2 px-4 py-3 rounded-md" type="text" placeholder="Short Description" name="shortDescription" defaultValue={shortDescription} id="" />
                        </div>

                        <div>
                            <p className="text-start">Price </p>
                            <input className="w-full border-2 px-4 py-3 rounded-md" type="text" placeholder="Price" name="price" defaultValue={price} id="" />
                        </div>

                        <div>
                            <p className="text-start">Rating </p>
                            <input className="w-full border-2 px-4 py-3 rounded-md" type="text" placeholder="Rating" name="rating" defaultValue={rating} id="" />
                        </div>
                        <div>
                            <p className="text-start">Customization </p>
                            <select className="select   w-full  " name='customization' defaultValue={customization}>
                                <option disabled selected>select item type</option>
                                <option>yes</option>
                                <option>no</option>
                            </select>
                        </div>
                        <div>
                            <p className="text-start"> Processing Time </p>
                            <input className="w-full border-2 px-4 py-3 rounded-md" type="text" placeholder="Processing Time" name="processingTime" defaultValue={processingTime} id="" />
                        </div>
                        <div>
                            <p className="text-start">Stock Status </p>
                            <select className="select   w-full  " name='stockStatus' defaultValue={stockStatus}>
                                <option disabled selected>select item type</option>
                                <option>In Stock</option>
                                <option>Made to Order</option>
                            </select>
                        </div>
                         

                    </div>

                    <div>
                        <p className="text-start">Image </p>
                        <input className="w-full border-2 px-4 py-2" type="text" placeholder="Image URL" defaultValue={photo} name="photo" id="" />
                    </div>


                    <input className="w-full py-2 mb-6 font-bold hover:bg-green-400 text-white bg-green-500 mt-5" type="submit" value="Update Craft Item" />

                </form>
            </div>
        </div>
    );
};

export default UpdateCard;