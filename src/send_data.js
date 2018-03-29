
var formData = JSON.stringify($("#postForm"))

$.ajax({
    type: "POST",
    url: "https://7fw1rdpqua.execute-api.eu-west-1.amazonaws.com/api/starcloud",
    data: formData,
    success: function(){},
    dataType: "json",
    contentType: "application/json"
});