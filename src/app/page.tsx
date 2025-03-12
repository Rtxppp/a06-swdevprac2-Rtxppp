import Image from "next/image";
import styles from "./page.module.css";
import Banner from '@/components/Banner';
import Card from '@/components/Card'

export default function Home() {
  return (
    <main>
      <Banner/>
      <div style={{ margin:"20px",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-around"}}>
        <Card venueName="The Bloom Pavilion" imgSrc="/image/bloom.jpg"/>
        <Card venueName="Spark Space" imgSrc="/image/sparkspace.jpg"/>
        <Card venueName="The Grand Table" imgSrc="/image/grandtable.jpg"/>
      </div>
      
    </main>
  );
}
