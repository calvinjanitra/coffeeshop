import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    imgUrl: string;
    name: string;
    description: string;
    location: string;
    href: string;
}

const Card = ({ imgUrl, name, description, location, href }: CardProps) => {
    return (
        <div className='h-[300px] flex flex-row justify-between bg-[#F2EBE6] text-black rounded-xl overflow-hidden'>
            <div className='w-full'>
                <Image src={imgUrl} alt='' height={200} width={200} />
            </div>
            <div className='flex flex-col w-full py-4 pl-2'>
                <div className='h-1/4'>
                    <h3 className='text-xl font-bold'>{name}</h3>
                </div>
                <div className='h-1/3'>
                    <h3 className='text-lg'>Description</h3>
                    <p>{description}</p>
                </div>
                <div className='h-1/3'>
                    <h3 className='text-lg'>Location</h3>
                    <p className='text-sm'>{location}</p>
                </div>
                <Link href={href}>
                    <button className='py-2 w-[50%] border-2'>Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Card;
