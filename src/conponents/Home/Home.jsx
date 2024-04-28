import ClientReview from "../ClientReview/ClientReview";
import Header from "../Header/Header";



const Home = () => {
    return (
        <div>
            <div className="mt-5 md:mt-10">
                <Header></Header> 
            </div>
            <div className="mt-5 md:mt-10">
                <ClientReview></ClientReview>
            </div>
        </div>
    );
};

export default Home;