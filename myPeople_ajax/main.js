const arrUsers = [];
const relevantData = function(data) {
    let users = {};
    for (let index in data.results) {
        users.name = data.results[index].name.title + " " + data.results[index].name.first + " " + data.results[index].name.last;
        users.email = data.results[index].email;
        arrUsers.push(users);
        users = {};
    }
    setHtml(arrUsers);
}
const user = function() {
    $.ajax({
        method: "GET",
        url: 'https://randomuser.me/api/?results=10',
        dataType: 'json',
        success: relevantData,
        error: function(xhr, text, error) {
            alert("somthing gone wrong!!");
        }
    });
}

const setHtml = function(persons) {
    const source = $('#menu-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template({ person: persons });
    $('#container').append(newHTML);
}

// const addUser = function() {
//     for (let i = 0; i < 10; i++) {
//         user()
//     }
// }

$("#container").on("mouseover", ".person", function() {
    $(this).css("background-color", "rgb(150, 150, 192)");

});
$("#container").on("mouseout", ".person", function() {
    $(this).css("background-color", "#d2dadf");
});

// addUser();
user();