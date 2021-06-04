const ffUrl = 'https://www.moogleapi.com/api/v1/characters'

let ul = document.querySelector('.rightColumn') 



// fetch from FF DB
fetch(ffUrl)
.then(res => res.json())
.then(chars => {
    listName(chars)
  
    
})
.catch(error => {console.log(error);})

function listName(name){
    name.forEach(nameObj=>{
        let ffname =nameObj.name
        let li = document.createElement("li")
        li.textContent=ffname
        ul.append(li)
        
        
        //Event Handler
        li.addEventListener("click", (e) =>{
            console.log(e.target.innerText);
            li.style.color = "#ce42f5" 
            displayName();
            

        // DISPLAY FUNCTIONS
        
        // grabs name to display banner
        function displayName(bannerName){
   
            bannerName = e.target.innerText
            let h2= document.querySelector(".name")
            h2.textContent= e.target.innerText

            fetch(ffUrl)
                .then((res) => res.json())
                .then((data) => {
                    let descpt = document.querySelector(".descpt")
                    let charPic = nameObj.pictures[0].url
                    let img= document.querySelector("img")
                    if (bannerName=nameObj.name) {
                        descpt.textContent= nameObj.description
                        img.src=charPic 
                        
                    }
                })
                
                
            }
            
            
        







        })
        
        
        
    })
}



    
   





