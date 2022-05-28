const api ={
    key:"5264262fd1c514ad8b76594c0a0e7ba6",
    base:"https://api.openweathermap.org/data/2.5/"
}
const searchi = document.getElementById("searchi");
const btn = document.getElementById("btn");
const city = document.getElementById("city");
const datei = document.getElementById("datei");
const dayi = document.getElementById("dayi");
const tempi = document.getElementById("tempi");
const tempmin = document.getElementById("tempmin");
const tempmax = document.getElementById("tempmax");
const iconi = document.getElementById("iconi");
const decrip = document.getElementById("decrip");
const Kelvin=273;

window.onload=(eve)=>{
   
    displayDate();

}

btn.addEventListener("click",setValue);

function displayDate(){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let now = new Date();
    let yeau =now.getFullYear();
    let dateu =now.getDate();
    let maonthu= now.getMonth();
    let curdate =`${dateu}|${maonthu + 1}|${yeau}`;

    let dayu = days[now.getDay()];

    datei.innerHTML=`${curdate}`;
    dayi.innerHTML=`${dayu}`;
    console.log(dayu);

    
}
function setValue(){
    
     let searchVal=searchi.value;
     if(!searchVal==""){
       

        getResult(searchVal);
     }
    
    console.log(searchi.value);

}
function getResult(searchVal){
   
    fetch(`${api.base}weather?q=${searchVal}&appid=${api.key}`)
    .then(async weather=>{
        
        if(!weather.ok){
            city.innerHTML="City not found";
            return Promise.reject(error);
        }
        return weather.json();
    }).then(displayRes).catch(err =>{
       
        console.log(err);
    })

}
function displayRes(weather){
    console.log(weather);
    
    
    city.innerHTML=`Welcome to ${weather.name} , ${weather.sys.country}`;
    tempi.innerHTML=`${Math.floor(weather.main.temp - Kelvin)} &#8451`;
    // tempmin.innerHTML=`${Math.floor(weather.main.temp_min - Kelvin)} &#8451`;
    // tempmax.innerHTML=`${Math.floor(weather.main.temp_max - Kelvin)} &#8451`;
    let iconfake=weather.weather[0].icon;
    let decriptionval=weather.weather[0].main;
   
    iconi.src=`http://openweathermap.org/img/wn/${iconfake}.png`;
    decrip.innerHTML=`${decriptionval}`;
    document.querySelector(".iconc").classList.add("active");
    

  


    console.log(iconfake);


    
   

   

}
