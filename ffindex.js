
const ffUrl = 'https://www.moogleapi.com/api/v1/characters'
listChar();

// fetch from FF DB
fetch(ffUrl)
.then(res => res.json())
.then(characters => {
    listChar(characters)

})


//Get the Array of each Char-info block using for-loop
function listChar(char){
        let array = Object(char);
        
       for (i = 0; i < Object(char).length; i++){
             array = Object(char)[i];
             //console.log(array)
        }
}

//Take the list of Characters and append it to a container
function appendChar() {

}

// add eventlistener -click to move to different character


