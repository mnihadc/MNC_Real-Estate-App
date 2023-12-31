import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

function ListingItem({ listing }) {
    return (
        <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg sm:w-[280px]'>
            <Link to={`/listing/${listing._id}`}>
                <img src={listing.imageUrls[0]} alt="listing cover" className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 translate-scale duration-300' />
                <div className='p-3 flex flex-col gap-2 w-full'>
                    <p className='truncate text-lg font-semibold text-slate-700 '>{listing.name}</p>
                    <div className='flex items-center gap-1'>
                        <MdLocationOn className='h-4 w-4 text-green-700' />
                        <p className='text-sm text-gray-600 truncate w-full'>{listing.address}</p>
                    </div>
                    <p className='text-sm text-gray-600 line-clamp-2'>{listing.description}</p>
                    <div className='flex gap-1 items-center'>
                        <p className='text-slate-500 mt-2 font-semibold'>${' '} ${+listing.regularPrice - +listing.discountPrice}{listing.type === 'rent' && '/ month'} <span className='uppercase items-center text-slate-600'>-off</span></p>
                        {listing.offer && <p className='text-gray-700 items-center' style={{ textDecoration: 'line-through', fontSize: '13px' }}>{'$'}{listing.regularPrice}</p>}
                    </div>
                    <div className='text-slate-700 flex gap-4 justify-center'>
                        <div className='font-bold text-xs' >{listing.bedrooms > 1 ? `${listing.bathrooms} beds` : `${listing.bedrooms} bed`}</div>
                        <div className='font-bold text-xs' >{listing.bathrooms > 1 ? `${listing.bathrooms} baths` : `${listing.bathrooms} bath`}</div>
                    </div>
                </div>
            </Link>
        </div>
    )

}

export default ListingItem
