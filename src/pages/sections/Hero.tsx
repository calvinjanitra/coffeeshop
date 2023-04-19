import React from 'react';
import Button from '@/components/Button';
import Image from 'next/image';

//import data
import { dataHero } from '@/components/data';

const Hero = () => {
    const { title, subtitle, bg1, bg2, ass1, price } = dataHero;
    return (
        <main className='w-full h-fit mb-20'>
            <section className='w-[85%] mx-auto mt-14 flex flex-row justify-between relative'>
                <div className='flex flex-col gap-y-8'>
                    <h2 className='text-[4rem] font-extrabold w-2/5'>
                        Midnight <span className='text-pink-600'>Frappucino</span>
                    </h2>
                    <h3 className='text-xl text-[#6A6866] w-2/6'>{subtitle}</h3>
                    <h2 className='text-[2rem] font-bold'>{price}</h2>
                    <Button />
                </div>
                <div className='flex flex-col max-h-full justify-center gap-y-8 w-1/5'>
                    {dataHero.card.map((item, index) => {
                        const { src, head, sub } = item;
                        return (
                            <div className='flex flex-row items-center gap-x-8' key={index}>
                                <Image src={src} alt='tag' width={80} height={80} />
                                <div className='flex flex-col'>
                                    <h3 className='font-bold text-xl'>{head}</h3>
                                    <h3 className='text-[#6A6866] w-[90%]'>{sub}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='absolute left-1/2 w-fit -translate-x-1/2 top-[2rem]'>
                    <Image src={bg1} alt='bg' width={400} height={100} />
                </div>
                <div className='absolute left-1/2 w-fit -translate-x-1/2 top-1/2 -translate-y-2/3'>
                    <Image src={ass1} alt='bg' width={220} height={100} />
                </div>
                <div className='absolute left-1/2 w-fit -translate-x-3/4 bottom-[20%]'>
                    <Image src={bg2} alt='bg' width={300} height={100} />
                </div>
            </section>
        </main>
    );
};

export default Hero;
