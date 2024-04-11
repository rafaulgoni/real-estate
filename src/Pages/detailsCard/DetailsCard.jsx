import { Helmet } from 'react-helmet-async';
import { FaMapLocationDot } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
import { useParams } from "react-router-dom";


const DetailsCard = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const newsDetails = details.find(newDetails => newDetails.id == id);

    return (
        <div>
            <Helmet>
                <title>Luxe Havens | Details</title>
            </Helmet>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={newsDetails.image} alt="Album" /></figure>
                <div className="card-body">
                    <p className='font-bold text-xl'>{newsDetails.estate_title}</p>
                    <h2 className="card-title text-3xl">{newsDetails.segment_name}</h2>
                    <p><span className='font-bold text-xl'>Description:</span> {newsDetails.description}</p>
                    <hr className=' border-dashed' />
                    <p className='flex items-center gap-2 text-[#F9A51A]'><FaMapLocationDot></FaMapLocationDot>{newsDetails.location}</p>
                    <div className=' flex gap-4'>
                        <p className='text-lg text-[#F9A51A]'><span className='font-bold'>Status:</span> {newsDetails.status}</p>
                        <p className='text-lg text-[#F9A51A]'><span className='font-bold'>Price:</span> {newsDetails.price}</p>
                    </div>
                    <hr className=' border-dashed' />
                    <p><span className='font-bold text-xl'>Area:</span> <span className='font-bold'>{newsDetails.area}</span></p>
                    <div>
                    <p><span className='font-bold text-xl'>Facilities:</span> <span className='font-bold'>{newsDetails.facilities[0]}</span> {`,`} <samp className='font-bold'>{newsDetails.facilities[1]}</samp> {`,`} <span className='font-bold'>{newsDetails.facilities[2]}</span></p>
                    </div>
                    <div className="card-actions">
                        <Link to='/' className="btn bg-[#F9A51A] btn-sm w-full">Buy Property</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;