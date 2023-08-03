const data = {
    A: ["A1.png","A2.png","A3.png"],
    B: ["B1.png","B2.png","B3.png"],
    I: ["I1.png","I2.png","I3.png","I4.png"],
    R: ["R1.png","R2.png","R3.png","R4.png"],
    T: ["T1.png","T2.png","T3.png","T4.png"],
    H: ["H1.png","H2.png","H3.png"],
    D: ["D1.png","D2.png","D3.png","D4.png"],
    Y: ["Y1.png","Y2.png","Y3.png","Y4.png"],
    P: ["P1.png","P2.png","P3.png"]
};
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