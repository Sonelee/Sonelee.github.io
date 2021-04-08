window.onload = function (){
    var nav = document.querySelectorAll(".nav a")
    // console.log(nav)
    for(var i=1;i<nav.length;i++){
        nav[i].addEventListener("click",()=>{
            alert("导航栏只是摆设");
        })
    }
}