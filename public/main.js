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

  if (feature_value == "conversation") {
    document.querySelector("." + feature_value).style.display = "block";
  } else if (feature_value == "bot") {
    document.querySelector("." + feature_value).style.display = "block";
  } else if (feature_value == "agent") {
    document.querySelector("." + feature_value).style.display = "block";
  } else if (feature_value == "FAQ") {
    document.querySelector("." + feature_value).style.display = "block";
  } else if (feature_value == "integration") {
    document.querySelector("." + feature_value).style.display = "block";
  } else {
    console.log("");
  }
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
