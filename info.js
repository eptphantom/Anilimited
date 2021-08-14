const params = new URLSearchParams(window.location.search);
document.getElementById("title").innerHTML = params.get("title");
document.getElementById("epn").innerHTML = params.get("ep");