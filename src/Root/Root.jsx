import Navbar from '../Components/Header/Navbar'
import { Outlet } from "react-router-dom";
import Footer from '../Components/Footer/Footer'

const Root = () => {
    return (
        <div>
            <div className='container mx-auto mb-10'>
                <Navbar></Navbar>
            </div>

            <div className=' container mx-auto'>
                <Outlet></Outlet>
            </div>
            
            <div className='mt-10'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;