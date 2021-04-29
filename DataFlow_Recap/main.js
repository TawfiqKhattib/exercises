const render = function() {
    $("#msgs").empty();
    for (obj of posts) {
        $("#msgs").append(`<div class=item>${obj.name}:  ${obj.text}</div>`);
    }
}

$("#btn").on("click", function() {
    const newObj = {};
    if ($("#name").val() != "" && $("#text").val()) {
        newObj.name = $("#name").val();
        newObj.text = $("#text").val();
        posts.push(newObj);
        render();
        $("#name").val("");
        $("#text").val("");

    }
});


render();