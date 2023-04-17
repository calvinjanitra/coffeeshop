import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Hero from './sections/Hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
        </div>
    );
}
