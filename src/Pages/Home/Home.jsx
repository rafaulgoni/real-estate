import Banner from "../../Components/Banner/Banner";
import IntroCard from "../../Components/Intro/IntroCard";

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <div className=" relative">
                <Banner></Banner>
                <div className="absolute top-[90px] lg:left-8 z-10">
                    <IntroCard></IntroCard>
                </div>
            </div>
            
            <h1>Home</h1>
        </div>
    );
};

export default Home;