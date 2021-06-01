



// fetch from FF DB
fetch('https://www.moogleapi.com/api/v1/characters')
.then(response => response.json())
.then(characters=>console.log(characters))
.then(characters=>listCharacter(characters))

//format the data-character
function listCharacter(xx){
    //const charList = document.querySelector('#characterList')
    const charName= xx.id[0].name
    console.log(charName)
}

listCharacter();

// add eventlistener -click to move to different character


