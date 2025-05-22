function carregar() {
    fetch('jogos.json')
        .then(response => response.json())
        .then(jogos => {
            const conteiner = document.querySelector("#jogos-conteiner")

            jogos.map(jogo => {
                const card = document.createElement("div")
                card.classList.add("card")

                const img = document.createElement("img")
                img.src = jogo.imagem
                img.alt = jogo.nome

                const titulo = document.createElement("h3")
                titulo.textContent = jogo.nome

                card.appendChild(img)
                card.appendChild(titulo)
                conteiner.appendChild(card)

            })
        })
}

carregar()

