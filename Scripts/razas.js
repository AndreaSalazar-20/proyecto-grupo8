// botón hacia arriba

const upBtn = document.getElementById("upBtn");

window.onscroll = function () { handleScroll() };

function handleScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        upBtn.classList.remove("hide");
        upBtn.classList.add("show");
        upBtn.style.display = "block";
    } else {
        upBtn.classList.remove("show");
        upBtn.classList.add("hide");
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollTopFd() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
