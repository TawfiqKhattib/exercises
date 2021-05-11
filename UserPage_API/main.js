// let apimanag = new APIManager();
// apimanag.user();
// apimanag.quote();

// console.log(apimanag);
// let render = new Renderer(apimanag.getData());
// render.renderUser()
let apimanag = new APIManager();

$("#load").on("click", function() {
    apimanag.userinfo();
    apimanag.friendsinfo();
    apimanag.quoteinfo();
    apimanag.pokemon();
    apimanag.meat();
});

$("#display").on("click", function() {
    let render = new Renderer();
    render.renderUser(apimanag.data.user);
    render.renderFriends(apimanag.data.friends);
    render.renderQuote(apimanag.data.quote);
    render.renderPokemon(apimanag.data.pokemon);
    render.renderMeat(apimanag.data.meat);
})