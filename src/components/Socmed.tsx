import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Socmed = () => {
    return (
        <section className='w-full h-[5rem] mb-6'>
            <div className='text-[2.5rem] flex flex-row  gap-x-8  h-full items-center'>
                <BsFacebook />
                <BsInstagram />
                <BsTwitter />
            </div>
        </section>
    );
};

export default Socmed;
