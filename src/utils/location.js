import axios from 'axios';

async function geolocation(setLocation){

    navigator.geolocation.getCurrentPosition(successCallback);
  
    async function successCallback(position) {
     
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      console.log("Your location: Latitude " + latitude + ", Longitude " + longitude);
      var url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      var address = await apifetch(url);
      setLocation(`${address.city}, ${address.state}`)
  }
  
}

async function apifetch(url){
  try{
      var res = await axios.get(url);
      return res.data.address;}
  catch{
    console.log('error while fetching location automatically')
    return "error";
  }
}



export default geolocation;