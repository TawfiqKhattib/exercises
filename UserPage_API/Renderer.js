class Renderer {
    constructor() {

    }

    renderUser(user) {
        $(".user-container").empty()
        const source = $('#user-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(user);
        $(".user-container").append(newHTML)

    }

    renderFriends(friends) {
        $(".friends-container").empty()
        const friendstemp = $('#friends-template').html();
        const templateFriend = Handlebars.compile(friendstemp);
        const newHTMLFriend = templateFriend({ friend: friends });
        $(".friends-container").append(newHTMLFriend)
    }

    renderQuote(quote) {
        $(".quote-container").empty()
        const sourcequote = $('#quote-template').html();
        const templateqoute = Handlebars.compile(sourcequote);
        const newHTMLqoute = templateqoute(quote);
        $(".quote-container").append(newHTMLqoute)
    }
    renderPokemon(pokemon) {
        $(".pokemon-container").empty()
        const sourcePokemeon = $('#pokemon-template').html();
        const templatePokemon = Handlebars.compile(sourcePokemeon);
        const newHTMLPokemon = templatePokemon(pokemon);
        $(".pokemon-container").append(newHTMLPokemon)
    }
    renderMeat(meat) {
        $(".meat-container").empty()
        const sourceMeat = $('#meat-template').html();
        const templatemeat = Handlebars.compile(sourceMeat);
        const newHTMLmeat = templatemeat(meat);
        $(".meat-container").append(newHTMLmeat)
    }


}