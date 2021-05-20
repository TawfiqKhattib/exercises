money = 380
const sourcequote = $('#money-template').html();
const templateqoute = Handlebars.compile(sourcequote);
let newHTMLqoute = templateqoute({ money: money });
$("#mony").append(newHTMLqoute)


$("#search").on("click", function() {
    $("#product").empty()
    let input = $("#prod-input").val()

    $.get(`/priceCheck/${input}`, function(productData) {
        $("#product").append(`<div>${productData.name} - ${productData.price}`)
    })

    $("#prod-input").val("")
});

$("#buy").on("click", function() {
    $("#product").empty()
    let input = $("#buy-input").val()

    $.get(`/priceCheck1/${input}/${money}`, function(productData) {
        console.log(productData, "  , ", typeof(productData));
        if (productData === true) {
            $("#mony").empty();

            $.get(`/buy/${input}`, function(productData) {
                money -= productData.price;
                newHTMLqoute = templateqoute({ money: money });
                $("#mony").append(newHTMLqoute);
                $("#product").append(`<div>Congratulations, you’ve just bought ${productData.name} for ${productData.price} there are ${productData.inventory} left now`)

            })
        } else {
            $("#product").append('<div> sorry there is not enough money to buy the product</div>')
        }
    })

    $("#buy-input").val("")
})