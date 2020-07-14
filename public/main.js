function moveSlide(currentSlide, nextSlide) {
  currentSlide.checked = false;
  nextSlide.checked = true;
}

let nextButton = document.querySelector(".next-button");
let previousButton = document.querySelector(".previous-button");

// TO MOVE THE CAROUSEL ON THE RIGHT 

nextButton.addEventListener("click", function () {
  let totalTestimonials =document.querySelectorAll('input[name="slider"]');
  let currentSlide = document.querySelector('input[name="slider"]:checked');
  const nextSlide = currentSlide.nextElementSibling;
  if (currentSlide.id === `s${totalTestimonials.length}`) {
     document.querySelector(`#${totalTestimonials[0].id}`).checked = true;
    return;
  }
  moveSlide(currentSlide, nextSlide);
});

// TO MOVE THE CAROUSEL ON THE LEFT 

previousButton.addEventListener("click", function () {
  let totalTestimonials =document.querySelectorAll('input[name="slider"]');
  let currentSlide = document.querySelector('input[name="slider"]:checked');
  let previousSlide = currentSlide.previousElementSibling;
  if (currentSlide.id === `${totalTestimonials[0].id}`) {
     document.querySelector(`#s${totalTestimonials.length}`).checked = true;
    return;
  }
  moveSlide(currentSlide, previousSlide);
});



let feature_elements = document.querySelectorAll(".image-tab");
let image_elements = document.querySelectorAll(".images");

// TO DISPLAY THE ACTIVE TAB 

function hide_show_images(feature_value) {
  image_elements.forEach(function (images) {
    images.style.display = "none";
  });
  document.querySelector("." + feature_value).style.display = "block";
}

// TO ANIMATE THE TAB ON EVERY 5 SECS 

function timer(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function togglaImages() {
  for (var i = 0; i < feature_elements.length; i++) {
    await timer(5000);

    feature_elements.forEach(function (feature) {
      feature.classList.remove("img-active");
    });

    feature_elements[i].classList.add("img-active");

    let feature_value = feature_elements[i].getAttribute("data-id");

    hide_show_images(feature_value);
  }

  i = 0;
  togglaImages();
}

togglaImages();

for (var i = 0; i < feature_elements.length; i++) {
  feature_elements[i].addEventListener("click", function () {
    feature_elements.forEach(function (feature) {
      feature.classList.remove("img-active");
    });

    this.classList.add("img-active");

    let feature_value = this.getAttribute("data-id");
    hide_show_images(feature_value);
  });
}


// const sleep = (delay) => {
//   setTimeout( () => {
//     console.log("awake");
//   }, delay)
// }

// sleep(5000);

// const sleep = (delay) => {
//   return new Promise(resolve => {
//     setTimeout(resolve, delay)
//   });
// }

function time(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}


// function time(delay) {
//   return new Promise(resolve, reject) => {

//   }
// }
// (async () => {
//   console.log("sleep");
//   await sleep(2000);
//   console.log("awake");
// })
// ();

async function wait() {
  console.log('sleep');
  await time(2000);
  console.log("awake");
}
wait();



// let x = function() {
//   console.log("im function x");
// } 

let y = function(callback) {
  console.log('im function y');
  callback();
}

// x();
y(function(c) {
  console.log("im function x");
} );

let add = function(a, b) {
  return a + b;
}

function multiply (a, b) {
  return a *b;
}


let calc = function(num1, num2, calcType) {

return calcType(num1, num2);
  // if(calcType === "add") {
  //   return num1 + num2;
  // } else if(calcType === "multiply") {
  //   return num1 * num2;
  // }
}
console.log(calc(4,5, multiply));


let myArr = [{
  name: "czaammil",
  age: 22, },
{
  name: "dohamed",
  age: 10,
},
{
  name: "aujju",
  age: 5,
}]; 

myArr.sort(function(val1, val2) {
// if(val1.name < val2.name) {
//   return -1;
// } else {
//   return 1;
// }
return val1.name - val2.name;
});

console.log(myArr);
