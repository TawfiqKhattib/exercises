class Renderer {
    constructor() {

    }

    renderUser() {
        $(".user-container").empty()
        const source = $('#user-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(getUser());
        $(".user-container").append(newHTML)

        $(".friends-container").empty()
        const friendstemp = $('#friends-template').html();
        const templateFriend = Handlebars.compile(friendstemp);
        const newHTMLFriend = templateFriend({ friend: getFriends() });
        $(".friends-container").append(newHTMLFriend)
    }


    renderQuote() {
        $(".quote-container").empty()
        const sourcequote = $('#quote-template').html();
        const templateqoute = Handlebars.compile(sourcequote);
        const newHTMLqoute = templateqoute(quoteUser());
        $(".quote-container").append(newHTMLqoute)
    }
    renderPokemon() {
        $(".pokemon-container").empty()
        const sourcePokemeon = $('#pokemon-template').html();
        const templatePokemon = Handlebars.compile(sourcePokemeon);
        const newHTMLPokemon = templatePokemon(pokemonInfo());
        $(".pokemon-container").append(newHTMLPokemon)
    }
    renderMeat() {
        $(".meat-container").empty()
        const sourceMeat = $('#meat-template').html();
        const templatemeat = Handlebars.compile(sourceMeat);
        const newHTMLmeat = templatemeat(meattext());
        $(".meat-container").append(newHTMLmeat)
    }


}