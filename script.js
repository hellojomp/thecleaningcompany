

document.addEventListener("DOMContentLoaded", function() {
    const whatsappFloat = document.querySelector('.whatsapp-float');
    setInterval(() => {
        whatsappFloat.classList.toggle('flipped');
    }, 3000);
});