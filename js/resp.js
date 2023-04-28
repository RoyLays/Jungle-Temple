burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.navlist')
navright = document.querySelector('.navright')


burger.addEventListener('click',()=>{
    navright.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue  = Math.round((pos * 100)/calcHeight);
    
    if(pos>100){
        scrollProgress.style.display = "grid";
    }
    else{
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;

    });
    scrollProgress.style.background = 
    `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// let calcScrollValue = () => {
//     let scrollProgress = document.getElementById("progress");
//     let progressValue = document.getElementById("progress-value");
//     let pos = document.documentElement.scrollTop;
//     let calcHeight =
//       document.documentElement.scrollHeight -
//       document.documentElement.clientHeight;
//     let scrollValue = Math.round((pos * 100) / calcHeight);
//     if (pos > 100) {
//       scrollProgress.style.display = "grid";
//     } else {
//       scrollProgress.style.display = "none";
//     }
//     scrollProgress.addEventListener("click", () => {
//       document.documentElement.scrollTop = 0;
//     });
//     scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
//   };
  
//   window.onscroll = calcScrollValue;
//   window.onload = calcScrollValue;