import { useState } from "react";
import styles from "./weekly.module.css";
import axios from "axios";
import mockdata from "./mockdata";
import { useEffect } from "react";
import Day from './Day.js';
import Content from "./Content.js";


function Weekly({location}){

    var [weekData,setWeekData] = useState([]);
    var [current,setCurrent] = useState(0);
    var [sunset,setSunset] = useState(0);
    var [sunrise,setSunrise] = useState(0);


    
    async function get(){
        try{
        var data = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=7&appid=4f152862c91b076fc1ae492fd079c47a`);
        //setWeekData(mockdata.list);
        setWeekData(data.data.list)
        setSunset(data.data.city.sunset);
        setSunrise(data.data.city.sunrise);
    }catch(e){
            setWeekData([])
        }
    }

    useEffect(()=>{
        get();
    },[location])
    var dayOfWeek = 0;
    if(weekData.length){
    var date=  weekData[0].dt_txt.split(" ")[0];
    
    const myDate = new Date(date);

     dayOfWeek = myDate.getDay();}
        

    return <><div className={styles.container}>
            {
                weekData.map((item,idx)=> <Day data={item} index={idx} curr={dayOfWeek} key={idx} current={current} setCurrent={setCurrent}/>)
            }
            
           
    </div> <Content current={current} weekData={weekData} sunset={sunset} sunrise={sunrise}/></>
}

export default Weekly;