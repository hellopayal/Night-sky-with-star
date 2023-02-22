var screen = document.getElementsByClassName('.container');

function draw(){
    setInterval(createStars, 30); 
    setInterval(FallingStar, 2000); 
    var canvas = document.getElementById("sky");
    var ctx= canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(240, 60, 60, 0, Math.PI*2, true);
    var color = ctx.createRadialGradient(100, 100, 150, 100,20,30)
    color.addColorStop(0,'white');
    ctx.fillStyle = color;
    ctx.fill();
    canvas.style.setProperty("-web-kit filter","drop-shadow(5px 5px 5px white)");
    star.style.animation =
    "twinkle " + "1s linear infinite alternate";

}
 function createStars(){
    const createStar= document.getElementById("star");
    const stars= document.createElement('div');
    createStar.innerHTML =stars.outerHTML;
    stars.style.backgroundColor ="white";
    stars.style.left =Math.random()*window.innerWidth +'px';
    stars.style.top =Math.random()*window.innerHeight +'px';
    stars.style.width = Math.floor(Math.random()*3) +'px';
    stars.style.height =Math.floor(Math.random()*3) +'px';
    stars.style.position="absolute";
    stars.style.zindex="-1";
    document.body.appendChild(stars);
    setTimeout  (()=>{
        stars.remove();
    },70000)
}
function FallingStar() {
    const fall = document.getElementById("fallingstar");
    const createFall = document.createElement('div');
    fall.innerHTML = createFall.outerHTML;
    createFall.style.position = "absolute";
    function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
    }
    var lengthStar = randomNumber(100, 150);
    createFall.style.width = lengthStar + "px";
    createFall.style.height = "2px";
    createFall.style.backgroundImage =
    "linear-gradient(to right, white 40%, transparent)";
    document.body.appendChild(createFall);
    createFall.style.left = Math.random() * window.innerWidth + 'px';
    createFall.style.top = Math.random() * window.innerHeight + 'px';
    createFall.style.zIndex = "-1";
    createFall.style.transform = "rotate(7deg)";
    setTimeout (() => {
            createFall.remove();
        }, 900)
    createFall.style.animation =
      "hide 1s linear infinite alternate";
}
