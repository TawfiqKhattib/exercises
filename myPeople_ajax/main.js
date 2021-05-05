const relevantData = function(data) {
    let users = {};
    users.name = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last;
    users.email = data.results[0].email;
    setHtml(users);
}
const user = function() {
    $.ajax({
        method: "GET",
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: relevantData,
        error: function(xhr, text, error) {
            alert("somthing gone wrong!!");
        }
    });
}

const setHtml = function(person) {
    const source = $('#menu-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(person);
    $('#container').append(newHTML);
}

const addUser = function() {
    for (let i = 0; i < 10; i++) {
        user()
    }
}

$("#container").on("mouseover", ".person", function() {
    $(this).css("background-color", "rgb(150, 150, 192)");

});
$("#container").on("mouseout", ".person", function() {
    $(this).css("background-color", "#d2dadf");
});

addUser();