import styles from './content.module.css';
import image from './utils/cloudy.png';
import Graph from './Graph';

function Content({current,weekData,sunset,sunrise}){

    if(!current){
        current = 0;
    }

    function convert(timestamp){
        
const date = new Date(timestamp * 1000); 

const hours = date.getHours();
const minutes = date.getMinutes();

const period = hours >= 12 ? 'PM' : 'AM';

const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

const formattedTime = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;

    return formattedTime;
    }
    
    if(weekData.length){
    return <div className={styles.container}>
    
        <div className={styles.temp}><p>{(weekData[current].main.temp-273.15).toFixed(0)}°</p><img src={image} width={50} height={50}/></div>
        <div className={styles.type}>
            <div className={styles.pressure}><h3>Pressure</h3><p>{weekData[current].main.pressure} hpa</p></div>
            <div className={styles.humidity}><h3>Humidity</h3><p>{weekData[current].main.humidity}</p></div>
        </div>
        <div className={styles.sun}><div><h4>Sunrise</h4><>{convert(sunrise)}</></div><div><h4>Sunset</h4><>{convert(sunset)}</></div></div>
        <Graph sunrise={convert(sunrise)} sunset={convert(sunset)}/>
    </div>}
    return null;
}

export default Content;