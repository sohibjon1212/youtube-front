let ul = document.querySelector("ul");
ul.style.display = "none";

let isOpened = false;

let menuIcons = document.querySelectorAll(".menu-icon");
menuIcons[0].addEventListener("click", () => {
    document.querySelector("nav").style.left = "0";
    document.querySelector(".darker").style.display = "block";

    ul.style.display = "block";
    isOpened = true;
})

menuIcons[1].addEventListener("click", () => {
    if (isOpened == true) {
        // Yopish
        document.querySelector("nav").style.left = "-30%";
        document.querySelector(".darker").style.display = "none";

        ul.style.display = "none";
        isOpened = false;
    }
})
 let paga = "home"
let liArray = document.querySelectorAll("li");
liArray.forEach(li => {
    li.onclick = function() {

        liArray.forEach(li => {
            li.classList.remove("active")
        })

        li.classList.add("active");

        console.log(li.id);

        page = li.id;

        switch(paga){
            case "home":{
                document.querySelector("#root").innerHTML =
                `<h1>home bu</h1>
              
           
              `
            
              ;
                break;
            }
            case "short":{
                document.querySelector("#root").innerHTML =
                '<h1>short bu</h1>';
                break;
            }
            case "subscription":{
                document.querySelector("#root").innerHTML =
                '<h1>subscription bu</h1>';
                break;
            }
            case "channel":{
                document.querySelector("#root").innerHTML =
                '<h1>channel bu</h1>';
                break;
            }
            case "history":{
                document.querySelector("#root").innerHTML =
                '<h1>history bu</h1>';
                break;
            }
            case "playlists":{
                document.querySelector("#root").innerHTML =
                '<h1>playlists bu</h1>';
                break;
            }
            case "Your videos":{
                document.querySelector("#root").innerHTML =
                '<h1>Your videos bu</h1>';
                break;
            }
            case "watch later":{
                document.querySelector("#root").innerHTML =
                '<h1>watch later bu</h1>';
                break;
            }
            case "like":{
                document.querySelector("#root").innerHTML =
                '<h1>like bu</h1>';
                break;
            }
            default: {
                document.querySelector("#root").innerHTML =
                '<h1>404 not found</h1>'
            }


        }


    }

});