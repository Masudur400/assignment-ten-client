
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


const AddCraft = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate()



    const handleAddCraft = e => {
        e.preventDefault()
        const form = e.target
        const name = user.name
        const itemName = form.itemName.value
        const subcategoryName = form.subcategoryName.value
        const shortDescription = form.shortDescription.value
        const price = form.price.value
        const rating = form.rating.value
        const customization = form.customization.value
        const processingTime = form.processingTime.value
        const stockStatus = form.stockStatus.value
        const email = form.email.value
        const photo = form.photo.value
        const itemType = form.itemType.value

        const newCraft = { name, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, itemType, email, photo }

        console.log(newCraft)

        // send data to server 

        fetch('https://painting-and-drawing-server-nu.vercel.app/craft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Added craft successfully!",
                        icon: "success"
                    });
                    navigate('/myCraftList')
                }
            })

    }

    return (
        <div>
            <Helmet>
                <title>Add Card & Craft</title>
            </Helmet>
            <div data-aos="flip-left" className="md:w-2/3 w-4/5 mx-auto shadow-lg bg-green-100 text-black mt-5 md:mt-10 p-5 rounded-lg">
                <h3 className="text-lg font-bold text-center">Add Craft Item</h3>
                <form onSubmit={handleAddCraft}>
                    <div className="grid md:grid-cols-2 gap-5 mt-5">


                        <div>
                            <p className="text-start">Item Name </p>
                            <input className="w-full border-2 px-4 py-3 rounded-lg" type="text" placeholder="Item Name" name="itemName" id="" />
                        </div>

                        <div>
                            <p className="text-start">Subcategory Name </p>
                            <input className="w-full border-2 px-4 py-3 rounded-lg" type="text" placeholder="Subcategory Name" name="subcategoryName" id="" />
                        </div>

                        <div>
                            <p className="text-start">Short Description </p>
                            <input className="w-full border-2 px-4 py-3 rounded-lg" type="text" placeholder="Short Description" name="shortDescription" id="" />
                        </div>

                        <div>
                            <p className="text-start">Price </p>
                            <input className="w-full border-2 px-4 py-3 rounded-lg" type="text" placeholder="Price" name="price" id="" />
                        </div>

                        <div>
                            <p className="text-start">Rating </p>
                            <input className="w-full border-2 px-4 py-3 rounded-lg" type="text" placeholder="Rating" name="rating" id="" />
                        </div>
                        <div>
                            <p className="text-start">Customization </p>
                            <select className="select   w-full  " name="customization">
                                <option disabled selected>Customization</option>
                                <option>no</option>
                                <option>yes</option>
                            </select>
                            {/* <input className="w-full border-2 px-4 py-2" type="text" placeholder="Customization" name="customization" id="" /> */}
                        </div>
                        <div>
                            <p className="text-start"> Processing Time </p>
                            <input className="w-full border-2 px-4 py-3 rounded-lg" type="text" placeholder="Processing Time" name="processingTime" id="" />
                        </div>
                        <div>
                            <p className="text-start">Stock Status </p>
                            <select className="select   w-full  " name="stockStatus">
                                <option disabled selected>Stock Status</option>
                                <option>In Stock</option>
                                <option>Made to Order</option>
                            </select>
                            {/* <input className="w-full border-2 px-4 py-2" type="text" placeholder="Stock Status" name="stockStatus" id="" /> */}
                        </div>
                        <div>
                            <p className="text-start">User Email </p>
                            <input className="w-full border-2 px-4 py-3 rounded-lg" type="email" placeholder="Email" defaultValue={user.email} name="email" id="" />
                        </div>
                        <div>
                            <p className="text-start">User Name </p>
                            <input className="w-full border-2 px-4 py-3 rounded-lg" type="text" placeholder="User Name" defaultValue={user?.displayName} name="name" id="" />
                        </div>

                        <div>
                            <p className="text-start">Image </p>
                            <input className="w-full border-2 px-4 py-3 rounded-lg" type="text" placeholder="Image URL" name="photo" id="" />
                        </div>

                        <div>
                            <p className="text-start">Item Type</p>
                            <select className="select   w-full  " name='itemType'>
                                <option disabled selected>select item type</option>
                                <option>Art</option>
                                <option>Craft</option>
                            </select>
                        </div>

                    </div>




                    <input className="w-full py-2 mb-6 font-bold hover:bg-green-400 text-white bg-green-500 mt-5" type="submit" value="Add Craft Item" />

                </form>
            </div>
        </div>
    );
};

export default AddCraft;