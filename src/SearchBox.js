import styles from './searchbox.module.css';
import pin from './utils/pin.png';
import search from './utils/search.png';
import geolocation from './utils/location';
import { useEffect } from 'react';


function SearchBox({location,setLocation}){

    useEffect(()=>{
        geolocation(setLocation);
    },[])

    
    return <> 
    <div className={styles.wrapper}>
    <div className={styles.image}><img src={pin} width={30} height={30} alt='pin icon'/></div>
    <input type="text" className={styles.search} placeholder='Search' value={location} onChange={(e)=>{
        setLocation(e.target.value);
    }}/>
    <div className={styles.image}><img src={search} width={30} height={30} alt='search icon'/></div>
    </div>
    </>
}

export default SearchBox;