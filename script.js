//For the navbar
let menuBar = document.querySelector("#menuBar");
let closeMenu = document.querySelector("#closeMenu");
let menuContainer = document.querySelector("#menuContainer");

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


//Side menu Bar
let sideBar = document.querySelector("#sideMenuBar");
let sideMenu = document.querySelector("#sideMenu");
let arrowRotate = document.getElementById("arrowIcon");

//Side menu item
let sideMenuBtns = document.querySelectorAll("#sideMenuBtn");
let sideMenuItems = document.querySelectorAll("#sideMenuItem");
let sideMenuArrow = document.querySelectorAll("#sideArrow");

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


// Select the search icons and search bar
const searchIcons = document.querySelectorAll('.fa-magnifying-glass');
const searchBar = document.getElementById('searchBar');


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


//Product details page
const productDetailsContainer = document.getElementById('product-details-container');
const backButton = document.getElementById('back-button');

const image = document.getElementById("image");
const productTitle = document.getElementById('product-title');
const productPrice = document.getElementById('product-price');
const productRating = document.getElementById('product-rating');
const productDescription = document.getElementById('product-description');
const mainContainer = document.querySelector("main");
let scrollPosition = 0;


//For tailwindcss code reuse
document.querySelectorAll('.product-card').forEach(card => {
  const imgSrc = card.getAttribute('data-image');
  const title = card.getAttribute('data-title');
  const price = card.getAttribute('data-price');
  const rating = card.getAttribute('data-rating');
  
  card.classList.add('w-full', 'h-[290px]', 'basis-[47%]', 'sm:basis-[30%]', 'md:h-[350px]', 'lg:h-[380px]', 'lg:basis-[23%]', '2xl:basis-[14%]', 'p-2', 'bg-white','shadow-md','rounded-t', 'cursor-pointer');
  
  card.innerHTML = `
    <img class="cart-image rounded object-cover w-full h-[50%]" src="${imgSrc}" alt="${title}" loading="lazy">
    <div class="product-details p-2">
      <h2>${title}</h2>
      <div class="flex flex-row justify-between items-center mt-2">
        <p id="price" class="text-[12px] font-semibold"><span class="font-medium text-[14px]">Price: </span> ${price}</p>
        <i class="px-2 rounded py-1 border-2 border-gray-600 fa-regular fa-heart"></i>
      </div>
      <h4>
        <i class="fa-solid fa-star"></i>
        <span class="text-green-800 text-[14px]">${rating}</span>
      </h4>
    </div>
  `;
  card.addEventListener('click', () => {
    header.style.display = 'none';
  
  
    scrollPosition = window.scrollY;
  
    mainContainer.style.display = 'none';
  
  
    productDetailsContainer.style.display = 'block';
  
    image.src = card.getAttribute('data-image')
    productTitle.textContent = card.getAttribute('data-title');
    productPrice.textContent = `Price: ${card.getAttribute('data-price')}`;
    productRating.textContent = `Rating: ${card.getAttribute('data-rating')}`;
    productDescription.textContent = card.getAttribute('data-description');
  
  
  });
})

backButton.addEventListener('click', () => {
  productDetailsContainer.style.display = 'none';
  header.style.display = 'block';
  mainContainer.style.display = 'flex'; 
  window.scrollTo(0, scrollPosition);
});


/// Cart Management
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartPage = document.getElementById('cartSection');
const header = document.querySelector("header");
const cartPageBtn = document.querySelectorAll('.cartPage');
const cartItemsContainer = document.querySelector('.cart-items-container'); 

const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const renderCartPage = () => {
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p style="text-align:center; width: 100%;">Your cart is empty!</p>';
    return;
  }

  cart.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    cartItem.innerHTML = `
      <div class="details flex gap-2">
        <img class="w-[70px] h-[70px] object-cover" src="${item.image}" alt="${item.title}">
        <span>${item.title}</span>
      </div>
      <div class="quantity flex justify-center items-center gap-2">
        <button class="decrease-qty p-2 border-2 shadow-sm text-[20px]" data-index="${index}">-</button>
        <p>${item.quantity}</p>
        <button class="increase-qty p-2 border-2 shadow-sm text-[20px]" data-index="${index}">+</button>
      </div>
      <div class="w-[99%] price text-center mx-auto">$${(item.price * item.quantity).toFixed(2)}</div>
      <button class="remove-item p-2 text-red-500 font-semibold" data-index="${index}">X</button>
    `;

    cartItemsContainer.appendChild(cartItem);

    
    addCartItemEventListeners(cartItem, index);
    
  });
}

const addToCartButton = document.getElementById('addToCart');

addToCartButton.addEventListener('click', () => {
  const imgSrc = image.src;
  const title = productTitle.textContent;
  const price = parseFloat(productPrice.textContent.replace('Price: $', ''));
  const rating = productRating.textContent.replace('Rating: ', '');
  
  const dataId = productTitle.textContent; // or another unique identifier

  const existingItemIndex = cart.findIndex(item => item.dataId === dataId);

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity++;
  } else {
    cart.push({ image: imgSrc, title, price, quantity: 1, rating, dataId });
  }

  saveCart();
  evaluateCart();
});

const addCartItemEventListeners = (cartItem, index) => {
  cartItem.querySelector('.increase-qty').addEventListener('click', () => {
    cart[index].quantity++;
    saveCart();
    renderCartPage();
    evaluateCart();
  });

  cartItem.querySelector('.decrease-qty').addEventListener('click', () => {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
      saveCart();
      renderCartPage(); 
      evaluateCart(); 
    }
  });

  cartItem.querySelector('.remove-item').addEventListener('click', () => {
    cart.splice(index, 1);
    saveCart(); 
    renderCartPage();
    evaluateCart();
  });
};

// Handle showing the cart page
cartPageBtn.forEach(button => {
  button.addEventListener('click', () => {
    mainContainer.style.display = 'none';
    header.style.display = 'none';
    cartPage.style.display = 'block';
    renderCartPage(); 
    evaluateCart();
  });
});


const backMainPage = document.getElementById("backButton");
backMainPage.addEventListener('click', () => {
  document.querySelector("main").style.display = 'flex';
  header.style.display = 'block';
  cartPage.style.display = 'none';
  window.scrollTo(0, 0); 
});

renderCartPage();

const evaluateCart = () => {
  const cartSummary = document.getElementById("cartSummary");
 

  if (cart.length === 0) {
    cartSummary.style.display = 'none';
    cartSummary.innerHTML = '';
    return;
  }

  cartSummary.style.display = 'flex';

  let totalProducts = cart.length;
  let totalQuantity = 0;
  let totalPrice = 0;

  cart.forEach(item => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  cartSummary.innerHTML = `
    <p id="totalProducts" class="text-green-800">Total Products: ${totalProducts}</p>
    <p id="totalQuantity" class="text-green-800">Total Quantity: ${totalQuantity}</p>
    <p id="totalPrice" class="text-green-800">Total Price: $${totalPrice.toFixed(2)}</p>
  `;

};

// Added to the cart 
const cartAdd = document.querySelectorAll(".addToCart");
cartAdd.forEach(add => {
  add.addEventListener("click", () => {
    const originalText = add.innerHTML;
    add.innerHTML = `Product added!`

    setTimeout(() => {
      add.innerHTML = originalText;
    }, 2000);
  })
});
evaluateCart();