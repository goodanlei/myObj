function resetPage() {
	var deviceWidth = document.documentElement.clientWidth,
	scale = deviceWidth/1920; /*1920--设计图纸的分比率尺寸*/
	document.body.style.zoom = scale;
}

window.onresize = function(){
	resetPage();
}

window.onload = function(){
	resetPage();
}
