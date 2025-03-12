import styles from './card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'



export default function Card({venueName,imgSrc}:{venueName:string,imgSrc:string}){
    return(
      <InteractiveCard contentName={venueName}>
      <div className='w-full h-[300px] rounded-lg shadow-lg' >
          
          <div className='w-full h-[70%] relative rounded-t-lg'>
              <Image src={imgSrc} alt='Product Picture' layout="fill"  className='object-cover rounded-t-lg'/>
          </div>
              <div className={styles.cardtext}>{venueName}</div>
          </div>
      </InteractiveCard>
    )
}