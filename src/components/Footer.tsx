import React from 'react';
import Socmed from './Socmed';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import Image from 'next/image';

const Footer = () => {
    return (
        <section className='w-full bg-[#c3bdbd] h-[20rem]'>
            <div className='w-[85%] mx-auto'>
                <Socmed />
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-x-[6rem] w-full'>
                        <div className='space-y-4'>
                            <h3 className='font-semibold'>ABOUT US</h3>
                            <div className='space-y-[0.3rem]'>
                                <h4>Our Heritage</h4>
                                <h4>Pressroom</h4>
                                <h4>Our Company</h4>
                                <h4>Carreer Center</h4>
                                <h4>Newsroom</h4>
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <h3 className='font-semibold'>CUSTOMER SERVICE</h3>
                            <h4>Frequently Asked Questions</h4>
                        </div>
                        <div className='space-y-4'>
                            <h3 className='font-semibold'>QUICK LINKS</h3>
                            <div className='space-y-[0.3rem]'>
                                <h4>Store Locator</h4>
                                <h4>For Partners</h4>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full flex flex-col justify-center items-end'>
                        <Image src='/starbucklogo.png' alt='' width={200} height={50} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
