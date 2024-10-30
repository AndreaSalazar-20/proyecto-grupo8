$(document).ready(function() {
    $(window).on('scroll', function() {
        $('.donations-container, .concept-container, .main-txt, .main-img, .categories h2, .boxlayout, .social-container, .adopt-container').each(function() {
            var top_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
        
            if (bottom_of_window > top_of_element) {
                $(this).addClass('visible');
            }
        });
    });

    $(window).trigger('scroll');
})

// boton hacia arriba

const upBtn = document.getElementById("upBtn");

window.onscroll = function() { handleScroll()};

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
