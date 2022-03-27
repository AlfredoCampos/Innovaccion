const buscarPokemon = () => {
    const pokeNameInput = document.getElementById("nombrePokemon");
    let pokeName = pokeNameInput.value;
    if (pokeName){
        pokeName = pokeName.toLowerCase();
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./assets/img/not-found.png")
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.front_default;
                pokeImage(pokeImg);
                pokeData(data)
                console.log(pokeImg);
            }
        });
    }
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokeData = (data) => {
    document.getElementById("statsNombre").textContent=data.species.name.toUpperCase();
    document.getElementById("statsTipo").textContent=data.types[0].type.name.toUpperCase();
    document.getElementById("statsAtaque").textContent=data.stats[1].base_stat
    document.getElementById("statsDefensa").textContent=data.stats[2].base_stat
    document.getElementById("statsVel").textContent=data.stats[5].base_stat
    document.getElementById("altura").textContent=data.height;
    document.getElementById("peso").textContent=data.weight;
}


