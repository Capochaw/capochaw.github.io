window.addEventListener('load', adjustDivPosition);
window.addEventListener('resize', adjustDivPosition);

function adjustDivPosition() {
    var up = document.querySelector('.homeclass');
    var down = document.querySelector('.bodyclass');

    var h = up.offsetHeight;

	down.style.transform = `translateY(${h}px)`;

	console.log("asdlkajsd");

	var ha = window.innerHeight;

    var adiv = document.querySelector(".bodyclass");
    var abg = document.querySelector(".background");
    var divh = adiv.offsetHeight;

    var logo = new Image();
    logo.src = 'img/logo.png';
	var logoh = 97;

    if(ha > divh){
        abg.style.height = ha + 'px';
    } else {
        var res = divh + logoh;
        abg.style.height = res + 'px';
    }
	console.log("Mierda.");
}

function adjustDCPosition() {
    var down = document.querySelector('.discord');

    var h = (window.innerHeight - up.offsetHeight)/2 + 400;

    down.style.marginTop = h + 'px';
}

function roll() {
}
