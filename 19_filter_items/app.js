const buttons = document.querySelectorAll(".button");
const items = document.querySelectorAll(".card");
<<<<<<< HEAD
const imgs = document.querySelectorAll(".img-container")

//////////////////////////////Filter//////////////////////////////

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault;
    const filter = e.target.dataset.filter;
=======

// Filter

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e);

    e.preventDefault;
    const filter = e.target.dataset.filter;
    console.log(filter);
>>>>>>> 630b920236ffa2b4db2d73e621b58212449d49c3
    items.forEach(function (item) {
      if (item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

<<<<<<< HEAD
//////////////////////////////Search-bar////////////////

const input = document.getElementById("search-bar");
const names = document.querySelectorAll(".item-name");

if (input) {
  input.addEventListener("keyup", searchBar, false)
}

function searchBar(e) {
=======
//Search-bar

const input = document.querySelector(".search-bar");
const names = document.querySelectorAll(".item-name");

input.addEventListener("keyup", (e) => {
>>>>>>> 630b920236ffa2b4db2d73e621b58212449d49c3
  //input field sring
  const filter = e.target.value.toLowerCase().trim();
  //applying filter to search
  names.forEach(function (name) {
    if (name.textContent.toLowerCase().includes(filter)) {
      name.parentElement.parentElement.style.display = "block";
    } else {
      name.parentElement.parentElement.style.display = "none";
    }
  });
<<<<<<< HEAD
};

//////////////////////////Modal///////////////////////////

const close = document.querySelector(".close");
const modal = document.getElementById("modal")

if (close) {
  imgs.forEach(function (img) {
    img.addEventListener("click", popModal);
    close.addEventListener("click", hideModal);
  });
}

function popModal(e) {
  modal.showModal();
  let cardId = e.target.parentElement.parentElement.dataset.card;
  modal.dataset.card = cardId
  // modal.dataset.card = cardId
=======
});

//Modal
const close = document.querySelector(".close");
const modal = document.querySelector(".template");

function popModal(e) {
  let cardId = parseInt(e.target.parentElement.parentElement.dataset.card);

>>>>>>> 630b920236ffa2b4db2d73e621b58212449d49c3
  const img = document
    .querySelector(`[data-card="${cardId}"]`)
    .querySelector(".img-container");
  const cardBody = document
    .querySelector(`[data-card="${cardId}"]`)
    .querySelector(".card-body");
  modal.classList.remove("hidden");
  modal.querySelector(".img-container").innerHTML = img.innerHTML;
  modal.querySelector(".card-body").innerHTML = cardBody.innerHTML;
}

function hideModal() {
<<<<<<< HEAD
  modal.close();
}

///////////////////////////////Carousel///////////////////////

=======
  modal.classList.add("hidden");
}

items.forEach(function (item) {
  item.addEventListener("click", popModal);
  close.addEventListener("click", hideModal);
});

//Carousel
>>>>>>> 630b920236ffa2b4db2d73e621b58212449d49c3

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let img = document.querySelector(".img-container");
let cardBody = document.querySelector(".card-body");

<<<<<<< HEAD

items.forEach(function () {
  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);
});

if (modal) {
  let cardId = modal.dataset.card;

  function nextSlide() {
    if (cardId < 8) {
      cardId++;
    } else {
      cardId = 0;
    }
    const img = document
      .querySelector(`[data-card="${cardId}"]`)
      .querySelector(".img-container");
    const cardBody = document
      .querySelector(`[data-card="${cardId}"]`)
      .querySelector(".card-body");
    console.log(cardId)
    modal.querySelector(".img-container").innerHTML = img.innerHTML;
    modal.querySelector(".card-body").innerHTML = cardBody.innerHTML;
  }

  function prevSlide() {
    if (cardId === 0) {
      cardId = 8;
    }
    cardId--;
    const img = document
      .querySelector(`[data-card="${cardId}"]`)
      .querySelector(".img-container");
    const cardBody = document
      .querySelector(`[data-card="${cardId}"]`)
      .querySelector(".card-body");
    console.log(cardId)
    modal.querySelector(".img-container").innerHTML = img.innerHTML;
    modal.querySelector(".card-body").innerHTML = cardBody.innerHTML;
  }
}

//shopping cart



items.forEach(function (item) {
  item.addEventListener("mouseover", showCartBtn);
  item.addEventListener("mouseout", hideCartBtn);
})

function showCartBtn(e) {
  let item = e.target.parentElement.parentElement
  let itemBtn = item.querySelector(".js-shop-btn")
  itemBtn.classList.remove("hidden")
}

function hideCartBtn(e) {
  let item = e.target.parentElement.parentElement
  let itemBtn = item.querySelector(".js-shop-btn")
  itemBtn.classList.add("hidden")
}



//////////////////////Shopping cart//////////////////////////

const shopBtns = document.querySelectorAll(".js-shop-btn")
const cartList = document.querySelector(".flex-cart-list")

let products = [{
    name: 'Earbuds Baleine',
    tag: 'earbudsbaleine',
    price: 49.99,
    inCart: 0,
    src: 'products/237/7569/fdf299aac4d225c32b5901ed4f855e3d419b612bb526d33d2eb08c0f97a2ad31__07370.1591295091.jpg?c=2'
  },
  {
    name: 'Headphones Doux',
    tag: 'headphonesdoux',
    price: 79.99,
    inCart: 0,
    src: 'products/160/4432/4ab5b22c06f9ce8c9548b96e59961a4dad9c596c8c8a3c5e7dca9fea48f6f044__06490.1556605229.jpg?c=2'
  },
  {
    name: 'Earbuds Brume',
    tag: 'earbudsbrume',
    price: 49.99,
    inCart: 0,
    src: 'products/236/7562/1d35da69e39c8eb1adf965ee94dddaafa34d56438511e4deba0e72f1700826d4__47925.1591207490.jpg?c=2'
  },
  {
    name: 'Headphones Ange',
    tag: 'headphonesange',
    price: 39.99,
    inCart: 0,
    src: 'products/188/7135/420aab977d369d62d3282138fff585ded01764f1a7d68b53888a0d13fcb6b8e4__87851.1584751633.jpg?c=2'
  },
  {
    name: 'Speakers Etoile',
    tag: 'speakersetoile',
    price: 99.99,
    inCart: 0,
    src: 'products/119/425/efb2c2cfa3ca3406f9f1a50b9f1e80485d5ca20d8fbcef7cdc7d7f65846c56b2__41486.1518490159.jpg?c=2'
  },
  {
    name: 'Headphones Luciole',
    tag: 'headphonesluciole',
    price: 69.99,
    inCart: 0,
    src: 'products/128/5105/3900fb6c225f20ff75e50f80cd7eade61e41cd65a1c9c8fe6277e459369879bc__26390.1563552350.jpg?c=2'
  },
  {
    name: 'Speakers Plaisir',
    tag: 'speakersplaisir',
    price: 109.99,
    inCart: 0,
    src: 'products/120/447/b7037dc50afada1190648b7ca0be18f85e35975b39b0b744240b6f55f951af30__02334.1518490204.jpg?c=2'
  },
  {
    name: 'Headphones Soleil',
    tag: 'headphonessoleil',
    price: 39.99,
    inCart: 0,
    src: '155/6577/2b0942b85b4abeb38b4a679bd9dc517fa5750b248154ce76697c9e011e85a103__32326.1579319584.jpg?c=2'
  },
  {
    name: 'Earbuds Tournesol',
    tag: 'earbudstournesol',
    price: 49.99,
    inCart: 0,
    src: '190/7339/a996d77e6201fc2fa578df224c5716f20f8328f06371b0b5e61010f083b76148__84463.1588868682.jpg?c=2'
  }
];

//Update Cart Count
shopBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let cardId = btn.parentElement.dataset.card
    cardId = parseInt(cardId)
    updateCount(products[cardId])
    totalCost(products[cardId])

  })
})

