let content = '안녕하세요';
let text = document.querySelector(".typing")
let index = 0;

ani()
function ani(){

    if(index < content.length){
        text.textContent += content[index];
        setInterval(ani, 100)
        index++;
    }
}