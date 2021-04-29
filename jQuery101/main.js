$("h1").css("color", "blue");
$(".red-div").css("color", "red");
$("li").eq(0).css("color", "green");
$("li").eq(1).css("color", "pink");
$("#brown-div").css("color", "brown");
$("#b1").addClass("box");
$("#b2").addClass("box");
$('#ninput').val("Terabyte");
const data = $("#data").data();
const barcd = data.barcode;
const expdt = data.expirationdate
console.log("Item with barcode " + barcd + " will expire on " + expdt);

$("#hovecolr").hover(function() {
    $(this).css("background-color", "yellow");
});

$("button").on("click", function() {
    alert($("#my-input").val());
});

$(".box").hover(function() {
    $(this).css("background-color", "blue");
});

$(".feedme").on("click", function() {
    let divCopy = `<div class=feedme> ${$(this).text()} </div>`;
    $("body").append(divCopy);
})

const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
]

for (let name of names) {
    $("body").append(`<div class=human>${name.first} - ${name.last}</div>`);
}

$("#removOnHover").hover(function() {
    $(this).remove()
})