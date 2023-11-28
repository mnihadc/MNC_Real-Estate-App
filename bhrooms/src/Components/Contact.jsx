import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Contact({ listing }) {
    const [landlord, setLandlord] = useState(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setMessage(e.target.value);
    }
    useEffect(() => {
        const fetchLandlord = async () => {
            try {
                setLoading(true);
                setError(false);
                const res = await fetch(`/api/user/${listing.userRef}`);
                const data = await res.json();
                if (data.success === false) {
                    setError(data.message);
                }
                setLandlord(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchLandlord();
    }, [listing.userRef])
    return (
        <>
            {landlord && (
                <div className='flex flex-col gap-2'>
                    <p>Contact <span className='font-semibold'>{landlord.username}</span> for <span className='font-semibold'>{listing.name.toLowerCase()}</span></p>
                    <textarea name="message" id="message" rows="2" value={message} onChange={handleChange} placeholder='Enter your message here...' className='w-full border p-3 rounded-lg' ></textarea>
                    <Link to={`mailto:${landlord.email}?subject=regarding ${listing.name}&body=${message}`} className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95' >
                        {loading ? 'Loading...' : 'Send Message'}
                    </Link>
                </div>
            )}
            {error && <p className='text-red-700 text-sm'>{error}</p>}
        </>
    )
}
export default Contact
