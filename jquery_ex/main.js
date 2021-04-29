// ex1
$("#addHuman").on("click", function() {
    if ($("#inputs").val() != "") {
        let val = $("#inputs").val();
        let mydiv = `<li class=nameitem>${val}</li>`;
        $("#names").append(mydiv);
        $("#inputs").val("")
    }
});

// ex2
$("#names").on("click", ".nameitem", function() {
    $(this).remove();
})

// ex3
$("body").append(`<div id=box1 class=box></div>`);
$("body").append(`<div id=box2 class=box></div>`);
$("#box1").hover(function() {
    $("#box1").css("background-color", "#8e44ad");
    $("#box2").css("background-color", "red");
})
$("#box2").hover(function() {
    $("#box2").css("background-color", "#8e44ad");
    $("#box1").css("background-color", "red");
})

// ex4
let num = 1;
$(".item").on("click", function() {

    if ($(this).data().instock) {
        $("#cart").append(`<div class=cart-item>${$(this).text()+num}</div>`);
        num += 1;
    }
});

$("#cart").on("click", ".cart-item", function() {
    $(this).remove();
});
// ex5
const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
]

for (item of fruits) {
    $("#basket").append(`<div class=${item.color}>${item.name}</div>`)
}

// extension

$("span").each(function() {
    $(this).css("margin", "15px");
    $(this).css("border", "1px solid black");
    $(this).css("background-color", $(this).data().color);
});

$("#colors").on("click", "span", function() {
    $(".boxex").css("background-color", $(this).data().color);
})