// TABBED COMPONENTS
const headline = document.querySelector(".DisplayBoxHeading");
const para = document.querySelector(".DisplayBoxParagraph");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");

btn1.addEventListener("click", () => {
  headline.textContent = "Coding";
  para.textContent =
    "Computer programming, the process of creating and maintaining the source code of computer programs Line coding, in data storage Source coding, compression used in data transmission Coding theory Channel coding, in coding theory";
});

btn2.addEventListener("click", () => {
  headline.textContent = "Delhi";
  para.textContent = `Delhi, a officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India. Straddling the Yamuna river, primarily its western or right bank, Delhi shares borders with the state of Uttar Pradesh in the east and with the state of Haryana in the remaining directions. The NCT covers an area of 1,484 square kilometres (573 sq mi). According to the 2011 census, Delhi's city proper population was over 11 million, while the NCT's population was about 16.8 million. Delhi's urban agglomeration, which includes the satellite cities of Ghaziabad, Faridabad, Gurgaon and Noida in an area known as the National Capital Region (NCR), has an estimated population of over 28 million, making it the largest metropolitan area in India and the second-largest in the world (after Tokyo).`;
});

btn3.addEventListener("click", () => {
  headline.textContent = "Odisha";
  para.textContent =
    "Odisha (English: /əˈdɪsə/,[12] Odia: [oɽiˈsa] (listen)), formerly Orissa (/ɒˈrɪsə, ɔː-, oʊ-/[13] the official name until 2011), is an Indian state located in Eastern India. It is the 8th largest state by area, and the 11th largest by population. The state has the third largest population of Scheduled Tribes in India.[14] It neighbours the states of Jharkhand and West Bengal to the north, Chhattisgarh to the west, and Andhra Pradesh to the south. Odisha has a coastline of 485 kilometres (301 mi) along the Bay of Bengal in Indian Ocean.[15] The region is also known as Utkala and is also mentioned in India's national anthem.[16] The language of Odisha is Odia, which is one of the Classical Languages of India.[17]";
});

btn4.addEventListener("click", () => {
  headline.textContent = "Indore";
  para.textContent =
    "Indore (/ɪnˈdɔːr/ (listen)) is the largest and most populous city in the Indian state of Madhya Pradesh.[16] It serves as the headquarters of both Indore District and Indore Division. It is also considered as an education hub of the state and is the only city to encompass campuses of both the Indian Institute of Technology and the Indian Institute of Management.[17] Located on the southern edge of Malwa Plateau, at an average altitude of 553 meters (1,814 ft) above sea level,[18] it has the highest elevation among major cities of Central India. The city is 190 km (120 mi) west of the state capital of Bhopal. Indore had a census-estimated 2011 population of 1,994,397 (municipal corporation)[10] and 3,570,295 (urban agglomeration).[11] The city is distributed over a land area of just 530 square kilometres (200 sq mi), making Indore the most densely populated major city in the central province.";
});

const btn = document.querySelectorAll(".btn");
const DBox = document.querySelector(".DisplayBox");

btn.forEach((el) => {
  el.addEventListener("click", () => {
    DBox.style.display = "flex";
  });
});

const btnClose = document.querySelector(".btnClose");
btnClose.addEventListener("click", () => {
  DBox.style.display = "none";
  para.textContent = "";
  headline.textContent = "";
});

