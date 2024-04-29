import { useLoaderData } from "react-router-dom";
import SingleCraftCard from "../SingleCraftCard/SingleCraftCard";
import { Helmet } from "react-helmet";

 
const AllCardAndCrafe = () => {

    const allCraft = useLoaderData()

    return (
        <div className="mt-5 md:mt-10  min-h-screen md:px-5">
            <Helmet>
                <title>All Card & Craft</title>
            </Helmet>
            {
                allCraft.map(craft => <SingleCraftCard key={craft._id} craft={craft}></SingleCraftCard>)
            }
            {/* grid gap-10 md:grid-cols-2 lg:grid-cols-3 */}
        </div>
    );
};

export default AllCardAndCrafe;