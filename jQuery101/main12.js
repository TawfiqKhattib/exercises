/**
 * spot 12
 */

// const divText = '<div class=blog>blog div</div>'
// $("button").on("click", function() {
//     $("#blogs").append(divText);
// })

// $(".blog").on("click", function() {
//     $(this).text("blargh");
// })
$("button").on("click", function() {
    $("#blogs").append("<div class='blog'>Cool blog</div>")
})

$("#blogs").on("click", ".blog", function() {
    $(this).text("uncool blog")
})