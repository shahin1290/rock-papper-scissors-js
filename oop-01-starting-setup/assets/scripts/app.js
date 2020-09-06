class Product {
  constructor(title, imageUrl, price, description){
    this.title = title,
    this.imageUrl = imageUrl,
    this.price = price,
    this.description = description
  }
}


const productLists = {
  products: [
    new Product('A pilow','./assets/images/pillow.jpg',19.99, 'A soft pillow'),
    new Product('A Carpet','./assets/images/carpet.jpeg',89.99,'A carpet which you might like or not')
  ],

  render() {
    const renderHook = document.getElementById('app')
    const prodtList = document.createElement('ul')
    prodtList.classList = 'product-list'
    for(const prod of this.products){
      const prodEl = document.createElement('li')
      prodEl.className = 'product-item'
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}">
          <div class="product-item__content">
            <h2>\$${prod.price}</h2>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `
      prodtList.append(prodEl)
    }
    renderHook.append(prodtList)
  }
}

productLists.render()