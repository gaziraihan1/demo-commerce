//For the navbar
let menuBar = document.querySelector("#menuBar");
let closeMenu = document.querySelector("#closeMenu");
let menuContainer = document.querySelector("#menuContainer");


//For the header image slider

let headerImages = [
  { src: './image/first header.jpg', srcset: './image/first header.jpg 800w, ./image/first header-large.jpg 1200w' },
  { src: './image/foods header.jpg', srcset: './image/foods header.jpg 800w, ./image/foods header-large.jpg 1200w' },
  { src: './image/iphone header.jpg', srcset: './image/iphone header.jpg 800w, ./image/iphone header-large.jpg 1200w' },
  { src: './image/pad header.jpg', srcset: './image/pad header.jpg 800w, ./image/pad header-large.jpg 1200w' }
];
let count = 0;
let imageFolder = document.querySelector("#headerImage");

//Image silde mover
let rightMove = document.querySelector("#rightMove");
let leftMove = document.querySelector('#leftMove');

//Side menu Bar
let sideBar = document.querySelector("#sideMenuBar");
let sideMenu = document.querySelector("#sideMenu");
let arrowRotate = document.getElementById("arrowIcon");

//Side menu item
let sideMenuBtns = document.querySelectorAll("#sideMenuBtn");
let sideMenuItems = document.querySelectorAll("#sideMenuItem");
let sideMenuArrow = document.querySelectorAll("#sideArrow");

// Select the search icons and search bar
const searchIcons = document.querySelectorAll('.fa-magnifying-glass');
const searchBar = document.getElementById('searchBar');

//Menu bar function
menuBar.addEventListener("click", () => {
    menuContainer.classList.remove('hidden');
    menuBar.classList.add("hidden"); 
    closeMenu.classList.remove('hidden');
    
});

closeMenu.addEventListener("click",  () => {
    menuContainer.classList.add('hidden');
    menuBar.classList.remove("hidden");
    closeMenu.classList.add('hidden');
});

//Image sliding movement
const updateImage = () => {
  const currentImage = headerImages[count];
  imageFolder.src = currentImage.src; 
  imageFolder.srcset = currentImage.srcset;
};

// Image sliding movement
rightMove.addEventListener("click", () => {
  count++;
  if (count >= headerImages.length) {
    count = 0;
  }
  updateImage();
});

const autoSlide = () => {
  setInterval(() => {
    count++;
    if (count >= headerImages.length) {
      count = 0;
    }
    updateImage();
  }, 4000);
};
autoSlide();

leftMove.addEventListener("click", () => {
  setTimeout(() => {
    count--;
    if (count < 0) {
      count = headerImages.length - 1;
    }
    updateImage(); 
  }, 200);
});

sideBar.addEventListener("click", () => {
    sideMenu.classList.toggle("hidden");
      arrowRotate.classList.toggle("-rotate-90");
      arrowRotate.classList.toggle("rotate-90");
  
      sideMenuItems.forEach((item) => {
        item.classList.add("hidden");
      });
    
      sideMenuBtns.forEach((btn) => {
        const arrow = btn.querySelector(".fa-arrow-right");
        if (arrow) {
          arrow.classList.remove("-rotate-90");
          arrow.classList.add("rotate-90");
        }
      });
    }
);
  
sideMenuBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      sideMenuItems[index].classList.toggle("hidden");
      const arrow = btn.querySelector(".fa-arrow-right");
      if (arrow) {
        arrow.classList.toggle("-rotate-90");
        arrow.classList.toggle("rotate-90");
      }
    });
  });
  

searchIcons.forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.stopPropagation(); 
    searchBar.classList.toggle('hidden');
  });
});
searchBar.addEventListener('click', (e) => {
  e.stopPropagation();
}); 
document.addEventListener('click', () => {
  searchBar.classList.add('hidden');
});
