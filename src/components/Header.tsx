import React from 'react';
import Image from 'next/image';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import Link from 'next/link';
//import data
import { headerdata } from './data';

//import another component
import Input from './Input';

const header = () => {
    const { title, src } = headerdata;
    return (
        <section className='text-black w-full h-[6rem] flex item-center pt-4'>
            <div className='w-[85%] mx-auto flex flex-row justify-between'>
                <div className='flex flex-row gap-x-2 items-center'>
                    <Link href='#' className='flex flex-row items-center gap-x-2'>
                        <Image src={src} alt='logo' width={90} height={40} />
                        <h3 className='font-extrabold'>{title}</h3>
                    </Link>
                </div>
                <div className='flex flex-row gap-x-10'>
                    {headerdata.subtitle.map((item, index) => {
                        return (
                            <a href={item.href} key={index} className='flex flex-col justify-center'>
                                <h3>{item.name}</h3>
                            </a>
                        );
                    })}
                </div>
                <div className='flex flex-row items-center gap-x-4'>
                    <Input />
                    <Link href='#'>
                        <HiOutlineShoppingBag className='text-3xl' />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default header;
