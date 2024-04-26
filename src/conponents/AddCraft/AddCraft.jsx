 
const AddCraft = () => {
    const handleAddCraft = e =>{
        e.preventDefault()
        const form = e.target

        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const newCoffee ={name, quantity, supplier, taste, category, details, photo}
         
        // send data to server 

    }

    return (
        <div>
            <div className="md:w-2/3 w-4/5 mx-auto shadow-lg bg-green-100  mt-5 md:mt-10 p-5 rounded-lg">
                <h3 className="text-lg font-bold text-center">Add Craft Item</h3>
                <form onSubmit={handleAddCraft}>
                        <div className="grid md:grid-cols-2 gap-5 mt-5">
                       

                        <div>
                        <p className="text-start">Item Name </p>
                        <input className="w-full border-2 px-4 py-2" type="text" placeholder="Item Name" name="itemName" id="" />
                        </div>

                        <div>
                        <p className="text-start">Subcategory Name </p>
                        <input className="w-full border-2 px-4 py-2" type="text" placeholder="Subcategory Name" name="subcategoryName" id="" />
                        </div>

                        <div>
                        <p className="text-start">Short Description </p>
                        <input className="w-full border-2 px-4 py-2" type="text" placeholder="Short Description" name="shortDescription" id="" />
                        </div>

                        <div>
                        <p className="text-start">Price </p>
                        <input className="w-full border-2 px-4 py-2" type="text" placeholder="Price" name="price" id="" />
                        </div>

                        <div>
                        <p className="text-start">Rating </p>
                        <input className="w-full border-2 px-4 py-2" type="text" placeholder="Rating" name="rating" id="" />
                        </div>
                        <div>
                        <p className="text-start">Customization </p>
                        <input className="w-full border-2 px-4 py-2" type="text" placeholder="Customization" name="customization" id="" />
                        </div>
                        <div>
                        <p className="text-start"> Processing Time </p>
                        <input className="w-full border-2 px-4 py-2" type="text" placeholder="Processing Time" name=" processingTime" id="" />
                        </div>
                        <div>
                        <p className="text-start">Stock Status </p>
                        <input className="w-full border-2 px-4 py-2" type="text" placeholder="Stock Status" name="stockStatus" id="" />
                        </div>
                        <div>
                        <p className="text-start">User Email </p>
                        <input className="w-full border-2 px-4 py-2" type="text" placeholder="Email" name="email" id="" />
                        </div>
                        <div>
                        <p className="text-start">User Name </p>
                        <input className="w-full border-2 px-4 py-2" type="text" placeholder="User Name" name="name" id="" />
                        </div>

                        </div>

                        <div>
                        <p className="text-start">Image </p>
                        <input className="w-full border-2 px-4 py-2" type="text" placeholder="Image URL" name="photo" id="" />
                        </div>
                        

                        <input className="w-full py-2 mb-6 bg-green-500 mt-5" type="submit" value="Add Craft Item" />

                </form>
            </div>
        </div>
    );
};

export default AddCraft;