import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <Helmet>
                <title>Luxe Havens | Error</title>
            </Helmet>
            <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-600">But do not worry, you can find plenty of other things on our homepage.</p>
                        <Link to='/' className="px-8 py-3 font-semibold rounded bg-[#F9A51A]">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;