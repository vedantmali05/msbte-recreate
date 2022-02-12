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

// TODO: Automatic scrolling of news

let moreOptionsBtn = document.querySelector(".more-options-btn"),
    moreOptions = document.querySelector(".more-options");

moreOptionsBtn.onclick = () => {
    moreOptionsBtn.classList.toggle("open");
    moreOptions.classList.toggle("open");
};

let zoomInBtn = document.querySelector(".zoom-in"),
    zoomResetBtn = document.querySelector(".zoom-reset"),
    zoomOutBtn = document.querySelector(".zoom-out"),
    zoomStatus = 100;

zoomInBtn.onclick = () => {
    if (zoomStatus <= 130) {
        zoomStatus += 10;
        document.body.style.zoom = zoomStatus + "%";
    }
};

zoomOutBtn.onclick = () => {
    if (zoomStatus >= 80) {
        zoomStatus -= 10;
        document.body.style.zoom = zoomStatus + "%";
    }
};

zoomResetBtn.onclick = () => {
    zoomStatus = 100;
    document.body.style.zoom = zoomStatus + "%";
};

let themeBtn = document.querySelector(".theme-toggle"),
    themeDarkBtn = document.querySelector(".theme-dark-btn"),
    themeLightBtn = document.querySelector(".theme-light-btn");

themeBtn.onclick = () => {
    themeDarkBtn.classList.toggle("set");
    themeLightBtn.classList.toggle("set");
};

let printBtn = document.querySelector(".print-btn");

printBtn.onclick = () => {
    window.print();
};