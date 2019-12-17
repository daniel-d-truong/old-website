let sidebarElement = document.getElementById("aboutMeLink");
let whoAmIArrow = document.getElementById("arrowSelect");

function clickSidebar() {
    sidebarElement.click();
}

whoAmIArrow.addEventListener("click", clickSidebar);
