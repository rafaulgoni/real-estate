import PropTypes from 'prop-types';
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const { segment_name, estate_title, image, location, status, id } = card;
    return (
        <div className='w-full'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-60' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <div className=' flex justify-around'>
                        <p className='text-[#F9A51A]'>{status}</p>
                        <p className='text-[#F9A51A] flex gap-1 items-center'><FaMapLocationDot></FaMapLocationDot>{location}</p>
                    </div>
                    <h2 className="card-title">{segment_name}</h2>
                    <p>{estate_title}</p>
                    <div className="card-actions justify-end">
                         <Link to={`/details/${id}`} className="btn bg-[#F9A51A] w-full btn-sm">View Property</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

Card.propTypes = {
    card: PropTypes.node
}