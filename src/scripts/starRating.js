(function(){
	var rating = 0;

	$(".star-input").children("i").click(function(){
		if (rating == $(this).attr("data-value") && $(this).hasClass("star"))
		{
			rating = 0;
			emptyStars();
		} 
		else 
		{
			rating = $(this).attr("data-value");
			renderStars(rating);
		}

		$("#rating").val(rating);
	})

	var renderStars = function(rating) {

		var stars = $(".star-input").children("i").filter(function() {
		    return  $(this).attr("data-value") <= rating;
		});

		var emptystars = $(".star-input").children("i").filter(function() {
		    return  $(this).attr("data-value") > rating;
		});

		stars.addClass("star");
		stars.removeClass("star-empty");

		emptystars.removeClass("star");
		emptystars.addClass("star-empty");
	}

	var emptyStars = function(){
		var stars = $(".star-input").children("i");
		stars.removeClass("star");
		stars.addClass("star-empty");
	}

})();