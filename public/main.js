// TO HIDE THE PARAGRAPH IN CAROUSEL 

let rad = document.getElementsByName('slider');
for (let i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        let nextId = this.id === 's1' ? 's2' : this.id === 's2' ? 's3' : 's1';
        let prevId = this.id === 's3' ? 's2' : this.id === 's2' ? 's1' : 's3';
        let paragraph = document.querySelector(`.${this.id}`);
        let paragraphNext = document.querySelector(`.${nextId}`);
        let paragraphPrev = document.querySelector(`.${prevId}`);
        paragraphNext.style.display = "none";
        paragraphPrev.style.display = "none";
        paragraph.style.display = "block";
    });
}


function moveSlide(currentSlide, nextSlide) {
  let currentParagraph = document.querySelector(`.${currentSlide.id}`);
  let nextparagraph = document.querySelector(`.${nextSlide.id}`);
  currentParagraph.style.display = "none";
  nextparagraph.style.display = "block";
  currentSlide.checked = false;
  nextSlide.checked = true;
}

let nextButton = document.querySelector(".next-button");
let previousButton = document.querySelector(".previous-button");
let currentSlideActive = document.querySelector('input[name="slider"]:checked');
let paragraph1 = document.querySelector(`.${currentSlideActive.id}`);
paragraph1.style.display = "block";

// TO MOVE THE CAROUSEL ON THE RIGHT 

nextButton.addEventListener("click", function () {
  let currentSlide = document.querySelector('input[name="slider"]:checked');
  let paragraph = document.querySelector(`.${currentSlide.id}`);
  paragraph1.style.display = "none";
  paragraph.style.display = "block";
  const nextSlide = currentSlide.nextElementSibling;
  if (currentSlide.id === "s3") {
     document.querySelector(`#s1`).checked = true;
     let p1 = document.querySelector(`.s1`);
     let p2 = document.querySelector(`.s2`);
     let p3 = document.querySelector(`.s3`);
     p1.style.display = "block";
     p2.style.display = "none";
     p3.style.display = "none";
    return;
  }
  moveSlide(currentSlide, nextSlide);
});

// TO MOVE THE CAROUSEL ON THE LEFT 

previousButton.addEventListener("click", function () {
  let currentSlide = document.querySelector('input[name="slider"]:checked');
  let previousSlide = currentSlide.previousElementSibling;
  let paragraph = document.querySelector(`.${currentSlide.id}`);
  paragraph1.style.display = "none";
  paragraph.style.display = "block";
  if (currentSlide.id === "s1") {
     document.querySelector(`#s3`).checked = true;
     let p3 = document.querySelector(`.s3`);
     let p1 = document.querySelector(`.s1`);
     let p2 = document.querySelector(`.s2`);
     p1.style.display = "none";
     p2.style.display = "none";
     p3.style.display = "block";
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
