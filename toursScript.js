
var slike = ["slike/8254724091_22c3992c11.jpg", "slike/gracanica1.jpg", "slike/featured-Hoca_12-10-2007_1361.jpg", "slike/kosovoPolje.jpg", "slike/velikahoca-dozet-38.jpg", "slike/decani2.jpg", "slike/draganac-drustvo.jpg", "slike/DTrFtoYW0AAxas7.jpg", "slike/gracanica10.jpg", "slike/strpcelunch2.jpg", "slike/arhangeli4.jpg"];
var img1 = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();
var img5 = new Image();
var img6 = new Image();
var div1 = document.getElementsByClassName("zaglavlje1");
var div2 = document.getElementsByClassName("zaglavlje2");
var div3 = document.getElementsByClassName("zaglavlje3");
var div4 = document.getElementsByClassName("zaglavlje4");
var div5 = document.getElementsByClassName("zaglavlje5");
var div6 = document.getElementsByClassName("zaglavlje6");
var x = 1;
var y = 2;
var z = 3;
var j = 4;
var q = 5;
var w = 6;
for (var i = 0; i < div1.length; i++) {
	div1[i].innerHTML = '<img src="' + slike[0] + '" />';
}
for (var i = 0; i < div1.length; i++) {
	div2[i].innerHTML = '<img src="' + slike[1] + '" />';
}
for (var i = 0; i < div1.length; i++) {
	div3[i].innerHTML = '<img src="' + slike[2] + '" />';
}
for (var i = 0; i < div1.length; i++) {
	div4[i].innerHTML = '<img src="' + slike[3] + '" />';
}
for (var i = 0; i < div1.length; i++) {
	div5[i].innerHTML = '<img src="' + slike[4] + '" />';
}
for (var i = 0; i < div1.length; i++) {
	div6[i].innerHTML = '<img src="' + slike[5] + '" />';
}
setInterval(slider, 3000);

function slider() {
	x++;
	y++;
	z++;
	j++;
	q++;
	w++;
	if (x > slike.length) {
		x = 1;
	}
	if (y > slike.length) {
		y = 1;
	}
	if (z > slike.length) {
		z = 1;
	}
	if (j > slike.length) {
		j = 1;
	}
	if (q > slike.length) {
		q = 1;
	}
	if (w > slike.length) {
		w = 1;
	}
	img1.src = slike[x - 1];
	img2.src = slike[y - 1];
	img3.src = slike[z - 1];
	img4.src = slike[j - 1];
	img5.src = slike[q - 1];
	img6.src = slike[w - 1];
	for (var i = 0; i < div1.length; i++) {
		div1[i].innerHTML = '<img src="' + img1.src + '" />';
	}
	for (var i = 0; i < div1.length; i++) {
		div2[i].innerHTML = '<img src="' + img2.src + '" />';
	}
	for (var i = 0; i < div1.length; i++) {
		div3[i].innerHTML = '<img src="' + img3.src + '" />';
	}
	for (var i = 0; i < div1.length; i++) {
		div4[i].innerHTML = '<img src="' + img4.src + '" />';
	}
	for (var i = 0; i < div1.length; i++) {
		div5[i].innerHTML = '<img src="' + img5.src + '" />';
	}
	for (var i = 0; i < div1.length; i++) {
		div6[i].innerHTML = '<img src="' + img6.src + '" />';
	}
}
