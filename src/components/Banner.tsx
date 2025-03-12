import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner(){
    return (
        <div className="relative w-screen h-[50vh]">
            <Image 
                src="/image/banner2.jpg" 
                alt="cover" 
                fill 
                priority 
                className="object-cover"
            />
            
            <div className="absolute inset-0 bg-black/50"></div>
           
            <div className="absolute bottom-1/2 w-full text-center">
                <div className="w-full py-1 bg-gradient-to-r from-pink-400 to-pink-600">
                    <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                        Where Every Event Finds Its Venue
                    </h1>
                </div>
            </div>
        </div>
    )
}