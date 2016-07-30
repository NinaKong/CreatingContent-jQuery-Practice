# CreatingContent-jQuery-Practice
Practice jQuery creating content

# Creating Content jQuery Including

- Use html function
- Use text function
- Function is called for adding, updating, or updating all paragraph when the buttons is clicked


#Examples
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
