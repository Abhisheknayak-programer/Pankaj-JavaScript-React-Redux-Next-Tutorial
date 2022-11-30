// ASYNC AWAIT IN JAVASCRIPT [WHEATHER API]
const API_KEY = `a9db4690e6e1873ead2582eaa6330ec7`;

const userInput = document.querySelector(".userInput");
const btn1 = document.querySelector(".btn1");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");

btn1.addEventListener("click", () => {
  // getData(userInput.value);
  // getDataAtNight(userInput.value);
  getWeatherReport(userInput.value);
  userInput.value = "";
  city.textContent = "";
  temp.textContent = "";
});

const getData = (cityVal) => {
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${API_KEY}`;
  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      city.textContent = data.name;
      temp.textContent = data.main.temp;
    });
};

const getDataAtNight = async (cityVal) => {
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${API_KEY}`;
  const response = await fetch(URL);
  const data = await response.json();
  city.textContent = data.name;
  temp.textContent = data.main.temp;
};

// TRY ANC CATCH IN JAVASCRIPT
const getWeatherReport = async (cityVal) => {
  try {
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${API_KEY}`;
    const response = await fetch(URL);
    const data = await response.json();
    city.textContent = data.name;
    temp.textContent = data.main.temp;
  } catch (err) {
    city.textContent = "No City Available for this Name";
    temp.textContent = "Not Available";
  } finally {
    console.log("Done");
  }
};
