// ///////////// MENU AND SUBMENU Script
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

// //////////// More Options
let moreOptionsBtn = document.querySelector(".more-options-btn"),
    moreOptions = document.querySelector(".more-options");

// MORE OPTIONS OPEN AND CLOSE
moreOptionsBtn.onclick = () => {
    moreOptionsBtn.classList.toggle("open");
    moreOptions.classList.toggle("open");
};

// More Options: Zoom in/Zoom out/Reset/Theme/Print
let zoomInBtn = document.querySelector(".zoom-in"),
    zoomResetBtn = document.querySelector(".zoom-reset"),
    zoomOutBtn = document.querySelector(".zoom-out"),
    zoomStatus = 100;

// More Options/Zoom in
zoomInBtn.onclick = () => {
    if (zoomStatus <= 130) {
        zoomStatus += 10;
        document.body.style.zoom = zoomStatus + "%";
    }
};
// More Options/Zoom out
zoomOutBtn.onclick = () => {
    if (zoomStatus >= 80) {
        zoomStatus -= 10;
        document.body.style.zoom = zoomStatus + "%";
    }
};

// More Options/Reset Zoom
zoomResetBtn.onclick = () => {
    zoomStatus = 100;
    document.body.style.zoom = zoomStatus + "%";
};

// More Options/Theme
let themeBtn = document.querySelector(".theme-toggle"),
    themeDarkBtn = document.querySelector(".theme-dark-btn"),
    themeLightBtn = document.querySelector(".theme-light-btn");

// More Options/Theme Dark and Light
themeBtn.onclick = () => {
    themeDarkBtn.classList.toggle("set");
    themeLightBtn.classList.toggle("set");
};

// More Options/Print
let printBtn = document.querySelector(".print-btn");

printBtn.onclick = () => {
    moreOptionsBtn.classList.remove("open");
    window.print();
};

// ////////// ALL TYPES OF COROUSELS

// Function to Get Previous Slide
function prevCorousel(slideToChange, localCounter, adjuster, pagination) {
    localCounter++;
    for (let j = 0; j < slideToChange.length; j++) {
        if (localCounter > 0) {
            localCounter = -slideToChange.length + 1;
        }
        slideToChange[j].style.transform =
            "translateX(" + localCounter * 100 + "%) translateY(" + adjuster + "%)";
    }
    if (pagination != null) {
        pagination.forEach(item => {
            item.style.boxShadow = "none";
        })
        pagination[Math.abs(localCounter)].style.boxShadow = "0 0 0 3px var(--alert)";
    }
    return localCounter;
}

// Function to Get Previous Slide
function nextCorousel(slideToChange, localCounter, adjuster, pagination) {

    localCounter--;
    for (let j = 0; j < slideToChange.length; j++) {
        if (Math.abs(localCounter) == slideToChange.length) {
            localCounter = 0;
        }
        slideToChange[j].style.transform =
            "translateX(" + localCounter * 100 + "%) translateY(" + adjuster + "%)";
    }
    if (pagination != null) {
        pagination.forEach(item => {
            item.style.boxShadow = "none";
        })
        pagination[Math.abs(localCounter)].style.boxShadow = "0 0 0 3px var(--alert)";
    }
    return localCounter;
}

// ///////////// LATEST NEWS CONTROLLER
let prevNewsBtn = document.querySelector(".prev-btn"),
    nextNewsBtn = document.querySelector(".next-btn"),
    news = document.querySelectorAll(".news"),
    newsCounter = 0;

// Latest News Slider
prevNewsBtn.addEventListener("click", function() {
    newsCounter = prevCorousel(news, newsCounter, -50, null);
});

nextNewsBtn.addEventListener("click", function() {
    newsCounter = nextCorousel(news, newsCounter, -50, null);
});

// FIXME:  Uncomment this to make the slider work
// setInterval(() => {
//     newsCounter = nextCorousel(news, newsCounter);
// }, 5000);

// ////////////////// HERO PAGE SLIDER CONTROLLER
let prevHeroSlideBtn = document.querySelector(".slide-prev-btn"),
    nextHeroSlideBtn = document.querySelector(".slide-next-btn"),
    slideHero = document.querySelectorAll(".slide-hero"),
    slideHeroCounter = 0;
let heroPagingItem = document.querySelectorAll(".paging-item");

// Hero Slider
prevHeroSlideBtn.addEventListener("click", function() {
    slideHero.forEach(item => {
        item.style.transition = ".5s";
    });
    slideHeroCounter = prevCorousel(slideHero, slideHeroCounter, 0, heroPagingItem);

});

nextHeroSlideBtn.addEventListener("click", function() {
    slideHero.forEach(item => {
        item.style.transition = ".5s";
    });
    slideHeroCounter = nextCorousel(slideHero, slideHeroCounter, 0, heroPagingItem);
});

// //////////// Hero Page Slider Paging


for (let i = 0; i < heroPagingItem.length; i++) {
    heroPagingItem[i].addEventListener("click", function() {
        slideHeroCounter = -(i - 1);
        slideHero.forEach(item => {
            item.style.transition = "1.5s";
        });
        slideHeroCounter = nextCorousel(slideHero, slideHeroCounter, 0, heroPagingItem);
    });
}

// heroPagingItem.forEach(item => {
//     item.style.boxShadow = "none";
// })
// heroPagingItem[Math.abs(localCounter)].style.boxShadow = "0 0 0 3px var(--alert)";
// return localCounter;