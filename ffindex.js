
const ffUrl = 'https://www.moogleapi.com/api/v1/characters'
let ul = document.querySelector(`#charactersList`)   
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
     //for (i = 0; i < Object(c).length; i++){
        let ffName = fflist.name
        let ffDescrip = fflist.description
        let ffPics = fflist.pictures[0].url
        
            let h2 = document.createElement(`h2`)
            let pTags = document.createElement(`p`)
            let imgTag = document.createElement('img')
                pTags.textContent = ffDescrip
                h2.textContent = ffName
                imgTag.src = ffPics
                    ul.append(h2)
                    ul.append(pTags)         
                    ul.append(imgTag)  
  }



const searchBar = document.querySelector('#searchWrapper')

searchBar.addEventListener(`submit`, userInput)

function userInput (e) {
  e.preventDefault()

  let newInput = e.target.querySelector(`#searchBar`).value
  console.log (newInput = b)
}





    
    

            
