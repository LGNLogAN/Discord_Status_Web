document.getElementById("discord-card-open").addEventListener("click",function(){
    document.getElementById("discord-card").style.display = "block";
})
document.getElementById("discord-card-close").addEventListener("click",function(){
    document.getElementById("discord-card").style.display = "none";
})

document.getElementById("gmail-card-open").addEventListener("click",function(){
    document.getElementById("gmail").style.display = "block";
})
document.getElementById("gmail-card-close").addEventListener("click",function(){
    document.getElementById("gmail").style.display = "none";
})

function copyClipboard() {
    const text = document.getElementById('text').textContent;
    const textarea = document.createElement('textarea');
    textarea.textContent = text;
    document.body.append(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert("복사되었습니다.");
  }
  
document.getElementById('copybutton').addEventListener('click', copyClipboard);