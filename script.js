// async function getCountries(){
// const res=await fetch("https://restcountries.com/v3.1/all");
// const jsonData=await res.json();
// console.log(jsonData);
// }
// var jsonData=[];
// fetch("https://restcountries.com/v3.1/all")
//         .then((response) => response.json())
//         .then((data) => filterData(data))
//         .catch((error) => console.log(error));
// function weatherDetails(lat,lng,hours,minutes){
//     const params = 'waterTemperature,airTemperature,humidity,pressure';
//     const currentDate = new Date();
//     const offsetInMinutes = hours * 60 + minutes;
//     const targetDate = new Date(currentDate.getTime() + offsetInMinutes * 60 * 1000);

//     // Convert the target date to UNIX format
//     const unixTimestamp = Math.floor(targetDate.getTime() / 1000);
//     const wt='12';
//     // Convert the target date to URL encoded ISO format
//     const isoFormat = encodeURIComponent(targetDate.toISOString());
    
//     fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&end=${unixTimestamp}`, {
//       headers: {
//         'Authorization': '8630c9fa-0dc8-11ee-8b7f-0242ac130002-8630ca7c-0dc8-11ee-8b7f-0242ac130002'
//       }
//     }).then((response) => response.json()).then((jsonData) => {
//       console.log(jsonData);
//         if (jsonData.length > 0) {
//             const lastValue = jsonData[jsonData.length - 1];
//             console.log(lastValue);
//         }
//     <p>${params.waterTemperature}</p>
//     });
//     alert();
    
// // document.addEventListener("",function(){
//   varCountryDialog.push(modalStyle);
//   countrydialog.append(...varCountryDialog);
// // });
// }
//       function filterData(data) {
//         // let filteredData = [];
//         const varCountryDetails = [];
//         const countrydetails = document.getElementById("country-details");
        
//         if (data.length > 0) {
//       //  filteredData = data;
        
//             data.forEach((country) => {
//               const lat=country.latlng[0];
//               const lng=country.latlng[1];
//               // used split function bcoz it displays all weather details of times like 00:00 and 01:00
//               // here used split function to calculate the current time to display the weather
//               const tz=country.timezones[0];
//               const [tz1, hoursString, minutesString] = tz.split(/[+:]/);
//               const hours = parseInt(hoursString);
//               const minutes = parseInt(minutesString);
//               const cardStyle = document.createElement("div");
//               cardStyle.setAttribute(
//                 "class",
//                 "col-lg-4 col-sm-12"
//               );
//               cardStyle.innerHTML = `<div>
//               <div class="card" style="width: 18rem;background-color:rgb(192,192,192);">
//                   <div style="text-align:center;color:white;background-color:rgb(0,128,128);">${country.name.common}</div>
//                   <img src="${country.flags.png}" class="card-img-top" style="padding:20px;" alt="${country.flags.svg}">
//                   <div class="card-body">
//                     <h5 class="card-title"></h5>
//                     <p class="card-text" style="text-align:center;color:rgb(0,128,128);font-size:14px;font-family:Effra;">Capital:${country.capital}</p>
//                     <p class="card-text" style="text-align:center;color:rgb(0,128,128);font-size:14px;font-family:Effra;">Region:${country.region}</p>
//                     <p class="card-text" style="text-align:center;color:rgb(0,128,128);font-size:14px;font-family:Effra;">Country Code:${country.cca2}</p>
//                     <p class="card-text" style="text-align:center;color:rgb(0,128,128);font-size:14px;font-family:Effra;">Lat:${lat},Lng:${lng}</p>
//                     <a href="#" class="btn btn-primary" style="font-size:8px;" 
//                     onclick="weatherDetails(${lat}, ${lng}, ${hours}, ${minutes});"<a>Click for Weather</a>
//                     </div>
//                 </div>
//               </div>`;
//             //   console.log(cardStyle);
//               varCountryDetails.push(cardStyle);
//             });
//             countrydetails.append(...varCountryDetails);
//         }
//         //console.log(data);
//         // return filteredData;
//       }

      
fetch("https://restcountries.com/v3.1/all")
.then((response) => response.json())
.then((data) => filterData(data))
.catch((error) => console.log(error));

function weatherDetails(lat, lng, hours, minutes) {
const params = 'waterTemperature,airTemperature,humidity,pressure';
const currentDate = new Date();
const offsetInMinutes = hours * 60 + minutes;
const targetDate = new Date(currentDate.getTime() + offsetInMinutes * 60 * 1000);

// Convert the target date to UNIX format
const unixTimestamp = Math.floor(targetDate.getTime() / 1000);
const wt = '12';
// Convert the target date to URL encoded ISO format
const isoFormat = encodeURIComponent(targetDate.toISOString());

fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&end=${unixTimestamp}`, {
  headers: {
    'Authorization': '8630c9fa-0dc8-11ee-8b7f-0242ac130002-8630ca7c-0dc8-11ee-8b7f-0242ac130002'
  }
})
  .then((response) => response.json())
  .then((jsonData) => {
    console.log(jsonData);
    if (jsonData.length > 0) {
      const lastValue = jsonData[jsonData.length - 1];
      console.log(lastValue);
      document.getElementById('waterTemperature').innerHTML = lastValue.waterTemperature;
    }
  })
  .catch((error) => console.log(error));

alert();
}

function filterData(data) {
const varCountryDetails = [];
const countrydetails = document.getElementById("country-details");

if (data.length > 0) {
  data.forEach((country) => {
    const lat = country.latlng[0];
    const lng = country.latlng[1];
    const tz = country.timezones[0];
    const [tz1, hoursString, minutesString] = tz.split(/[+:]/);
    const hours = parseInt(hoursString);
    const minutes = parseInt(minutesString);
    const cardStyle = document.createElement("div");
    cardStyle.setAttribute("class", "col-lg-4 col-sm-12");
    cardStyle.innerHTML = `<div>
      <div class="card" style="width: 18rem;background-color:rgb(192,192,192);">
        <div style="text-align:center;color:white;background-color:rgb(0,128,128);">${country.name.common}</div>
        <img src="${country.flags.png}" class="card-img-top" style="padding:20px;" alt="${country.flags.svg}">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text" style="text-align:center;color:rgb(0,128,128);font-size:14px;font-family:Effra;">Capital:${country.capital}</p>
          <p class="card-text" style="text-align:center;color:rgb(0,128,128);font-size:14px;font-family:Effra;">Region:${country.region}</p>
          <p class="card-text" style="text-align:center;color:rgb(0,128,128);font-size:14px;font-family:Effra;">Country Code:${country.cca2}</p>
          <p class="card-text" style="text-align:center;color:rgb(0,128,128);font-size:14px;font-family:Effra;">Lat:${lat},Lng:${lng}</p>
          <a href="#" class="btn btn-primary" style="font-size:8px;"
            onclick="weatherDetails(${lat}, ${lng}, ${hours}, ${minutes});">Click for Weather</a>
        </div>
      </div>
    </div>`;

    varCountryDetails.push(cardStyle);
  });

  countrydetails.append(...varCountryDetails);
}
}


        