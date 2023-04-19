import React from 'react';
import { useRouter } from 'next/router';
import coffeeStoresData from '../../data/coffee-stores.json';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { FiExternalLink } from 'react-icons/fi';

export function getStaticProps(staticProps: any) {
    const params = staticProps.params;
    return {
        props: {
            coffeeStore: coffeeStoresData.find((coffeeStore) => {
                return coffeeStore.id.toString() === params.id;
            }),
        },
    };
}

export function getStaticPaths() {
    const paths = coffeeStoresData.map((coffeeStore) => {
        return {
            params: {
                id: coffeeStore.id.toString(),
            },
        };
    });
    return {
        paths,
        fallback: false,
    };
}

const Coffeestore = (props: any) => {
    const router = useRouter();
    const p = router.query.id;
    console.log('props', props);

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const { imgUrl, address, neighbourhood, name, description } = props.coffeeStore;

    return (
        <div>
            <Head>
                <title>{name}</title>
            </Head>
            <div className='w-4/5 mx-auto min-h-screen flex flex-col justify-center'>
                <div className='w-full h-[40rem] bg-[#FFFDFB97] backdrop-blur-xl grid grid-cols-3 rounded-xl overflow-hidden px-4'>
                    <div className='overflow-hidden'>
                        <Image src={imgUrl} alt='' width={700} height={600} />
                    </div>
                    <div className='border-2 border-solid text-[2.5rem]'>
                        <Link href='/'>
                            <IoArrowBackCircleOutline />
                        </Link>
                    </div>
                    <div className='flex flex-col gap-y-8'>
                        <div>
                            <h2 className='text-[3rem] font-bold'>{name}</h2>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='text-2xl font-bold'>About Us</h3>
                            <p>{description}</p>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='text-2xl font-bold'>Address</h3>
                            <p>{address}</p>
                        </div>
                        <div>
                            <button className='py-2 w-[55%] border-2 border-gray-300 hover:bg-[#9c7b5a] transition-all rounded-md flex flex-row items-center gap-x-2 justify-center'>
                                <h3 className='font-bold'>Go to Store Website</h3>
                                <FiExternalLink />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffeestore;
