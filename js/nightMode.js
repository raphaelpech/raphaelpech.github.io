
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + "sameSite=Strict;secure;domain=;path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function clearCookie(cname)
{
	document.cookie = cname+'=; Max-Age=-99999999;';
	console.log("Le cookie Night Mode a été supprimé.")
}

function nightMode()
{
	let nightmode = getCookie("night-mode");
  	if (nightmode == "true") {
   		console.log("Night Mode désactivé.");
   		setCookie("night-mode", "false", 2);

  	}else if(nightmode == "false")
  	{
  		console.log("Night Mode activé!");
  		setCookie("night-mode", "true", 2);
  	}else
  	{
		if (confirm('En cliquant sur OK, vous acceptez qu\'un cookie soit déposé sur votre appareil pour sauvegarder votre préférence pour le mode nuit.')) {
			console.log("Ajout du cookie Night Mode.")
	    	setCookie("night-mode", "true", 2);
		  } else {
			console.log('Refus du cookie Night Mode.');
		  }
  		
  	}
  	checkNightMode();
}

function checkNightMode()
{
	let nightmode = getCookie("night-mode");

	//Page réalisations
	var cards = document.getElementsByClassName('card');
	var footers = document.getElementsByClassName('langage');

	//Page stage/alternance
	var imgs = document.getElementsByClassName('card-img-top');

	//Page veille
	var table = document.getElementsByClassName('table');

	if(nightmode == "true")
	{
		document.body.style.background = "#121212";
		document.getElementById('night-icon').src = "assets/icons/moon-fill.svg";
		document.getElementById('body').style.color = "white";
		for(var counter = 0; counter < cards.length; counter++)
		{
			cards[counter].style.background = "#343a40";
		}

		for(var counter = 0; counter < footers.length; counter++)
		{
			footers[counter].style.color = "white";
		}

		for(var counter = 0; counter < imgs.length; counter++)
		{
			imgs[counter].style.background = "white";
		}

		for(var counter = 0; counter < table.length; counter++)
		{
			table[counter].style.color = "white";
		}
		
	}else
	{
		document.body.style.background = "white";
		document.getElementById('night-icon').src = "assets/icons/moon.svg";
		document.getElementById('body').style.color = "black";
		for(var counter = 0; counter < cards.length; counter++)
		{
			cards[counter].style.background = "white";
		}

		for(var counter = 0; counter < footers.length; counter++)
		{
			footers[counter].style.color = "gray";
		}

		for(var counter = 0; counter < table.length; counter++)
		{
			table[counter].style.color = "black";
		}
	}
}