import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu(){
    return (
        <div className="flex items-center justify-end bg-white shadow-md px-6 py-3">
        <TopMenuItem title='Booking' pageRef='/booking/' />
        <Image 
          src={'/image/logo.png'} 
          className="h-12 w-auto" 
          alt='logo' 
          width={48} 
          height={48} 
        />
      </div>
      );
}