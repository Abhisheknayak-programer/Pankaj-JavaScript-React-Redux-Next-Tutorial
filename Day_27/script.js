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

const renderError = (country) => {
  let html = `<div class="errorCard">
                <h1>ERROR : No country exits in this name ${country}</h1>
              </div>`;
  section_1.insertAdjacentHTML("afterbegin", html);
};

// CATCH AND FINALLY IN JAVASCRIPT
const getCountryData = (country) => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]))
    .catch((err) => renderError(country))
    .finally(() => console.log("Hogaya"));
};

const btn1 = document.querySelector(".btn1");
const input1 = document.querySelector(".input1");

btn1.addEventListener("click", () => {
  getCountryData(input1.value);
  input1.value = "";
});

// HOW TO USE LOCAL STORAGE USING JAVASCRIPT
localStorage.setItem("myCat", "Tom"); //Setting the items inside the localstorage
localStorage.setItem("Person", "Pankaj");

const ans = localStorage.getItem("Person"); // Getting the items from the localstorage
console.log(ans);

localStorage.removeItem("Person"); //Clearing one by one values
localStorage.clear(); // Clear all the values
