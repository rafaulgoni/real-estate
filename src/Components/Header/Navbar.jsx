import { Link, NavLink } from "react-router-dom";
import 'animate.css';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>

        <li><NavLink to='/' className={({ isActive }) => isActive ? ' font-bold border-2 p-2 rounded-xl border-[#F9A51A]' : 'font-family'}>Home</NavLink></li>
        <li><NavLink to='/contact' className={({ isActive }) => isActive ? ' font-bold border-2 p-2 rounded-xl border-[#F9A51A]' : 'font-family'}>Contact Us</NavLink></li>

        {
            user && <>
                <li><NavLink to='/review' className={({ isActive }) => isActive ? ' font-bold border-2 p-2 rounded-xl border-[#F9A51A]' : 'font-family'}>Review</NavLink></li>
            </>
        }
        <li><NavLink to='/profile' className={({ isActive }) => isActive ? ' font-bold border-2 p-2 rounded-xl border-[#F9A51A]' : 'font-family'}>Update Profile</NavLink></li>

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <h1 className=" text-xl lg:text-2xl font-bold animate__animated animate__swing">Luxe Haven<span className=" text-[#F9A51A]">{`'`}</span>s</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex space-x-4 px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user ? <img src={user?.photoURL} alt="" /> : ""
                            }
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        {
                            user ? <li className="font-bold">{user?.displayName}</li> : ""
                        }
                    </ul>
                </div>
                {
                    user ? <button onClick={handleSignOut} className="btn btn-sm font-bold bg-[#F9A51A]">Log Out</button> : <Link to='/login'><button className="btn btn-sm font-bold bg-[#F9A51A]">Log In</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;