$(document).on("click", "#dropdown-icon", function(){
    if ($(this).attr("data-caret-drop") === "false"){
        console.log("clicked again.")
        $("#dropdown-div").empty();
        $("#dropdown-content").attr("class", "invisible");
        var downIcon = $("<i class='fas fa-arrow-down dropbutton'>");
        downIcon.attr("id", "dropdown-icon");
        downIcon.attr("data-caret-drop", "true");
        $("#dropdown-div").html(downIcon);
    } else if ($(this).attr("data-caret-drop") === "true"){
        console.log("clicked");
        $("#dropdown-div").empty();
        $("#dropdown-content").attr("class", "visible");
        var upIcon = $("<i>")
        upIcon.attr("class", 'fas fa-arrow-up dropbutton');
        upIcon.attr("id", "dropdown-icon");
        upIcon.attr("data-caret-drop", "false");
        $("#dropdown-div").html(upIcon);
    }
});

$("#about-btn").on("click", function(){
    $("#dropdown-content").attr("class", "visible");
    $("#dropdown-icon").attr("data-caret-drop", "true");
    $("#dropdown-div").empty();
    var upIcon = $("<i class='fas fa-arrow-up dropbutton'>")
    $(upIcon).attr("id", "dropdown-icon");
    $(upIcon).attr("data-caret-drop", "false");
    $("#dropdown-div").html(upIcon);
});