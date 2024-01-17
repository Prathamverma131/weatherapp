import styles from './day.module.css';
import contrast from './utils/contrast.png';
import cloudy from './utils/cloudy.png';
import { useState } from 'react';


function Day({data,index,curr,current,setCurrent}){

    if(!current){
        setCurrent(0);
    }
    
    function getDate(){

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = (index+curr) %7;
const dayName = daysOfWeek[dayOfWeek];
    return dayName;
    }
    var dayName = getDate();
    

    var weather = ["Fog","Smoke","Mist","Clouds","Rain"]
    var image = contrast;
    if(weather.includes(data.weather[0].main)){
        image = cloudy;
    }

    return <div id={index.toString()} className={index==current?styles.option:styles.container}  onClick={(e)=>{
        console.log(e.target.id,"id");
        setCurrent(parseInt(e.target.id));
    }}>

        <div><h6>{dayName}</h6></div>
        <div><h6>{(data.main.temp_min-273.15).toFixed(1)}° {(data.main.temp_max-273.15).toFixed(1)}°</h6></div>
        <div><img src={image} width={50} height={50} alt='weather logo'/></div>
        <div><h6>{data.weather[0].main}</h6></div>

    </div>
}


export default Day;