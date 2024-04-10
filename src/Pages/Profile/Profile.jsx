import { IoCallOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";

const Profile = () => {
    return (
        <div>
            <div className="card max-w-[450px] bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10">
                    <img src={'https://i.ibb.co/0G1BfzS/rafaul.jpg'} alt="Shoes" className=" w-72 h-72 rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className=" text-2xl font-bold">Rafaul Goni Ansari</h2>
                    <p>Bio</p>
                    <div>
                        <hr className=" border-dashed" />
                        <h1 className=" flex items-center gap-2 font-bold"><IoCallOutline></IoCallOutline> 01741-346935</h1>
                        <h1 className=" flex items-center gap-2 font-bold"><IoMailOpenOutline></IoMailOpenOutline> rafaulgoni787898@gmail.com</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;