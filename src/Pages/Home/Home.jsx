import Agent from "../../Components/Agents/Agent";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import Discount from "../../Components/Discount/Discount";
import IntroCard from "../../Components/Intro/IntroCard";
import { useLoaderData } from 'react-router-dom'
import Gallery from "../../Components/gallery/Gallery";
import Update from "../../Components/Update/Update";
import { Helmet } from "react-helmet-async";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Home = () => {

    const card = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Luxe Havens | Home</title>
            </Helmet>
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
                <h1 data-aos="fade-down" data-aos-duration="1000" className=" text-center text-5xl font-bold mb-5">View Property</h1>
                <div data-aos="fade-up" data-aos-delay="1300" className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-5">
                    {
                        card.map(aCard => <Card
                            key={aCard.id}
                            card={aCard}>
                        </Card>)
                    }
                </div>
            </div>
            <div className="mt-10">
                <Gallery></Gallery>
            </div>
            <div className="mt-10">
                <Agent></Agent>
            </div>
            <div>
                <Update></Update>
            </div>
        </div>
    );
};

export default Home;