// function navbar(){
//     var x = document.getElementById("mynav");
//     if(x.className === "nav"){
//         x.className += " responsive";
//     }else{
//         x.className = "nav";
//     }
// }


function mynav(){
    let x = document.getElementById("dropdown");
    x.classList.toggle("navbar");
}


function mysearch(){
    let y = document.getElementById("searchh");
    y.classList.toggle("mysearchstyle");
}