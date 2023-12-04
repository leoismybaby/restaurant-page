 const loadHome = function() {

let image1 = document.createElement('img')
let section1 = document.createElement('div')
let container1 = document.createElement ('div')
let image2 = document.createElement('img')
let p1 = document.createElement("p")
let image3 = document.createElement('img')
let section2 = document.createElement('div')
let p2 = document.createElement('p')
let container2 = document.createElement('div')
let image4 = document.createElement('img')
let div = document.createElement('div')

    image1.src = "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    section1.classList.add('section')
    container1.classList.add('container')
    image2.src = "https://images.unsplash.com/photo-1646850148817-c3a5e8a35fd9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    image3.src = "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    section2.classList.add('section')
    container2.classList.add('container')
    image4.src = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    div.classList.add('tab')

p1.textContent = "The Red Elephant offers world-class Thai cuisine by internationally celebrated chef, Pranta Srey. Comprehensive research and technical skill combine to create an authentic Thai menu that is unique in New York."
p2.textContent = "Join us for an experience like none other."
 let content = document.getElementById('content')

    content.appendChild(div)
    div.appendChild(image1)
    div.appendChild(section1)
    section1.appendChild(container1)
    container1.appendChild(image2)
    section1.appendChild(p1)
    div.appendChild(image3)
    div.appendChild(section2)
    section2.appendChild(p2)
    section2.appendChild(container2)
    container2.appendChild(image4)
 }

 export { loadHome }
