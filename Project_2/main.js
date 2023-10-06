const togglebtn = document.querySelector('.navbar_bar');

const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

togglebtn.addEventListener("click",function (){
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})

/* 메인 타이틀 */
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
/* 메인 타이틀 */


/* 중간선 애니메이션 코드 */
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
/* 중간선 애니메이션 코드 */

/* 서브 타이틀 코드 */
let subTitleElemental = document.querySelector(".section_text");
let subTitle = subTitleElemental.textContent;
const typingSpeed = 60;
let content = document.querySelector(".section_text");
content.textContent = '';
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
/* 서브 타이틀 코드 */

/* 코딩박스 코드 */
const codingTypingSpeed = 20;
let javaCodingBoxElemental = document.querySelector(".javacode");
let javaCodingBox = javaCodingBoxElemental.textContent;
let autoIncrease_2 = 0;
let codingContent = document.querySelector(".javacode");
codingContent.textContent = '';


function textTypingAnimation_2(){
    if(autoIncrease_2 < javaCodingBox.length){
        codingContent.textContent += javaCodingBox[autoIncrease_2];
        autoIncrease_2++;
        setTimeout(textTypingAnimation_2, codingTypingSpeed);
    }
}

window.addEventListener('load',()=> {
    textTypingAnimation_2();
});


/* 코딩박스 코드 */


/* Hello World ! 출력 코드*/

let isObserving_3 = new IntersectionObserver((helloworldBox_Parameter)=>{
    helloworldBox_Parameter.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0px)';
        }else{
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(120px)';
        }
    })
})
let helloworld = document.querySelector(".javacodingBox_result");
isObserving_3.observe(helloworld);

/* Hello World ! 출력 코드 */









/* 새로고침시 발생하는 이벤트
window.addEventListener('load',()=> {
        ani_line.style.width = '20cm';
});
*/

// let codingTypingObserver = new IntersectionObserver((textAnimation_Parameter_2)=>{
//     textAnimation_Parameter_2.forEach(entry => {
//         if(entry.isIntersecting){
//             textTypingAnimation_2();
//         }else{
//             codingContent.textContent = '';
//             increase_2 = 0;
//         }
//     });
// });
//let isObserving_3 = document.querySelector('.card_content_text');
// codingTypingObserver.observe(isObserving);


