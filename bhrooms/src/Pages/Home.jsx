import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import ListingItem from '../Components/ListingItem';
import Footer from '../Components/Footer';

function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=6')
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    }
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=6')
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    }
    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=6')
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchOfferListings();
  }, []);

  return (
    <div className='bg-slate-100'>
      {/* TOP */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>Find your next
          <span className=' text-slate-500'> perfect</span>
          <br />
          place with ease
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>Nihad Estate is the best place tot find your next perfect placet to live.
          <br />
          we have a wide range of properties for you to choose from.</div>
        <Link className='text-xs sm:text-sm text-blue-800 font-bold  hover:underline' to={'/search'}>
          Let's get started...
        </Link>
      </div>
      {/* SWIPER */}
      <Swiper navigation>
        {
          offerListings && offerListings.length > 0 && offerListings.map((listing) => (
            <SwiperSlide>
              <div style={{ background: `url(${listing.imageUrls[0]}) center no-repeat`, backgroundSize: "cover" }} className='h-[550px]' key={listing._id}></div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4 p-2 justify-between'>
              {
                offerListings.map((listing) => (
                  <div className='p-4'>
                    <ListingItem listing={listing} key={listing._id} />
                  </div>
                ))
              }
            </div>
          </div>
        )}
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {rentListings && rentListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4 p-3 justify-between '>
              {
                rentListings.map((listing) => (
                  <div className='p-4 '>
                    <ListingItem listing={listing} key={listing._id} />
                  </div>
                ))
              }
            </div>
          </div>
        )}
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {saleListings && saleListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-5 p-3 justify-between' >
              {
                saleListings.map((listing) => (
                  <div className='p-4'>
                    <ListingItem listing={listing} key={listing._id} />
                  </div>
                ))
              }
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Home
