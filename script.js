window.addEventListener('load', adjustDivPosition);
window.addEventListener('resize', adjustDivPosition);

function adjustDivPosition() {
    var up = document.querySelector('.homeclass');
    var down = document.querySelector('.bodyclass');
	if(down){
    	var h = up.offsetHeight;
		down.style.transform = `translateY(${h}px)`;
	}


	var ha = window.innerHeight;

    var adiv = document.querySelector(".bodyclass");
    var abg = document.querySelector(".background");

	if(adiv){
    	var divh = adiv.offsetHeight;
		var logoh = 97;

    	if(ha > divh){
    	    abg.style.height = ha + 'px';
    	} else {
    	    var res = divh + 2*logoh;
    	    abg.style.height = res + 'px';
    	}
	} else {
		abg.style.height = ha;
	}
}