let productNumbers = 0
const cartCount = document.querySelectorAll(".cart span")

function onLoadCartNumbers() {
  productNumbers = localStorage.getItem('cartNumbers')
  if (productNumbers) {
    cartCount.forEach(count => {
      count.textContent = productNumbers;
    })
  }
}


function updateCount(product) {
  let productNumbers = parseInt(localStorage.getItem('cartNumbers'))
  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1)
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1)
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(product)
}

function setItems(product) {
  cartItems = JSON.parse(localStorage.getItem('productsInCart'))

  if (cartItems != null) {
    if (cartItems[product.tag] === undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    }
  }



  localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost")

  if (cartCost != null) {
    cartCost = parseFloat(cartCost)
    localStorage.setItem("totalCost", cartCost + product.price)
  } else {
    localStorage.setItem("totalCost", product.price)
  }

}





///////////////////////CART PAGE///////////////

function dispalyCart() {
  let cartItems = JSON.parse(localStorage.getItem('productsInCart'))
  let cartCost = localStorage.getItem("totalCost")
  cartCost = parseFloat(cartCost).toFixed(2)
  let productItems = document.querySelector(".flex-cart-list")
  let productTotal = document.querySelector(".total-price")
  if (cartItems && productItems) {
    productItems.innerHTML = '';
    Object.values(cartItems).map(item => {
      productItems.innerHTML += `
      <li class="cart-item">
      <div class="product">
      <img
      src="https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/${item.src}"
      alt=""
    />
          <p class="name">${item.name}</p>
        </div>
        <p class="price">$${item.price}</p>
        <div class="quantity-box">
    <button class=" btn-minus js-btn-minus"><i class="fas fa-minus-circle "></i></button>
        <p class=quantity>${item.inCart}</p>
        <button class="btn-plus js-btn-plus"><i class="fas fa-plus-circle"></i></button>
    </div>
    <p class="product-total">$${item.inCart*item.price}</p>
        <button class="remove-btn js-remove-btn">
          <i class="fas fa-trash fa-2x"></i>
        </button>
        </li>
      `
    })
    productTotal.textContent = `$${cartCost}`
  }
}

