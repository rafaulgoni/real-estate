

const Agent = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Meet Our Agents</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">

                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={'https://i.ibb.co/T0bwL4b/agent-three0.jpg'} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">John Michael Smith</h2>
                        <p className="text-[#F9A51A]">Leader Houzing</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={'https://i.ibb.co/Cbx9YRZ/agent1-four.png'} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Emily Anne Parker</h2>
                        <p className="text-[#F9A51A]">Estate Agents</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={'https://i.ibb.co/5RGhYYT/agent-one.jpg'} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">David William Johnson</h2>
                        <p className="text-[#F9A51A]">Leader Houzing</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={'https://i.ibb.co/xSpKT2h/agent-two-removebg-preview.png'} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Michael James Anderson</h2>
                        <p className="text-[#F9A51A]">Leader Houzing</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Agent;