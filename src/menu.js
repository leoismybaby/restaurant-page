const loadMenu = function() {
    // create DOM elements
    let menuContainer = document.createElement('div')
    let appetizer = document.createElement('h1')
    let app1 = document.createElement('p')
    let app2 = document.createElement('p')
    let app3 = document.createElement('p')
    let entrees = document.createElement('h1')
    let entree1 = document.createElement('p')
    let entree2 = document.createElement('p')
    let entree3 = document.createElement('p')
    let drinks = document.createElement('h1')
    let drink1 = document.createElement('p')

    // add classes and attributes
    menuContainer.classList.add('tab')

    // add text content
    appetizer.textContent = "Appetizer"
    app1.textContent = "Grabong .... 15"
    app2.textContent = "Garlic Shrimp .... 12"
    app3.textContent = "Tom Yum .... 10"
    entrees.textContent = "Entrees"
    entree1.textContent = "Pad See Ew .... 22"
    entree2.textContent = "Pad Thai .... 24"
    entree3.textContent = "Pad Khee Mao .... 22"
    drinks.textContent = "Drinks"
    drink1.textContent = "Thai Iced Tea .... 7"


    // append child
    let content = document.getElementById('content')
    content.appendChild(menuContainer)
    menuContainer.appendChild(appetizer )
    menuContainer.appendChild(app1)
    menuContainer.appendChild(app2)
    menuContainer.appendChild(app3)
    menuContainer.appendChild(entrees)
    menuContainer.appendChild(entree1)
    menuContainer.appendChild(entree2)
    menuContainer.appendChild(entree3)
    menuContainer.appendChild(drinks)
    menuContainer.appendChild(drink1)

}

export { loadMenu }

{/* <div class="container">
        <h1>Appetizers</h1>
        <p>Grabong .... 15</p>
        <p>Garlic Shrimp .... 12</p>
        <p>Tom Yum .... 10</p>
        <h1>Entrees</h1>
        <p>Pad See Ew .... 22</p>
        <p>Pad Thai .... 24</p>
        <p>Pad Khee Mao .... 22</p>
        <h1>Drinks</h1>
        <p>Thai Iced Tea .... 7</p>
      </div> */}