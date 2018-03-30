(function(){
	var getData = function(){
		fetch("https://7fw1rdpqua.execute-api.eu-west-1.amazonaws.com/api/starcloud")
		.then(res => res.json())
		.then(data => displayData(data))
	}

	var displayData = function(data){
		data = data.sort(sortByDate);
		var all_stars = document.getElementById("all-stars");

		var html = ""
		for (var i in data) {
			html = html.concat("<div class='rating'><h2>" +  data[i].title + "</h2>");
			html = html.concat(getStars(data[i].rating));
			html = html.concat("</div>");
		}

		all_stars.innerHTML = html;
	}

	var getStars = function(rating){
		var stars = "<i class='star fa fa-star' aria-hidden='true'></i>";

		stars = stars.repeat(rating);

		var emptystar = "<i class='star-empty fa fa-star' aria-hidden='true'></i>";

		var emptystars = emptystar.repeat(5 - rating);

		stars = stars.concat(emptystars);

		return stars;
	}

	function sortByDate(a, b) {
    	return new Date(b.date).getTime() - new Date(a.date).getTime();
	}

	getData();
})();