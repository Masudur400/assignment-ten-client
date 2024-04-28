import { Link } from "react-router-dom";
import ClientReview from "../ClientReview/ClientReview";
import CraftItemsSection from "../CraftItemsSection/CraftItemsSection";
import Header from "../Header/Header";



const Home = () => {
    return (
        <div>
            <div className="mt-5 md:mt-10">
                <Header></Header>
            </div>

            <div className="mt-5 md:mt-10">
                <CraftItemsSection></CraftItemsSection>
            </div>

            <div className="mt-5 md:mt-10">
               
            </div>

            <div className="mt-5 md:mt-10">
                <ClientReview></ClientReview>
            </div>

        </div>
    );
};

export default Home;