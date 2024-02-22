

function init(){
    document.getElementById('calcform').oninput = calc;
}

function calc(){
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;

    let sum = x/1 + y/1;

    document.getElementById('sum').value = sum;
}


function red() {
    let pElement = document.getElementById('p1');
    pElement.onclick = p1Click;

    function p1Click() {
        let pElement = document.getElementById('p1');
        pElement.style.color = "red";
    }
}


function stark() {
    let pStrong = document.getElementById('p2');
    pStrong.onclick = makeStrong;
}

function makeStrong() {
    let pStrong = document.getElementById('p2');
    pStrong.style.fontWeight = "bold";
}

let showMenu = true

function menu() {
    document.getElementById('topMenuButton').onclick = showHideMenu

}

function showHideMenu() {
    let element = document.getElementById('topMenu');
    if (showMenu) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
    showMenu = !showMenu;
}

function initPage() {
    init();
    red();
    menu();
    stark();
}

window.addEventListener('load', init);
window.addEventListener('load', red);
window.addEventListener('load', menu);
window.addEventListener('load', stark);



