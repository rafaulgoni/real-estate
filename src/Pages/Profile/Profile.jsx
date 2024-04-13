import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import 'animate.css';

const Profile = () => {
    const { user, updateUserProfile } = useContext(AuthContext)

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name, photo);
        updateUserProfile(name, photo)
            .then(() => {
                e.target.reset()
                toast("Update successful, please refresh yor page!")
            })
            .catch()
    }
    return (
        <div>
            <Helmet>
                <title>Luxe Havens | Profile</title>
            </Helmet>
            {
                user ? <div className="grid items-center justify-center">
                <ToastContainer />
                <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        {
                            user ? <img src={user?.photoURL} alt="" className=" object-cover object-center w-full h-full rounded dark:bg-gray-500" /> : ""
                        }
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            {
                                user ? <li className="text-2xl font-semibold">{user?.displayName}</li> : ""
                            }
                            <span className="text-sm dark:text-gray-600">Bio...</span>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                    <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                </svg>
                                {
                                    user ? <span className="dark:text-gray-600">{user.email}</span> : ""
                                }
                            </span>
                        </div>
                    </div>
                </div>

                <div className="hero">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Update your profile</h1>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleProfileUpdate} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn bg-[#F9A51A]">Update Profile</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
            : 
            <div className="animate__animated animate__swing text-center">
                <div className="grid justify-center">
                <h1 className=" text-5xl"><FaLock></FaLock></h1>
                </div>
                <h1 className="text-3xl font-bold">Boss login first then update your profile.</h1>
                <Link to="/login" className=" btn bg-[#F9A51A]">Go to LogIn</Link>
            </div>
            }
        </div>
    );
};

export default Profile;