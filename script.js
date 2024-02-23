

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
    let pRed = document.getElementById("p1");
    pRed.onclick = toggleRed;

}

function toggleRed() {
    let pRed = document.getElementById("p1");
    if (pRed.style.color == "red") {
        pRed.style.color = "black";
    }
    else {
        pRed.style.color = "red";
    }
  
    }   




function stark() {
    let pStrong = document.getElementById('p2');
    pStrong.onclick = toggleBold;
}

function toggleBold() {
    let pStrong  = document.getElementById('p2');
    if (pStrong.style.fontWeight == "bold") {
        pStrong.style.fontWeight = "normal";
    } else {
        pStrong.style.fontWeight = "bold";
    }
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

function imgViewer(){
    let element = document.getElementById('thumbs'); 
    let imgList = element.getElementsByTagName('img')
        for(let i = 0; i < imgList.length; i++){
            imgList[i].onmouseover = overImg;
            }
        }

function overImg(e){
    let element = document.getElementById('largeImg');
    let imgPath = e.target.src.split("_")[0] + ".png";

    element.src = imgPath;
}
    




window.addEventListener('load', init);
window.addEventListener('load', red);
window.addEventListener('load', menu);
window.addEventListener('load', stark);
window.addEventListener('load', imgViewer);



