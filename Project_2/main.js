const togglebtn = document.querySelector('.navbar_bar');

const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

togglebtn.addEventListener("click",function (){
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})


let observer = new IntersectionObserver((e)=>{
    e.forEach((i)=>{
        if(i.isIntersecting){
            i.target.style.opacity = '1';
        }else{
            i.target.style.opacity = '0';
        }
    })
})
let sectionMain =  document.querySelector('.section_main');
observer.observe(sectionMain);

const subTitle = '와주셔서 감사합니다 이건 테스트 문자입니다';
const typingSpeed = 70;
let content = document.querySelector(".section_text");
let autoIncrease = 0;


let subtitleObserver = new IntersectionObserver((textAnimation_Parameter_1)=>{
    textAnimation_Parameter_1.forEach(entry => {
        if(entry.isIntersecting){
            textTypingAnimation();
        }else{
            content.textContent = '';
            autoIncrease = 0;
        }
    });
});

let isObserving = document.querySelector('.section_text');
subtitleObserver.observe(isObserving);

function textTypingAnimation(){
    if(autoIncrease < subTitle.length){
        content.textContent += subTitle[autoIncrease];
        autoIncrease++;
        setTimeout(textTypingAnimation, typingSpeed);
    }
}


const ani_line = document.querySelector('.line');


let animationline = new IntersectionObserver((animationline_Parameter_1)=>{
    animationline_Parameter_1.forEach(entry => {
        if(entry.isIntersecting){
            ani_line.style.width = '20cm';
        }else{
            ani_line.style.width = '0cm';
        }
    })
})

let isObserving_2 = document.querySelector('.line');
animationline.observe(isObserving_2);

/*
window.addEventListener('load',()=> {
        ani_line.style.width = '20cm';
});
새로고침시 발생하는 이벤트
*/