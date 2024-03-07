import emailjs from 'emailjs-com';
import Navbar from "./Header/navbar";
import { useLocation,} from "react-router-dom";
import { useState } from "react";

const Contact = () => {

  const [email, setEmail] = useState('');
  const location = useLocation();
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState ('');
  const [number, setNumber] = useState ('');
  const [message, setMessage] = useState ('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const templateParams = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        number: number,
        message: message,
    };
    emailjs.send(
      'service_t0mmzxm',
      'template_zpyvp5q',
      templateParams,
      'a5SikSpJjSDiomd52'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setLoading(false);
      });
    };

  return ( 
    <>
    <Navbar color={location.pathname} />
    <div className="bg-[#E0E0E0] min-h-screen">
        <div className="lg:pt-40 md:pt-40 pt-20 lg:pb-20 md:pb-16 pb-10 max-w-screen-lg mx-auto justify-center">
            <div className='bg-white lg:px-10 md:px-8 px-5 lg:py-10 py-5 lg:mx-0 md:mx-10 mx-4 border-[#403F68] border shadow-lg'>
                <div className='max-w-screen-2xl mx-auto align-middle pt-5'>
                    <div className='mx-auto'>
                        <h1 className='md:text-4xl text-2xl font-semibold'>
                            Contact Us
                        </h1>
                        <p className='text-[#949494] py-2'>
                            Send us a message, complaint or enquiry by filling the contact form below.
                        </p>
                    </div>
                </div>
                <div className='text-black py-2 mx-auto'>
                    <form onSubmit={handleSubmit}>
                        { !success && 
                        <div className='mx-auto'>
                            <div className='md:grid md:grid-cols-2 lg:gap-x-8 mx-auto justify-center'>
                                <div className='lg:py-3 md:py-3 py-2'>
                                    <h1 className='lg:py-2 md:py-2 justify-center'>
                                        First Name
                                    </h1>
                                    <input
                                        className='bg-[#f0f0f0] border mt-2 py-2 w-full px-4 mx-auto border-[#403F68] shadow-lg'
                                        type="text"
                                        value={first_name}
                                        required
                                        onChange={(event) => setFirst_name(event.target.value)}
                                    />
                                </div>
                                <div className='lg:py-3 md:py-3 py-2'>
                                    <h1 className='lg:py-2 md:py-2 justify-center'>
                                        Last Name
                                    </h1>
                                    <input
                                        className='bg-[#f0f0f0] border mt-2 py-2 w-full px-4 mx-auto border-[#403F68]'
                                        type="text"
                                        value={last_name}
                                        required
                                        onChange={(event) => setLast_name(event.target.value)}
                                    />
                                </div>
                                <div className='lg:py-3 md:py-3 py-2'>
                                    <h1 className='lg:py-2 md:py-2 justify-center'>
                                        Email Address
                                    </h1>
                                    <input
                                        className='bg-[#f0f0f0] border mt-2 py-2 w-full px-4 mx-auto border-[#403F68]'
                                        type="email"
                                        value={email}
                                        required
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>
                                <div className='lg:py-3 md:py-3 py-2'>
                                    <h1 className='lg:py-2 md:py-2 justify-center'>
                                        Phone Number
                                    </h1>
                                    <input
                                        className='bg-[#f0f0f0] border mt-2 py-2 w-full px-4 mx-auto border-[#403F68]'
                                        type="number"
                                        value={number}
                                        required
                                        onChange={(event) => setNumber(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='mt-5'>
                                <h1 className='py-2'>
                                    Message
                                </h1>
                                <textarea
                                    className='bg-[#f0f0f0] border pb-40 py-5 w-full px-4 mx-auto mt-2 overflow-y-hidden border-[#403F68]'
                                    type="message"
                                    id="message"
                                    value={message}
                                    required
                                    onChange={(event) => setMessage(event.target.value)}
                                />
                            </div>
                            <div className='items-center'>
                                <button className='bg-[#403F68] px-10 tracking-wider py-2 md:mt-10 mt-5 text-white' type="submit">
                                    {loading ? 'Loading...' : 'Submit'}
                                </button>
                            </div>
                        </div>}
                        {success && <p className='justify-center mx-auto font-semibold text-secondary pb-40'>Email sent successfully!</p>}
                    </form>
                </div>
            </div>
        </div>

    </div>
    </>
  );  
}

export default Contact;