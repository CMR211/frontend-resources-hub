createSiteContent(data)
// data comes from links.js

function createSiteContent(links) {
    createCategories(links)
    createNavbar(links)
    createElements(links)
}

function createCategories(links) {
    // creates categories from data file ("type" parameter in each object)
    const typesArray = Array.from(new Set(links.map(i => i.type)))
    const container = document.getElementById("container")
    typesArray.forEach((type, index) => {
        const subcontainer = document.createElement("div")
        subcontainer.classList.add("grid")
        subcontainer.id = `${type}`
        subcontainer.innerHTML = `<h2 id="subtitle${
            index + 1
        }" class="subtitle">${type.replace("_", " ")}</h2>`
        container.appendChild(subcontainer)
    })
}

function createNavbar(links) {
    const typesArray = Array.from(new Set(links.map(i => i.type)))
    const container = document.getElementById("container-navbar")
    typesArray.forEach((type, index) => {
        const link = document.createElement("a")
        link.setAttribute("href", `#${type}`)
        link.classList.add("nav__item")
        link.innerHTML = `${type.replace("_", " ")}`
        container.appendChild(link)
    })
}

function createElements(links) {
    links
        .sort((a, b) => (a.title < b.title ? -1 : 1))
        .forEach(i => {
            const card = document.createElement("div")
            const container = document.getElementById(i.type)
            card.classList.add("card")
            card.innerHTML = `
                <a href=${i.url} class="link-reset">
                    <img class="card__img img-fluid" src='./assets/screenshots/${i.img}' alt="image of a ${i.title} website" />
                    <h3 class="card__title">${i.title}</h1>
                    <p class="card__description"><span class="bold">#${i.id}</span> ${i.desc}</p>
                </a>`
            container.appendChild(card)
        })
}
