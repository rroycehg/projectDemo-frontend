const ffUrl = 'https://www.moogleapi.com/api/v1/characters'

let ul = document.querySelector('.rightColumn') 













// fetch from FF DB
fetch(ffUrl)
.then(res => res.json())
.then(chars => {
    listName(chars)
    displayName(chars)
    displayDs(chars)
    displayPicture(chars)
})
.catch(error => {console.log(error);})

function listName(name){
    name.forEach(nameObj=>{
        let ffname =nameObj.name
        let li = document.createElement("li")
        li.textContent=ffname
        ul.append(li)
        li.addEventListener("click", () => li.style.color = "#ce42f5" )
        
        text.onmouseover = changeName () =>{
        //change to japanese name
            let charName = element.japaneseName
        let h2= document.querySelector(".name")
        h2.textContent= charName

        }
        
    })
}

//Event Handler






//DISPLAY FUNCTIONS
//
//grabs name to display banner
function displayName(bannerName){
    bannerName.forEach(element=>{
        let charName = element.name
        let h2= document.querySelector(".name")
        h2.textContent= charName
    })


        
    
    
}

//grabs desciption to display banner
function displayDs(ds){
   ds.forEach(element=>{
        let descpt = document.querySelector(".descpt")
        let charDes = element.description
        descpt.textContent=charDes 
        
})
    
}




// grabs picture to display banner
function displayPicture(picture){
   picture.forEach(element=>{
        let img= document.querySelector("img")
        let charPic = element.pictures[0].url
        img.src=charPic 
        
})

}

