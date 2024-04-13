import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init(); 

const Discount = () => {
    return (
        <div className=" text-center space-y-2">
           <h1 data-aos="zoom-out-up" data-aos-delay="2400" className="text-5xl font-bold text-[#F9A51A]">20% OFF</h1> 
           <p data-aos="fade-right" data-aos-delay="2600" className="text-[#F9A51A]">Living a life of luxury, draped in opulence and extravagance.</p>
           <h3 data-aos="fade-left" data-aos-delay="2800" className="text-3xl font-bold max-w-[500px] mx-auto">EXPERIENCE UNPARALLELED LUXURY WITH IRRESISTIBLE DISCOUNTS.</h3>
           <div className="flex items-center justify-center">
                <img data-aos="zoom-in" data-aos-duration="1000" src={'https://i.ibb.co/qRQxWy6/world-removebg-preview.png'} alt="" />
           </div>
        </div>
    );
};

export default Discount;