/*Nina Kong*/
$(document).ready(function(){
    var windowHeight = $( window ).height();
    var con = $(".Content");
    con.parentsUntil($("body")).css("height", windowHeight);

    //alert($("#Content").html()); 

    function addParagraph() {
        //$("#Content").html("<p>Hello World</p>");
        var newpara = $("<p>New paragraph</p>");
        $("#add").html(newpara);
    }

    function updateParagraph() {
        $("#update").text("<p>Update paragraph</p>");
    }

    function updateAllParagraph() {
        $(".Practice p").text("Update all paragraph");
    }

    document.getElementById("addButton").addEventListener("click", function(event) {
        addParagraph();
    });

    document.getElementById("updateButton").addEventListener("click", function(event) {
        updateParagraph();
    });

    document.getElementById("updateAllButton").addEventListener("click", function(event) {
        updateAllParagraph();
    });

});
