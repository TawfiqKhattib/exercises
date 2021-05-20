url = 'https://nba-players.herokuapp.com/players/';


$("#search").on("click", function() {
    $("#players").empty();
    let input = $("#prod-input").val();

    $.get(`/teams/${input}`, function(playersData) {
        for (let player of playersData) {
            let name = player.name.split(",");
            name[1] = name[1].replace(/\s/g, '');
            player.url = url + name[0] + '/' + name[1];
        }
        const source = $('#player-template').html();
        const template = Handlebars.compile(source);
        const newHTMLqoute = template({ player: playersData });
        $("#players").append(newHTMLqoute);
    })

    $("#prod-input").val("");
});

$("div").on("click", ".mimg", function() {

    let name = $(this).closest("div");
    namePlayer = name.find("#name").text().split(",");
    img = name.find(".mimg");
    namePlayer[1] = namePlayer[1].replace(/\s/g, '');
    //let stats = playerDataUrl + namePlayer[0] + '/' + namePlayer[1];


    // if (window.getComputedStyle(img).display === 'none"') {
    // const type = img.css("display", "inline-block");
    // } else {

    $.get(`/playerStats/${namePlayer}`, function(playersData) {
            name.find("#spanImg").append(`<div> ${playersData.name} played ${playersData.number} with team ${playersData.val}</div>`);
        })
        // }



})


// $("#buy").on("click", function() {
//     $("#product").empty()
//     let input = $("#buy-input").val()
//     $.get(`/buy/${input}`, function(productData) {
//         $("#product").append(`<div>Congratulations, you’ve just bought ${productData.name} for ${productData.price} there are ${productData.inventory} left now`)
//     })

//     $("#buy-input").val("")
// })

// money = 380
// const sourcequote = $('#money-template').html();
// const templateqoute = Handlebars.compile(sourcequote);
// const newHTMLqoute = templateqoute({ money: money });
// $("#mony").append(newHTMLqoute)