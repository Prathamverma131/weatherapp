import styles from './dropdown.module.css';
import cloud from './utils/cloudy.png';
import axios from 'axios';
import { useEffect, useState,useRef} from 'react';


function Dropdown({setLocation}){



    const cities = ["Amsterdam, Netherlands", "Beijing, China","Cairo, Egypt","Delhi, India","Edinburgh, United Kingdom",
    "Frankfurt, Germany","Geneva, Switzerland","Hanoi, Vietnam","Istanbul, Turkey","Jakarta, Indonesia"
,"Kyoto, Japan","Lima, Peru","Moscow, Russia","Nairobi, Kenya","Oslo, Norway","Paris, France","Quito, Ecuador","Riyadh, Saudi Arabia"
,"Sydney, Australia","Tokyo, Japan","Ulaanbaatar, Mongolia","Vienna, Austria","Warsaw, Poland","Xi'an, China","Yerevan, Armenia"
,"Zurich, Switzerland"];


    return <div className={styles.container}>

    {cities.map((item,idx)=>{
        
       return <div key = {idx}className={styles.city} onClick={()=>{
            setLocation(item);
       }}>
        <div>{item}</div>
        <div className={styles.images}>
            <div className={styles.content}>
                <div>8* C</div>
                <div className={styles.text}>Sunny</div>
            </div>
            <div className={styles.img}><img src={cloud} height={30} width={30} alt="img logo"/></div>
        </div>
        </div>
    })}
    
    
    </div>
}

export default Dropdown