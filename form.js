var tabblad = 0;
openTabblad(tabblad);

function openTabblad(n) {

	var x = document.getElementsByClassName("tab");
	x[n].style.display = "block";

}