
//selecting side navbar, menu icon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right = 0
})

closenav.addEventListener("click",function(){
   sidenav.style.right = "-50%"
})


//product search functionality

var productContainer = document.getElementById("productContainer")


var search = document.getElementById("search")
       
var productList = productContainer.querySelectorAll("div")

       console.log(productList)

    //    console.log(h1List)

        search.addEventListener("keyup",function(){
        //    var enteredValue = event.target.value
           var enteredValue = event.target.value.toUpperCase()
        //    console.log(enteredValue)

        for(count=0;count<productList.length;count++)
        {
            var productName = productList[count].querySelector("h2").textContent

            if(productName.toUpperCase().indexOf(enteredValue) == -1)
            {
                productList[count].style.display = "none"
            }
            else{
                productList[count].style.display = "block"
            }


        }

        })