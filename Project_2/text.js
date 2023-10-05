let text = '테스트 텍스트 하하하하하하하';
let content = document.querySelector(".textanimation");
let index = 0;
let typingSpeed = 100; // Adjust typing speed in milliseconds

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            textTypingAnimation();
        }
    });
});

let sectionText = document.querySelector('.textanimation');
observer.observe(sectionText);

function textTypingAnimation() {
    if (index < text.length) {
        content.textContent += text[index];
        index++;
        setTimeout(textTypingAnimation, typingSpeed);
    }
}
