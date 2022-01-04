let submenuBtn = document.querySelectorAll(".submenu-btn");
let submenu = document.querySelectorAll(".submenu");

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