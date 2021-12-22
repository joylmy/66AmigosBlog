const featured = document.querySelector(".featured-item");
const gallery = document.querySelector(".gallery");
const leftbtn = document.querySelector(".move-btn.left");
const rightbtn = document.querySelector(".move-btn.right");
const galleryItems = document.querySelectorAll(".gallery-item");
const numOfItems = galleryItems.length;
const itemWidth = 30;
let left = 0;
let leftInterval;
let rightInterval;
let scrollRate = 0.1;

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

const galleryWrapLeft = () => {
  var first = gallery.children[0];
  gallery.removeChild(first);
  gallery.style.left = -itemWidth + "%";
  gallery.appendChild(first);
  gallery.style.left = "0%";
};

const galleryWrapRight = () => {
  var last = gallery.children[gallery.children.length - 1];
  gallery.removeChild(last);
  gallery.insertBefore(last, gallery.children[0]);
  gallery.style.left = -itemWidth + "%";
};

const moveLeft = () => {
  left = left || 0;

  leftInterval = setInterval(() => {
    gallery.style.left = left + "%";

    if (left > -itemWidth) {
      left -= scrollRate;
    } else {
      left = 0;
      galleryWrapLeft();
    }
  }, 1);
};

const moveRight = () => {
  //Make sure there is element to the leftd
  if (left > -itemWidth && left < 0) {
    left = left - itemWidth;

    var last = gallery.children[gallery.children.length - 1];
    gallery.removeChild(last);
    gallery.style.left = left + "%";
    gallery.insertBefore(last, gallery.children[0]);
  }

  left = left || 0;

  rightInterval = setInterval(() => {
    gallery.style.left = left + "%";

    if (left < 0) {
      left += scrollRate;
    } else {
      left = -itemWidth;
      galleryWrapRight();
    }
  }, 1);
};

function stopMovement() {
  clearInterval(leftInterval);
  clearInterval(rightInterval);
}

leftbtn.addEventListener("mouseenter", moveLeft);
leftbtn.addEventListener("mouseleave", stopMovement);
rightbtn.addEventListener("mouseenter", moveRight);
rightbtn.addEventListener("mouseleave", stopMovement);

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
