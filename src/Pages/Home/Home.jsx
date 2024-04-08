import Agent from "../../Components/Agents/Agent";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import Discount from "../../Components/Discount/Discount";
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
            <div className="mt-10">
                <Discount></Discount>
            </div>
            <div>
                <Card></Card>
            </div>
            <div className="mt-10">
                <Agent></Agent>
            </div>
        </div>
    );
};

export default Home;