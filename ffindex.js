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
//Get the Array of each Char-info block using for-loop
function listChar(char){
    let fflist = char
     //for (i = 0; i < Object(c).length; i++){
        let ffName = fflist.name
        let ffDescrip = fflist.description
        let ffPics = fflist.pictures[0].url
        console.log(ffPics)
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
// add eventlistener -click to move to different characters
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('inputs', (e) => {
    const searchData = e.target.value
    console.log(searchData)}
)


    
    

            
          









