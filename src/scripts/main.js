(function(){
	var getData = function(){
		fetch("https://7fw1rdpqua.execute-api.eu-west-1.amazonaws.com/api/starcloud")
		.then(res => res.json())
		.then(data => displayData(data))
	}

	var displayData = function(data){
		var title = document.getElementById("title");
		var stars = document.getElementById("stars");
		title.innerHTML = data[0].Title;

		stars.innerHTML = getStars(data[0].Rating);
	}

	var getStars = function(rating){
		var stars = "<i class='star fa fa-star' aria-hidden='true'></i>";

		stars = stars.repeat(rating);

		var emptystar = "<i class='star fa fa-star-o' aria-hidden='true'></i>";

		var emptystars = emptystar.repeat(5 - rating);

		stars = stars.concat(emptystars);

		return stars;
	}

	//getData();
	var data = [{Rating:3, Title: "Donald Trump"}];
	displayData(data);
})();