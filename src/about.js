const loadAbout = function() {
    // create DOM elements
    let aboutContainer = document.createElement('div')
    let aboutUs = document.createElement('h1')
    let aboutContent = document.createElement('p')
    let img = document.createElement('img')

    // add attributes and classes
    img.src = "https://images.unsplash.com/photo-1571903244693-227d7733a917?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    aboutContainer.classList.add('tab')

    // add text content
    aboutUs.textContent = "About Us"
    aboutContent.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


    // append chils
    let content = document.getElementById('content')
    content.appendChild(aboutContainer)
    aboutContainer.appendChild(img)
    aboutContainer.appendChild(aboutUs)
    aboutContainer.appendChild(aboutContent)
}

export { loadAbout }