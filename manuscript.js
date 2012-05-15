(function(){
	var site;

	for (site in manifest)
	{
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = manifest[site];
		document.body.appendChild(script);
	}
}());

