





const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

const messageSubscribed = document.getElementById("subscribe-message")


const btnSubscribe=document.getElementById("subscribeButton")
btnSubscribe.addEventListener("click", function(){
  console.log("click")
  messageSubscribed.style.display = 'block'
  
  setTimeout(() => {
    messageSubscribed.style.display = 'none'
    
  },5000)
})

const cartHeader = document.getElementById("cartHeader")
const cartDisplay = document.getElementById("cartDisplay")
cartHeader.addEventListener("click", () => {

  cartDisplay.style.right = '10px';
})

const closeCart = document.getElementById("closeCart") ?? null
if(closeCart){
  closeCart.addEventListener("click", () => {
  
    cartDisplay.style.right = '-400px';
  })
}



document.addEventListener('scroll', function() {
  // Define the scroll threshold (e.g., 100px from the top)
  const scrollThreshold = 100;

  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Get the element to which you want to apply the styles
  const contentElement = document.getElementById('headerId');
  const contentElement2 = document.getElementById('headerId2');

  // Check if the scroll position has reached the threshold
  if (scrollPosition > scrollThreshold) {
      // Change the background color if the threshold is passed
      contentElement.style.backgroundColor = 'black';
      contentElement2.style.backgroundColor = 'black';
  } else {
      // Revert the background color if the threshold is not met
      contentElement.style.backgroundColor = '';
      contentElement2.style.backgroundColor = '';
  }
});

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callback);
    }
  }

  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");
  
  const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  }
  
  addEventOnElements(navTogglers, "click", toggleNavbar);

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

const closeBtn = document.querySelector("[data-close-btn]");
const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("nav-active");
}
closeBtn.addEventListener("click", closeNavbar);


window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }
  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/*autoslide*/

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);


document.getElementById('subscribeButton').addEventListener('click', function(event) {
  console.log('test');
});


document.querySelectorAll('.product-card').forEach(card => {
  const img = card.querySelector('.product-image');
  const hoverSrc = img.getAttribute('data-hover');
  const originalSrc = img.getAttribute('src');

  card.addEventListener('mouseenter', () => {
    img.setAttribute('src', hoverSrc);
  });

  card.addEventListener('mouseleave', () => {
    img.setAttribute('src', originalSrc);
  });
});

if(document.readyState=="loading"){
  document.addEventListener("DOMContentLoaded", ready);
}else{
  ready();
}

function ready(){
  var removeCartButtons=document.getElementsByClassName('cart-remove');
  console.log(removeCartButton);
  for(var i=0;i<removeCartButtons.length;i++){
    var button=removeCartButtons[i];
    button.addEventListener('click', removeCartItem);
  }

  var quantityInputs=document.getElementsByClassName('cart-quantity')
  for(var i=0;i<quantityInputs.length;i++){
    var input=quantityInput[i]
    input.addEventListener('change', quantityChanged);
  }
}

function removeCartItem(event){
  var buttonClicked=event.target;
  buttonClicked.parentElement.remove(_);
  updatetotal();
}

function quantityChanged(event){
  var input=event.target;
  if(NaN(input.value)|| input.value <= 0)
   {
  input.value=1;
   }
   updatetotal();
}

function updatetotal(){
  var cartContent=document.getElementsByClassName('cart-content')[0];
  var cartBoxes=cartContent.getElementsByClassName('cart-box');
  var total=0;
  for(var i=0;i<cartBoxes.length;i++){
    var cartBox=cartBoxes[i]
    var priceElement=cartBox.getElementsByClassName('cart-price')[0];
    var quantityElement=cartBox.getElementsByClassName('cart-quantity')[0];
    var price=parseFloat(priceElement.innerText.replace("$",""));
    var quantity=quantityElement.value
    total=total+(price*quantity);


    document.getElementsByClassName('total-price')[0].innerText="$"+total;
  }
}