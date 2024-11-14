//For the navbar
let menuBar = document.querySelector("#menuBar");
let closeMenu = document.querySelector("#closeMenu");
let menuContainer = document.querySelector("#menuContainer");


//For the header image slider

let headerImages = [
  { src: './image/first header.jpg', srcset: './image/first header.jpg 800w, ./image/first header-large.jpg 1200w' },
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


//For managing the max content in the page
const allContents = Array.from(document.querySelectorAll('.product-card'));
const container = document.getElementById("content-container");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
let currentPage = 0;
const itemsPerPage = 18;

const renderContent = () => {
  allContents.forEach(item => item.style.display = 'none');

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToShow = allContents.slice(startIndex, endIndex);
  itemsToShow.forEach(item => item.style.display = 'block');

  prevButton.disabled = currentPage === 0;
  nextButton.disabled = endIndex >= allContents.length;

 
}

prevButton.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    renderContent();
  }
});

nextButton.addEventListener('click', () => {
  if ((currentPage + 1) * itemsPerPage < allContents.length) {
    currentPage++;
    renderContent();
  }
});

renderContent();

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




//For tailwindcss code reuse

document.querySelectorAll('.product-card').forEach(card => {
const imgSrc = card.getAttribute('data-image');
const title = card.getAttribute('data-title');
const price = card.getAttribute('data-price');
const rating = card.getAttribute('data-rating');

card.classList.add('w-full', 'h-[280px]', 'basis-[45%]', 'sm:basis-[30%]', 'md:h-[350px]', 'lg:h-[380px]', 'lg:basis-[23%]', '2xl:basis-[14%]', 'p-2', 'bg-white','shadow-md','rounded-t', 'cursor-pointer');

card.innerHTML = `
  <img class="rounded object-cover w-full h-[50%]" src="${imgSrc}" alt="${title}" loading="lazy">
  <div class="product-details p-2">
    <h2>${title}</h2>
    <div class="flex flex-row justify-between items-center mt-2">
      <p id="price" class="text-[12px] font-semibold"><span class="font-medium text-[14px]">Price:</span> ${price}</p>
      <i class="px-3 rounded py-1 border-2 border-gray-600 fa-regular fa-heart"></i>
    </div>
    <h4>
      <i class="fa-solid fa-star"></i>
      <span class="text-green-800 text-[14px]">${rating}</span>
    </h4>
  </div>
`;
});







const productDetailsContainer = document.getElementById('product-details-container');
  const backButton = document.getElementById('back-button');
  const productCards = document.querySelectorAll('.product-card');

  // Elements for displaying product details
  const image = document.getElementById("image");
  const productTitle = document.getElementById('product-title');
  const productPrice = document.getElementById('product-price');
  const productRating = document.getElementById('product-rating');
  const productDescription = document.getElementById('product-description');
  const mainContainer = document.querySelector("main")

  // Function to display product details
  productCards.forEach(card => {
    card.addEventListener('click', () => {
      // Hide main content container
      mainContainer.style.display = 'none';

      // Show product details container
      productDetailsContainer.style.display = 'block';

      // Set product details
      image.src = card.getAttribute('data-image')
      productTitle.textContent = card.getAttribute('data-title');
      productPrice.textContent = `Price: ${card.getAttribute('data-price')}`;
      productRating.textContent = `Rating: ${card.getAttribute('data-rating')}`;
      productDescription.textContent = card.getAttribute('data-description');
    });
  });

  // Function to go back to the main page
  backButton.addEventListener('click', () => {
    // Hide product details container
    productDetailsContainer.style.display = 'none';

    // Show main content container
    mainContainer.style.display = 'flex'; // Adjust this to 'block' if needed based on layout
  });