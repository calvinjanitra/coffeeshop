import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Hero from './sections/Hero';
import Store from './sections/Store';
import coffeeData from '../data/coffee-stores.json';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Store data={coffeeData} />
            <Footer />
        </div>
    );
}
