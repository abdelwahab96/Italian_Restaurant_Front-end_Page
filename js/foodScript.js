var imgList = document.querySelectorAll(".slider .cl img");

var active = document.getElementsByClassName("active"),
    indicator = document.querySelectorAll(".indicators ul li");
console.log(indicator)




   var c =0;

 function slider(){
   
     
     if (c >2){
         
         imgList[c].classList.remove("active");
         imgList[c].style.opacity = "";
         indicator[c].removeAttribute("id","active-ol")
         
         
         return c = 0;
         imgList[c].classList.add("active");
         imgList[c].style.opacity = "1";
         indicator[c].setAttribute("id","active-ol")
         
     }
     else{
          imgList[c].classList.remove("active");
         imgList[c].style.opacity = "";
         indicator[c].removeAttribute("id","active-ol")
         
         c= c+1;
         if (c ==3){
             c =0;
             imgList[c].classList.add("active");
             imgList[c].style.opacity = "1";
             indicator[c].setAttribute("id","active-ol")
             
         }
         imgList[c].classList.add("active");
         imgList[c].style.opacity = "1";
         indicator[c].setAttribute("id","active-ol")
         
     }
     
    
    
    
     
}

var strt = setInterval(slider,3000);



























