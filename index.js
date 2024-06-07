const drums = document.querySelectorAll('.drum');

// Gắn sự kiện click cho từng phần tử
for (let drum of drums) {
    drum.addEventListener('click', function() {
        const keyDrum = this.innerText;

        playSound(keyDrum);
        showAnimation(keyDrum);
    })
}

// Gắn sự kiện keypress cho toàn bộ tài liệu
document.addEventListener('keypress', function(event) {
    playSound(event.key);
    showAnimation(event.key);
})

// Hàm phát âm thanh dựa trên phím được nhấn/ button được click
function playSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            let kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
        
        default: console.log(key);
    }
}

// Hàm hiển thị animation
function showAnimation(key) {
    let activeButton = document.querySelector(`.${key}`);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}