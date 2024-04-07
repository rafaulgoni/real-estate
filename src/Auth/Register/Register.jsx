import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'animate.css';

const Register = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold animate__animated animate__bounce">Create an account</h1>
                        <p className="py-2 max-w-[500px]">Kindly provide your personal information to create an account by filling out the registration form. Your details will be used to set up your account and facilitate your access to our platform.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Enter your photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Confirm password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#F9A51A] font-bold">Register</button>
                            </div>
                        </form>
                        <div className="text-center p-3">
                            <p>Already have an account? <Link to='/login'><u className="font-bold text-[#F9A51A]">Login</u></Link></p>
                        </div>
                    </div>
                    <div className=" space-y-2">
                        <div className="divider">Or</div>
                        <button className="border border-blue-800 btn w-full text-blue-600 font-bold"><FaGoogle/>Continue with Google</button>
                        <button className="border border-black btn w-full font-bold"><FaGithub/>Continue with Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;