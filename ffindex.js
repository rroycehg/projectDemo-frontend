



// fetch from FF DB
fetch('https://www.moogleapi.com/api/v1/characters')
.then(response => response.json())
.then(characters=>console.log(characters))
.then(characters=>listCharacter(characters))

//format the data-character
function listCharacter(xx){
    
}



// add eventlistener -click to move to different character


