class Product {
  constructor(title, imageUrl, price, description){
    this.title = title,
    this.imageUrl = imageUrl,
    this.price = price,
    this.description = description
  }
}

class ShoppingCart {
  items = []
  render(){
    const cartEl = document.createElement('section')
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `

    cartEl.className = 'cart'
    return cartEl
  }
}

class ProductItem{
  constructor(product){
    this.product = product
  }

  addToCart(){
    const cartEl = new ShoppingCart()
    const renderHook = document.getElementById('app')
    renderHook.append(cartEl)
  }

  render(){
    const prodEl = document.createElement('li')
      prodEl.className = 'product-item'
      prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}">
          <div class="product-item__content">
            <h2>\$${this.product.price}</h2>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `
    const addCartBtn = prodEl.querySelector('button')
    addCartBtn.addEventListener('click', this.addToCart.bind(this))
    return prodEl
  }

}

class ProductLists{
  products =  [
    new Product('A pilow','./assets/images/pillow.jpg',19.99, 'A soft pillow'),
    new Product('A Carpet','./assets/images/carpet.jpeg',89.99,'A carpet which you might like or not')
  ]

  render() {
    const prodtList = document.createElement('ul')
    prodtList.classList = 'product-list'
    for(const prod of this.products){
      const productItem = new ProductItem(prod)
      prodtList.append(productItem.render())
    }
    return prodtList
  }
}

class Shop {
  render(){
    const renderHook = document.getElementById('app')

    const cart = new ShoppingCart()
    const cartEl = cart.render()
    const prodList = new ProductLists()
    const prodListEl = prodList.render()

    renderHook.append(cartEl)
    renderHook.append(prodListEl)
    
  }
}


const shop = new Shop
shop.render()