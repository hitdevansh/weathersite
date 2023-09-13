const cityname = document.getElementById('cityName');
const submitbtn = document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');
const temp_val = document.getElementById('temp_val');
const temp_status = document.getElementById('temp_status');
const n = document.getElementById('hiders');

const getinfo=async(event)=>{
    event.preventDefault();
    let cityval = cityname.value; 
    if(cityval===""){
        n.classList.add('data_hide');
        city_name.innerHTML = `<h4>Please write the name of city before search</h4> `;
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=matric&appid=c4cead7af8c7ea23116d9dd70391ef5c`;
            const response = await fetch(url);
            const data =await response.json();
            const arrdata = [data];

            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            const k = arrdata[0].main.temp-273;
            temp_val.innerText = parseFloat(k).toFixed(2);
            temp_status.innerHTML = arrdata[0].weather[0].main;
            
            const mood = arrdata[0].weather[0].main;
            console.log(mood)

            if(mood=="Clear"){
                temp_status.innerHTML="<i class='fas fa-sun main_layer middle_layer' style='color:#eccc68;'><i>";
            }
            else if(mood=="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'><i>"
            }
            else if(mood=="Rain"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'><i>"
            }
            else{
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'><i>"
            }
            
        }catch{
            city_name.innerHTML=`<h4>Please write the name of city before search</h4> `;
        }
    }
}
submitbtn.addEventListener('click',getinfo);