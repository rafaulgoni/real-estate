

const Update = () => {
    return (
        <div>
            <div className="w-full dark:bg-gray-500 rounded-lg" style={{backgroundImage: 'url(https://i.ibb.co/XYkRckr/social-work.jpg)', backgroundPosition: 'center center;', backgroundBlendMode: "multiply", backgroundSize: "cover"}}>
                <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                    <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-800">Get Our Updates</h1>
                    <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-800">Find out about events and other property</p>
                    <div className="flex flex-row">
                        <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                        <button type="button" className=" rounded-r-lg w-2/5 p-3 font-semibold sm:w-1/3 dark:bg-violet-600 dark:text-gray-50 bg-[#F9A51A] border-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;