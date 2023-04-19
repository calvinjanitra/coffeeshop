import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoLocation } from 'react-icons/go';
interface CardProps {
    imgUrl: string;
    name: string;
    description: string;
    location: string;
    href: string;
}

const Card = ({ imgUrl, name, description, location, href }: CardProps) => {
    return (
        <div className='h-[300px] flex flex-row justify-between bg-[#c6b09a] text-white rounded-xl overflow-hidden'>
            <div className='w-full'>
                <Image src={imgUrl} alt='' height={200} width={200} />
            </div>
            <div className='flex flex-col w-full py-4 pl-2 justify-center'>
                <div className='h-1/4'>
                    <h3 className='text-xl font-bold'>{name}</h3>
                </div>

                <div className='h-1/3'>
                    <div className='flex flex-row items-center gap-x-2'>
                        <GoLocation className='text-white' />
                        <h3 className='text-lg font-bold'>Location</h3>
                    </div>
                    <p className='text-sm text-gray-200'>{location}</p>
                </div>
                <Link href={href}>
                    <button className='py-2 w-[50%] border-2 hover:bg-[#9c7b5a] transition-all rounded-md'>Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Card;
