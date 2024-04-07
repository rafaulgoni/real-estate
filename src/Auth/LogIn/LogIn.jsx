import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import 'animate.css';

const LogIn = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold animate__animated animate__swing">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn font-bold bg-[#F9A51A]">Login</button>
                            </div>
                        </form>
                        <div className="text-center p-3">
                            <p>Don’t have an account? <Link to='/register'><u className="font-bold text-[#F9A51A]">Create an account</u></Link></p>
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

export default LogIn;