const section_1 = document.querySelector(".section__1");

const renderCountry = (data) => {
  //   console.log(data);
  let html = `<div class="card">
                    <div class="img__box">
                        <img src="${data.flags.png}" alt="flag">
                    </div>

                    <div class="text__box">
                        <h2>Country Name : ${data.name.common}</h2>
                        <h3>Country Capital : ${data.capital}</h3>
                        <h3>Continents   : ${data.continents}</h3>
                        <h3>Timezones: ${data.timezones}</h3>
                        <h3>Population : ${data.population}</h3>
                    </div>
                </div>`;

  section_1.insertAdjacentHTML("afterbegin", html);
};

// FETCH AND THEN IN JAVASCRIPT
const getCountryData = (country) => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]));
};

getCountryData("Nepal");
getCountryData("China");
getCountryData("Bangladesh");
getCountryData("Bhutan");
getCountryData("Portugal");
getCountryData("Korea");
getCountryData("India");
getCountryData("Japan");

