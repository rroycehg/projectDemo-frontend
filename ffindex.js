
const ffUrl = 'https://www.moogleapi.com/api/v1/characters'
  
let fflist = [];
// fetch from FF DB
fetch(ffUrl)
.then(res => res.json())
.then(chars => {
  fflist = chars
chars.forEach(char => listChar(char))})
.catch(error => {console.log(error);})

//.then(char => Object(char).forEach(listChar))
/* function random8() {
  for (let i = 0; i <= 8; i++){
    let randoNum = Math.floor(Math.random() * 200)
    fflist[randoNum]
  }
} */

//store user input and send that to the searchbar container
//Event Listener will listen for a "Keyup" to being matching the user input to 
//the database


function listChar(char){
    let fflist = char
    let docleft = document.querySelector(`div.left-column`) 
     //for (i = 0; i < Object(c).length; i++){
        let ffName = fflist.name
        let ffDescrip = fflist.description
        let ffPics = fflist.pictures[0].url
        
            let newP = document.createElement(`p`)
            let pTags = document.createElement(`p`)
            let imgTag = document.createElement('img')
                newP.textContent = ffName
                pTags.textContent = ffDescrip
                imgTag.src = ffPics
                
                docleft.append(newP)
                
                   
  }









    
    

            
