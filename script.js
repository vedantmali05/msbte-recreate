let submenuBtn = document.querySelectorAll(".submenu-btn"),
    submenu = document.querySelectorAll(".submenu");

for (let i = 0; i < submenuBtn.length; i++) {
    document.onmouseup = () => {
        for (let j = 0; j < submenu.length; j++) {
            submenu[j].classList.remove("open");
        }
    };
    submenuBtn[i].onclick = () => {
        submenu[i].classList.toggle("open");
    };
}

let prevNews = document.querySelector(".prev-btn"),
    nextNews = document.querySelector(".next-btn"),
    news = document.querySelectorAll(".news"),
    counter = 0;

prevNews.onclick = () => {
    counter++;
    for (let j = 0; j < news.length; j++) {
        if (counter > 0) {
            counter = -news.length + 1;
        }
        news[j].style.transform =
            "translateX(" + counter * 100 + "%) translateY(-50%)";
    }
};

nextNews.onclick = () => {
    counter--;
    for (let j = 0; j < news.length; j++) {
        if (Math.abs(counter) == news.length) {
            counter = 0;
        }
        news[j].style.transform =
            "translateX(" + counter * 100 + "%) translateY(-50%)";
    }
};