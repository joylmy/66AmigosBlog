const featured = document.querySelector(".featured-item");
const gallery = document.querySelector(".gallery");
const leftbtn = document.querySelector(".move-btn.left");
const rightbtn = document.querySelector(".move-btn.right");
const galleryItems = document.querySelectorAll(".gallery-item");
const numOfItems = galleryItems.length;

const selectItem = (e) => {
  if (e.target.classList.contains("active")) {
    return;
  }
  featured.style.backgroundImage = e.target.style.backgroundImage;
  // cancel the already target image item
  galleryItems.forEach((galleryItem) => {
    if (galleryItem.classList.contains("active")) {
      galleryItem.classList.remove("active");
    }
  });

  e.target.classList.add("active");
};

// click right btn, click left btn

(() => {
  // image path
  const images = [
    "../images/niagra-fall/1.jpg",
    "../images/niagra-fall/2.jpg",
    "../images/niagra-fall/3.jpg",
    "../images/niagra-fall/4.JPEG",
    "../images/niagra-fall/5.JPEG",
    "../images/niagra-fall/6.JPEG",
    "../images/niagra-fall/7.JPEG",
  ];

  // set initial featured image
  featured.style.backgroundImage = `url(${images[0]})`;

  //Set Images for Gallery and Add Event Listeners
  for (let i = 0; i < numOfItems; i++) {
    galleryItems[i].style.backgroundImage = `url(${images[i]})`;
    galleryItems[i].addEventListener("click", selectItem);
  }
})();
