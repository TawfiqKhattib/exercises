$(".generator").on("click", function() {
    console.log($(this).closest(".computer").data().id);
    console.log($(this).closest(".computer").find(".processor").attr('id'));
    console.log($(this).closest(".computer").find(".BUS").text());

});

$(".validator").on("click", function() {
    console.log($(this).text());
    console.log($(this).closest(".computer").find(".MB").text());
    console.log($(this).closest(".computer").find(".QR").text());

});