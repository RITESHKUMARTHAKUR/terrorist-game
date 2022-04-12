const container = document.querySelector(".container");
const bloodspot = document.querySelector(".bloodspot");
const start = document.querySelector(".start");
const end = document.querySelector(".end");


const terrorist = document.createElement("img");
terrorist.setAttribute("class", "terrorist");
terrorist.setAttribute("src" , "https://drive.google.com/uc?export=download&id=1RgRS_3vDIENMBSEQb0oRF2JMwa2du0rX");
terrorist.style.width = "70px" ;

const contenth = container.offsetHeight ;
console.log(contenth - 50);
const contentw  = container.offsetWidth ;

setInterval ( () => {
  const randtop = Math.random() * (contenth - 100 );
  const randleft = Math.random() * (contentw );

  terrorist.style.position = "absolute" ;
  terrorist.style.top = randtop + "px";
  terrorist.style.left = randleft + "px";
}, 1000);


// -- start button --
let score = 0;
start.addEventListener("click", () => {
  container.appendChild(terrorist);
  start.innerText = "SCORE : " + score;

});

// -- end button --
end.addEventListener( "click", (e) => {
    let start = document.querySelector(".start");
    container.removeChild(terrorist);
    start.innerText = "PLAYAGAIN";  
} );

window.addEventListener("click", (e) => {
    bloodspot.style.top = e.pageY + "px" ;
    bloodspot.style.left = e.pageX + "px" ;

    if (e.target === terrorist) score++ ;
    start.innerText = "SCORE : " + score;

  } );

const cursor = document.querySelector(".cursor");

window.addEventListener( "mousemove" , (e) => {
  cursor.style.top = e.pageY + "px";
  console.log(e.pageY);
  cursor.style.left = e.pageX + "px";

});