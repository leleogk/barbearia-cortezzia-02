// animações suaves ao rolar
const elements = document.querySelectorAll(".fade-up");

function reveal() {
    const trigger = window.innerHeight * 0.85;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) el.classList.add("visible");
    });
}

window.addEventListener("scroll", reveal);
reveal();
