const loadAbout = function() {
    // create DOM elements
    let aboutContainer = document.createElement('div')
    let aboutUs = document.createElement('h1')
    let aboutContent = document.createElement('p')


    // add text content
    aboutUs.textContent = "About Us"
    aboutContent.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


    // append chils
    let content = document.getElementById('content')
    content.appendChild(aboutContainer)
    aboutContainer.appendChild(aboutUs)
    aboutContainer.appendChild(aboutContent)
}

export { loadAbout }