import data from '/data.js';
function animation(){
    let happy = document.getElementById('happy');
    let birthday = document.getElementById('birthday');
    setInterval(function(){
        happy.innerHTML = `
        <img src="/img/font/happy/${data.H[Math.floor(Math.random()*3)]}">
        <img src="img/font/happy/${data.A[Math.floor(Math.random()*3)]}">
        <img src="img/font/happy/${data.P[Math.floor(Math.random()*3)]}">
        <img src="img/font/happy/${data.P[Math.floor(Math.random()*3)]}">
        <img src="img/font/happy/${data.Y[Math.floor(Math.random()*4)]}">
        `;
        birthday.innerHTML = `
        <img src="img/font/birthday/${data.B[Math.floor(Math.random()*3)]}">
        <img src="img/font/birthday/${data.I[Math.floor(Math.random()*4)]}">
        <img src="img/font/birthday/${data.R[Math.floor(Math.random()*4)]}">
        <img src="img/font/birthday/${data.T[Math.floor(Math.random()*4)]}">
        <img src="img/font/birthday/${data.H[Math.floor(Math.random()*3)]}">
        <img src="img/font/birthday/${data.D[Math.floor(Math.random()*4)]}">
        <img src="img/font/birthday/${data.A[Math.floor(Math.random()*3)]}">
        <img src="img/font/birthday/${data.Y[Math.floor(Math.random()*4)]}">
        `;
    },1000);
}
window.addEventListener("click",() => {
    function playAudio() {
        let audio = document.getElementById("myAudio").play();
    }
    playAudio();
});
animation();
function takeout(){
    let sign = document.getElementById("sign");
    let triangle = document.querySelector(".triangle");
    let tangel = document.querySelector(".tangle");
    let content = document.querySelector(".content");
    sign.addEventListener("click",() =>{
        triangle.style = "transform: translate(-50%,-100%) !important;";
        sign.style = "opacity: 0 !important";
        tangel.style = "opacity: 0 !important; transform: translate(-50%,100%) !important;";
        setTimeout(()=>{
            content.style.display = "block";
        },1000)
    });
};
takeout();