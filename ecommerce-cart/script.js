document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "product 1",
      price: 29.99,
    },
    {
      id: 2,
      name: "product 2",
      price: 49.99,
    },
    {
      id: 3,
      name: "product 3",
      price: 99.99,
    },
    {
      id: 4,
      name: "product 4",
      price: 99.95,
    },
  ];

  const cart = []

  const productList = document.getElementById("product-list")
  const cartItems= document.getElementById("cart-items")
  const emptyCartMessage= document.getElementById("empty-cart")
  const cartTotalMessage= document.getElementById("cart-total")
  const totalPriceDisplay= document.getElementById("total-price")
  const checkoutOutBtn= document.getElementById("checkout-btn")

  products.forEach((products)=>{
      const productDiv=document.createElement("div")
      productDiv.classList.add("product")
      productDiv.innerHTML=`
      <span>${products.name} - ${products.price.toFixed(2)}</span>
      <button data-id="${products.id}">Add to cart</button>
      `
      productList.appendChild(productDiv)
  })

  productList.addEventListener("click",(e)=>{
    if(e.target.tagName==="BUTTON"){
      const productId= parseInt(e.target.getAttribute("data-id"))
      const product= products.find(p=> p.id === productId)
      addToCart(product)
    }
    
  })


  function addToCart(product){
    cart.push(product)
    rendercart()
    
  }


  function rendercart(){
    cartItems.innerText="";
    let totalPrice=0;

    if(cart.length>0){
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item,index)=>{
        totalPrice+= item.price
        const cartItem=document.createElement("div")
        cartItem.innerHTML=`
        ${item.name} - ${item.price.toFixed(2)}
        `
        cartItems.appendChild(cartItem)
        totalPriceDisplay.textContent=`${totalPrice.toFixed(2)}`

      })
    }else{
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.textContent= `$0.00`
      
    }
  }
  
  checkoutOutBtn.addEventListener("click",()=>{
    cart.length=0
    alert("Checked out successfully")
    rendercart()
  })

});
