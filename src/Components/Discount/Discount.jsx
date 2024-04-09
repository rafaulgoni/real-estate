import 'animate.css';

const Discount = () => {
    return (
        <div className=" text-center space-y-2">
           <h1 className="text-5xl font-bold text-[#F9A51A] animate__animated animate__bounce">20% OFF</h1> 
           <p className="text-[#F9A51A] animate__animated animate__backInLeft">Living a life of luxury, draped in opulence and extravagance.</p>
           <h3 className="text-3xl font-bold max-w-[500px] mx-auto animate__animated animate__backInRight">EXPERIENCE UNPARALLELED LUXURY WITH IRRESISTIBLE DISCOUNTS.</h3>
           <div className="flex items-center justify-center animate__animated animate__backInUp">
                <img src={'https://i.ibb.co/qRQxWy6/world-removebg-preview.png'} alt="" />
           </div>
        </div>
    );
};

export default Discount;