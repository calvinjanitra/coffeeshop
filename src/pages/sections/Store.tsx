import React from 'react';
import Images from 'next/image';

import { dataStore } from '@/components/data';
import Card from '@/components/Card';
import coffeeStoreData from '../../data/coffee-stores.json';

type fetchItem = {
    id: number;
    name: string;
    imgUrl: string;
    websiteUrl: string;
    address: string;
    neighbourhood: string;
};

type coffeeData = {
    data: fetchItem[];
};

export async function getStaticProps() {
    console.log('getstaticprops');
    return {
        props: {
            coffeeStore: coffeeStoreData,
        },
    };
}

const Store = (props: any) => {
    console.log('props', props);
    return (
        <section className='mb-[6rem]'>
            <div className='w-[85%] mx-auto h-fit bg-[#1F212F] rounded-2xl text-white'>
                <div className='flex flex-row justify-center gap-x-16 mb-8'>
                    {dataStore.map((item, index) => {
                        const { img1, img2, title, subtitle } = item;
                        return (
                            <div key={index} className='space-y-10 flex flex-col items-center text-center hover:scale-105 transition-all'>
                                <div className='relative pt-12'>
                                    <Images src={img1} width={200} height={200} alt='' />
                                    <Images src={img2} width={200} height={200} alt='' className='absolute top-0' />
                                </div>
                                <div className='space-y-2'>
                                    <h3 className='text-xl font-bold'>{title}</h3>
                                    <h4 className='text-gray-400 text-md'>{subtitle}</h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='px-4 py-4'>
                    {coffeeStoreData.length > 0 && (
                        <div>
                            <div className='text-[2.5rem] font-bold'>
                                <h3>Nearby Store</h3>
                            </div>
                            <div className='grid grid-cols-3 gap-x-8'>
                                {coffeeStoreData.map((item, index) => {
                                    const { id, name, imgUrl, websiteUrl, address, neighbourhood } = item;
                                    return (
                                        <div key={index}>
                                            <Card imgUrl={imgUrl} name={name} description='' location={address} href={`coffee-store/${id}`} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Store;
