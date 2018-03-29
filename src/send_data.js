$.fn.serializeObject = function(){
    var object = {}; //object that will have x values
    var array = this.serializeArray(); //creates an array of objects (name & value) by serialzing form values.

    $.each(array, function() {
        //if the object has a name attribute and the attribute is not empty.
        if (object[this.name] !== undefined) {

            if (!object[this.name].push) {
                //add a new property
                object[this.name] = [object[this.name]];
            }
            object[this.name].push(this.value || '');
        } else {
            object[this.name] = this.value || '';
        }
    });
    return object;
};

(function(){
    console.log("inne")
    $("#postButton").click(function(){
        var formData = JSON.stringify($('#postForm').serializeObject());

        alert(formData);
        $.ajax({
            type: "POST",
            url: "https://7fw1rdpqua.execute-api.eu-west-1.amazonaws.com/api/starcloud",
            data: formData,
            contentType: "application/json",
            success: function(){  
                alert()
                //$("form#updatejob").hide(function(){$("div.success").fadeIn();});  
            },
            error: function(xhr, textStatus, errorThrown) { 
                alert(xhr)
                //alert("Status: " + textStatus); alert("Error: " + errorThrown); 
            }    
        });
        return false;
    })
})();