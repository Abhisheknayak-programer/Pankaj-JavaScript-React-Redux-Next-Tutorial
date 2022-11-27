// HOW TO GET LONGITUDE AND LATITUDE COORDINATES USING JAVASCRIPT
console.log(navigator);
console.log(navigator.geolocation);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude, longitude);
    },
    function () {
      console.log("Unable to get your location");
    }
  );
}

// SYNCHRONOUS CODE
// Synchronous code is executed line by line. Each line of code waits for previous line to finish.
const p = document.querySelector(".p");
p.textContent = "My name is Abhishek Nayak";

// alert("Hey I have changed the test successfully");
p.style.color = "red";

// ASYNCHRONOUS CODE
// Asyncronous code does not wait for any other task running in the background.
const para = document.querySelector(".para");

setTimeout(() => {
  para.textContent = "My name is Abhishek Nayak";
}, 5000);

para.style.color = "red";

// CALLBACK HELL
setTimeout(() => {
  console.log("1 Second Passed");
  setTimeout(() => {
    console.log("2 Seconds Passed");
    setTimeout(() => {
      console.log("3 Seconds Passed");
      setTimeout(() => {
        console.log("4 Seconds Passed");
        setTimeout(() => {
          console.log("5 Seconds Passed");
          setTimeout(() => {
            console.log("6 Seconds Passed");
            setTimeout(() => {
              console.log("7 Seconds Passed");
              setTimeout(() => {
                console.log("8 Seconds Passed");
                setTimeout(() => {
                  console.log("9 Seconds Passed");
                  setTimeout(() => {
                    console.log("10 Seconds Passed");
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// WHAT IS AJAX
// AJAX Stands for Asynchronous JavaScript and XML.
// AJAX Calls allows us to communicate with remote web services in an asynchronous way.
// With the help of AJAX calls we can request data from web servers dynamically.

// WHAT IS API
// API stands for Application programming Interface.
// API is a peice of software that can be used by anather peice of software in order to allow applications to talk to each other.
// There are many types of API in web development are :
// DOM API, Geolocation API, Own Class API, Online API or API

// ONLINE API : Application running on the server, that receive request for data and sends data back as a response to the user from where the request is done.

// What ARE PROMISE IN JAVASCRIPT
// A container for a future value.
// Promises can be either fulfiled or rejected. if the promise is fulfiled then we can show the user the desired output else we can show the error or any response so that user can rectify that if any error made by him.
