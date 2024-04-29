
import ClientReview from "../ClientReview/ClientReview";
import CraftItemsSection from "../CraftItemsSection/CraftItemsSection";
import Header from "../Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import { Link } from "react-router-dom";
import p1 from '../../assets/images/landScape.jpg';
import p2 from '../../assets/images/Oil Painting.jpg';
import p3 from '../../assets/images/Charcoal Sketching.jfif';
import p4 from '../../assets/images/Cartoon Drawing.jfif';
import p5 from '../../assets/images/Watercolour Painting.jpg';
import p6 from '../../assets/images/Portrait Drawing.jfif';



const Home = () => {
    return (
        <div>
            <div className="mt-5 md:mt-10">
                <Header></Header>
            </div>

            <div className="mt-5 md:mt-10">
                <CraftItemsSection></CraftItemsSection>
            </div>

            <div className="mt-14">
                <h3 className="text-2xl font-extrabold text-center my-9">Art & Craft Categories</h3>
                <p className="md:w-1/3 mx-auto my-7 text-justify">Painting involves applying pigment to a surface, typically canvas, paper, or wood, to create images or express ideas. It encompasses various painting mediums such as oil, acrylic, watercolor, gouache, and encaustic, each with its own unique characteristics and techniques.</p>
                <div className="mt-5 md:mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-5">
                    <div className="p-5 shadow-md rounded-md">
                        <div className="flex justify-center items-center">
                            <img className="w-[300px] h-[200px] border" src={p1} alt="" />
                        </div>
                        <h2 className="text-2xl font-bold text-center my-5">Landscape Categories</h2>
                        <p className="mb-4 text-justify">Landscape painting is a genre of art that focuses on depicting natural scenery, such as mountains, valleys, rivers, forests, and skies. Its one of the oldest and most enduring forms of art, with a rich history spanning centuries and cultures worldwide.</p>
                        <Link to='/categoriesSection'><button className="bg-green-500 font-bold px-4 py-2 rounded-md w-full text-white">Show all</button></Link>
                    </div>

                    <div className="p-5 shadow-md rounded-md">
                        <div className="flex justify-center items-center">
                            <img className="w-[300px] h-[200px] border" src={p6} alt="" />
                        </div>
                        <h2 className="text-2xl font-bold text-center my-5">Portrait Categories</h2>
                        <p className="mb-4 text-justify">Portrait drawing can be done using various materials and techniques. Common drawing mediums include graphite pencils, charcoal, ink, pastels, and conte crayons. Artists may also use different surfaces such as paper, canvas, or even digital platforms. </p>
                        <Link to='/portrait'><button className="bg-green-500 font-bold px-4 py-2 rounded-md w-full text-white">Show all</button></Link>
                    </div>

                    <div className="p-5 shadow-md rounded-md">
                    <div className="flex justify-center items-center">
                            <img className="w-[300px] h-[200px] border" src={p5} alt="" />
                        </div>
                        <h2 className="text-2xl font-bold text-center my-5">WaterColour Categories</h2>
                        <p className="mb-4 text-justify">Watercolor paint consists of pigments suspended in a water-soluble binder, usually gum arabic. Unlike oil or acrylic paint, watercolor paint remains translucent, allowing light to pass through the layers and giving the painting a luminous quality. </p>
                        <Link to='/WaterColour'><button className="bg-green-500 font-bold px-4 py-2 rounded-md w-full text-white">Show all</button></Link>
                    </div>

                    <div className="p-5 shadow-md rounded-md">
                    <div className="flex justify-center items-center">
                            <img className="w-[300px] h-[200px] border" src={p2} alt="" />
                        </div>
                        <h2 className="text-2xl font-bold text-center my-5">OilPainting Categories</h2>
                        <p className="mb-4 text-justify">Oil paint consists of pigments suspended in a drying oil, usually linseed oil. The slow drying time of oil paint allows artists to work with the colors for an extended period, making it possible to blend, layer, and manipulate the paint on the canvas. </p>
                        <Link to='/oilPainting'><button className="bg-green-500 font-bold px-4 py-2 rounded-md w-full text-white">Show all</button></Link>
                    </div>

                    <div className="p-5 shadow-md rounded-md">
                    <div className="flex justify-center items-center">
                            <img className="w-[300px] h-[200px] border" src={p3} alt="" />
                        </div>
                        <h2 className="text-2xl font-bold text-center my-5">Charcoal Sketching Categories</h2>
                        <p className="mb-4 text-justify">Charcoal is a drawing material made from burnt wood, typically from willow or vine. It comes in various forms, including sticks, pencils, and powder. Charcoal is prized for its rich, dark tones and its ability to create bold, expressive marks on paper. </p>
                        <Link to='/charcoalSketching'><button className="bg-green-500 font-bold px-4 py-2 rounded-md w-full text-white">Show all</button></Link>
                    </div>

                    <div className="p-5 shadow-md rounded-md">
                    <div className="flex justify-center items-center">
                            <img className="w-[300px] h-[200px] border" src={p4} alt="" />
                        </div>
                        <h2 className="text-2xl font-bold text-center my-5">Cartoon Drawing Categories</h2>
                        <p className="mb-4 text-justify">Exaggeration is a key element of cartoon drawing. Cartoonists often exaggerate certain features or aspects of their subjects to create humor, convey emotion, or make a point. Exaggeration can range from subtle distortions to extreme caricatures </p>
                        <Link to='/cartoonDrawing'><button className="bg-green-500 font-bold px-4 py-2 rounded-md w-full text-white">Show all</button></Link>
                    </div>
                </div>
            </div>

            <div className="mt-5 md:mt-10">
                <ClientReview></ClientReview>
            </div>

            <div className="mt-5 md:mt-10">
                <AboutUs></AboutUs>
            </div>

        </div>
    );
};

export default Home;