
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
		document.getElementById('night-icon').d = "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z";
		document.getElementById('body').style.color = "white";
	}else
	{
		document.body.style.background = "white";
		document.getElementById('night-icon').d = "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z";
		document.getElementById('body').style.color = "black";
	}
}