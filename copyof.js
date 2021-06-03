const ffUrl = 'https://www.moogleapi.com/api/v1/characters/'
let ul = document.querySelector(`#charactersList`)   
let searchBar = document.getElementById(`#searchbar`)   
let list = document.createElement('li')
// fetch from FF DB
fetch(ffUrl)
.then(res => res.json())
.then(data => listChar(data))
//.then(data => console.log(data))
//Get the Array of each Char-info block using for-loop
function listChar(person){
    //console.log(person);
    let nameHead = document.createElement('h2')
    let img = document.createElement('img')
    let description = document.createElement('p')
    person.forEach(element=>{
        //return console.log(element.name, element.description)
        nameHead.textContent = element.name
        description.textContent = element.description
        let linkPic = element.pictures.forEach(array=>array.url)
        img.src = linkPic
        //console.log(linkPic)
    },
    //append to DOM
    ul.append(nameHead),
    ul.append(description),
    ul.append(img)
    )}