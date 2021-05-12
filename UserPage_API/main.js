let apimanag = new APIManager();
let render = new Renderer();
let users = [];

$("#load").on("click", function() {
    apimanag.userinfo();
    apimanag.friendsinfo();
    apimanag.quoteinfo();
    apimanag.pokemon();
    apimanag.meat();
});

$("#display").on("click", function() {
    render.renderUser(apimanag.data.user);
    render.renderFriends(apimanag.data.friends);
    render.renderQuote(apimanag.data.quote);
    render.renderPokemon(apimanag.data.pokemon);
    render.renderMeat(apimanag.data.meat);
})

$("#save").on("click", function() {
    if (apimanag.data !== undefined) {
        users = [];
        users = JSON.parse(localStorage.users || "[]");
        users.push(apimanag.data);
    }
    localStorage.users = JSON.stringify(users);
    const data = JSON.parse(localStorage.users || "[]");
})

$("#loadPage").on("click", function() {

    $(".user-container").empty();
    $(".quote-container").empty();
    $(".pokemon-container").empty();
    $(".meat-container").empty();
    $(".friends-container").empty();

    userData = JSON.parse(localStorage.users || '[]');

    let userIndex = 1;
    $(".quote-container").append("<select id=userList onchange=UserSelector()></select>")
    render.renderDropDownusers({ index: 0, userFirstName: "choose", userLastName: "here" });
    for (let user of userData) {
        render.renderDropDownusers({ index: userIndex, userFirstName: user.user.userFirstName, userLastName: user.user.userLastName });
        userIndex += 1;
    }

})

const UserSelector = function() {
    let choosingUser = parseInt(document.getElementById("userList").value) - 1;
    $(".quote-container").empty();
    userData = JSON.parse(localStorage.users || '[]');
    render.renderUser(userData[choosingUser].user);
    render.renderFriends(userData[choosingUser].friends);
    render.renderQuote(userData[choosingUser].quote);
    render.renderPokemon(userData[choosingUser].pokemon);
    render.renderMeat(userData[choosingUser].meat);
}