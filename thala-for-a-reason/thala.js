let soundPlaying = false;


function checkThala() {
    const snippet = document.getElementById('snippet').value.trim();
    let sum = 0;

    if (/^\d+$/.test(snippet)) sum = snippet.split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    else sum = snippet.length;

    if (sum === 7) {
        showSuccessMessage();
        return false; 
    } else {
        showFailureMessage();
        return false; 
    }
}


function showSuccessMessage() {
    const successSound = new Audio("./thala-for-a-reason/bole_jo_koyal.mp3");
    successSound.play();
    
    const snippet = document.getElementById('snippet').value.trim();

    Swal.fire({
        title: `${snippet} - Thala For A Reason`,
        html: '<video autoplay muted loop width="400" height="250" style="margin-bottom: 20px;"><source src="./thala-for-a-reason/msd_correct.mp4" type="video/mp4"></video><p style="margin-bottom: 10px;">True Thala Fan!!</p>',
        showCloseButton: true,
        focusConfirm: true,
        confirmButtonText: '🗿',
        
        didOpen: () => {
            successSound.play();
            confettiAnimation();
        },
        willClose: () => {
            successSound.pause();
        }
    });
}


function confettiAnimation() {
    const duration = 1000;
    const animationEnd = Date.now() + duration;
    
    function createConfetti() {
        const confettiSettings = { particleCount: 20, spread: 300 };
        window.confetti({
            ...confettiSettings,
            origin: { x: Math.random(), y: Math.random() }
        });
    }
    
    function frame() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return;
        createConfetti();
        requestAnimationFrame(frame);
    }
    
    frame();
}


function showFailureMessage() {
    const successSound = new Audio("./thala-for-a-reason/moye_moye.mp3");
    successSound.play();
    
    Swal.fire({
        title: "Wrong!",
        text: `"One six didn't win us the World Cup"`,
        imageUrl: "./thala-for-a-reason/msd_wrong.jpg",
        imageWidth: 400,
        imageHeight: 275,
        showCloseButton: true,
        focusConfirm: true,
        confirmButtonText: '😔',
        imageAlt: "One six didn't win us the World Cup",
        
        didOpen: () => {
            successSound.play();
        },
        willClose: () => {
            successSound.pause();
        }
    });
}