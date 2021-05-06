let wisdom = [];

const retrive = function() {
    $(".input").empty();
    wisdom = JSON.parse(localStorage.wisdom || '[]');
    for (let item of wisdom) {
        $(".input").append(`<div class=cart-item>${item.text}<button class=removeText style=margin:7px>X</button></div>`);
    }
}

$("div").on("click", ".removeText", function() {
    // console.log("found")
    // for (let item of wisdom) {
    //     if (item.text === $(this).closest(".cart-item").text()) {

    //     }
    // }
    const text = $(this).closest(".cart-item").text().slice(0, -1);
    const index = wisdom.findIndex(t => t.text == text)
    console.log(index);
    wisdom.splice(index, 1);
    localStorage.clear();
    localStorage.wisdom = JSON.stringify(wisdom);
    retrive();
})

$("#clearwisdom").on("click", function() {
    localStorage.removeItem("wisdom");
});

$("#addToDo").on("click", function() {
    let obj = {}
    let text = $("#input").val();
    $("#input").val("");
    $(".input").append(`<div class=cart-item>${text}</div>`);
    obj.text = text;
    wisdom.push(obj);

    localStorage.wisdom = JSON.stringify(wisdom);
    const data = JSON.parse(localStorage.wisdom || "[]");
    retrive();
});
retrive();