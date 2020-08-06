var leftNo= Math.floor((Math.random()*6)) +1;

var rightNo= Math.floor((Math.random()*6)) +1;

if (performance.navigation.type === 1){
    document.querySelector(".img1").src="images/dice"+leftNo+'.png';


    document.querySelector(".img2").src="images/dice"+rightNo+'.png';


if ( leftNo > rightNo) {
    document.querySelector(".container h1").innerHTML="🚩 Player 1 Wins."
}
if ( rightNo > leftNo) {
    document.querySelector(".container h1").innerHTML="🚩 Player <strong>2</strong> Wins."
}
if ( leftNo === rightNo) {
    document.querySelector(".container h1").innerHTML=" 🏳️ DRAW."
}
}