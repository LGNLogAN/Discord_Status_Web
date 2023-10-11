function changeLocation(){
    document.querySelector(".changelocation_view").style.display = "block";
}

document.querySelector(".closeview").addEventListener("click",() =>{
    document.querySelector(".changelocation_view").style.display = "none";
})
