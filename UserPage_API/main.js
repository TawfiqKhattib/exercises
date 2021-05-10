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
    render.renderUser();
    render.renderQuote();
    render.renderPokemon();
    render.renderMeat();
})