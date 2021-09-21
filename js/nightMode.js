
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
  		console.log("Ajout du cookie Night Mode.")
	    setCookie("night-mode", "true", 2);
  	}
  	checkNightMode();
}

function checkNightMode()
{
	let nightmode = getCookie("night-mode");
	if(nightmode == "true")
	{
		document.body.style.background = "#121212";
		document.getElementById('night-icon').src = "assets/icons/moon-fill.svg";
		document.getElementById('body').style.color = "white";
	}else
	{
		document.body.style.background = "white";
		document.getElementById('night-icon').src = "assets/icons/moon.svg";
		document.getElementById('body').style.color = "black";
	}
}