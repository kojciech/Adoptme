const userIcon = document.querySelector(".fa-user");
const userMenu = document.querySelector("div.userMenu")

userIcon.addEventListener("click", function () {
    userMenu.classList.toggle("on");
})