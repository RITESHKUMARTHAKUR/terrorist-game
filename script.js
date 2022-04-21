const container = document.querySelector(".container");
const bloodspot = document.querySelector(".bloodspot");
const start = document.querySelector(".start");
const missBtn = document.querySelector(".miss");
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
}, 1500);


// -- start button --
let score = 0;
let miss = 0;
start.addEventListener("click", () => {
  container.appendChild(terrorist);
  start.innerText = "SCORE : " + score;

});

// -- end button --
end.addEventListener( "click", (e)=> {
    e.preventDefault();
    start.innerText = "PLAY AGAIN" ;
    container.removeChild(terrorist);
    alert("\nCongratulations ✨✨ \n Your score is : " + score );
    window.setTimeout(reload, 500);
} );


function reload() {
  javascript:location.reload(true) ;
};

window.addEventListener("click", (e) => {
    bloodspot.style.top = e.pageY + "px" ;
    bloodspot.style.left = e.pageX + "px" ;

    if (miss< 5){
      if (e.target === terrorist) 
      {
          score++ ;
      }
      else {
          if (e.target === start ) ;
          else if (e.target === end ) ;
          else miss++;
      }
    }
    else 
    {
      alert("\nGame Over ☠ you Failed more than 5 times !! \nYour score is : " + score);
      window.setTimeout(reload, 1000);
    }



    start.innerText = "SCORE : " + score;
    missBtn.innerText = "Miss : " + miss;
  } );

const cursor = document.querySelector(".cursor");

window.addEventListener( "mousemove" , (e) => {
  cursor.style.top = e.pageY + "px";
  console.log(e.pageY);
  cursor.style.left = e.pageX + "px";

});
