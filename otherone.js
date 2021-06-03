


const ffUrl = 'https://www.moogleapi.com/api/v1/characters'
listChar();
let ul = document.querySelector(`#charactersList`)   
let searchBar = document.getElementById(`#searchbar`)   

// fetch from FF DB
fetch(ffUrl)
.then(res => res.json())
.then(characters => {
    listChar(characters)
    //appendChar(characters)
})
//Get the Array of each Char-info block using for-loop
function listChar(char){
    for (i = 0; i < Object(char).length; i++){
        arrayName = Object(char)[i].name
        arrayDescrip = Object(char)[i].description
        arrayPicture =Object(char)[i].pictures[0].url
        let h2 = document.createElement(`h2`)
        let pTags = document.createElement(`p`)
        let imgTag= document.createElement('img')
        pTags.textContent = arrayDescrip
        h2.textContent = arrayName
        imgTag.src=arrayPicture
        ul.append(h2)
        ul.append(pTags)         
        ul.append(imgTag)
        //picture url
        /* searchBar.addEventlistener(keyup, (e)=>{
            let input = e.target.value 
            let searchBar = document.getElementById(`#searchbar`)   
        } )*/
    } 
}    
//Take the list of Characters and append it to a container        
// add eventlistener -click to move to different characters