///clear all
const clearBasketBtn = document.querySelector(".js-clear-all")
clearBasketBtn.addEventListener("click", clearBasket)

function clearBasket() {
  let productItems = document.querySelector(".flex-cart-list")
  let productTotal = document.querySelector(".total-price")
  window.localStorage.clear()
  productItems.innerHTML = '';
  productTotal.textContent = `$0`
  document.querySelector(".cart span").textContent = ''
}

//remove item


let removeItemBtns = document.querySelectorAll(".js-remove-btn")
console.log(removeItemBtns)

removeItemBtns.forEach(btn => {
  btn.addEventListener("click", removeCartItem())
})



function removeCartItem() {
  console.log("remove item ")
}


onLoadCartNumbers()
dispalyCart()
=======
function nextSlide(e) {
  console.log("click");
  console.log(e.target.parentElement.parentElement);
  if (i < 9) {
    i++;
  } else {
    i = 0;
  }
  modal.querySelector(".img-container").innerHTML = img.innerHTML;
  modal.querySelector(".card-body").innerHTML = cardBody.innerHTML;
}

function prevSlide() {
  if (i === 0) {
    i = 8;
  }
  i--;
  modal.querySelector(".img-container").innerHTML = img.innerHTML;
  modal.querySelector(".card-body").innerHTML = cardBody.innerHTML;
}
items.forEach(function () {
  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);
});
>>>>>>> 630b920236ffa2b4db2d73e621b58212449d49c3
