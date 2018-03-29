(function(){
	var getData = function(){
		fetch("https://7fw1rdpqua.execute-api.eu-west-1.amazonaws.com/api/starcloud")
		.then(res => res.json())
		.then(data => displayData(data))
	}

	var displayData = function(data){
		console.log(data);
		var name = document.getElementById("title");
		name.innerHTML = data[0].Title;
	}

	getData();
})();