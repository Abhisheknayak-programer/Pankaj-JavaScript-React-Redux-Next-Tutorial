// INTERSECTION OBSERVER API
const section1 = document.querySelector(".section1");

const obsCallBack = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(obsCallBack, obsOptions);
observer.observe(section1);
