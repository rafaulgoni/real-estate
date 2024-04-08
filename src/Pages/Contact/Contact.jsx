import 'animate.css';

const Contact = () => {
    return (
        <div className=" border-b-2 border-[#F9A51A] p-4 space-y-3">
            <h1 className=" text-5xl font-extrabold animate__animated animate__flash">Contact Us</h1>
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                <input className=" p-4 border w-full rounded-lg animate__animated animate__backInLeft" type="text"  placeholder="name"/>
                <input className=" p-4 border w-full rounded-lg animate__animated animate__backInUp" type="email"  placeholder="email"/>
                <input className=" p-4 border w-full rounded-lg animate__animated animate__backInUp" type="number" placeholder="number"/>
                <input type="submit" className="border w-full rounded-lg animate__animated animate__backInRight bg-[#F9A51A] font-bold" />
            </div>
        </div>
    );
};

export default Contact;