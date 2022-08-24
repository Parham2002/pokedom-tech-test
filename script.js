import pokemonArray from "./data/pokemon.js"
const cardContainer = document.querySelector(".card-container")

let code = ``
pokemonArray.forEach(card => {
    card.name = card.name.charAt(0).toUpperCase() + card.name.slice(1)
    code = code + `
    <div class="card">
        <div class="card__content">
            <img src=${card.sprite} alt=${card.name}>
            <div class="card__heading">${card.name}</div>
            <div class="card__text">${card.name}(#${card.id}) is a ${card.types.join(" & ")} type pokemon.</div>
        </div>
    </div>`
})


cardContainer.innerHTML = code;