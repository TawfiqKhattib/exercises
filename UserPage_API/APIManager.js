//This is the class that will manage all your APIs
let user = {}
let friends = [];
let quote = {};
let pokemon = {};
let meat = {};
const getUser = function() {
    return user;
}
const getFriends = function() {
    return friends;
}
const quoteUser = function() {
    return quote;
}
const pokemonInfo = function() {
    return pokemon;
}
const meattext = function() {
    return meat;
}


class APIManager {
    constructor() {
        // this.user = new User();
    }
    getData() {
        return this.data;
    }

    userinfo = function() {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/',
            success: function(data) {
                user.userFirstName = data.results[0].name.first;
                user.userLastName = data.results[0].name.last;
                user.userImg = data.results[0].picture.medium;
                user.state = data.results[0].location.state;
                user.city = data.results[0].location.city;
            },
            error: function(xhr, text, error) {
                alert("somthing gone wrong!!");
            }
        });

    }

    friendsinfo = function() {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?results=6',
            success: function(data) {
                let friend = {};
                friends = [];
                for (let index in data.results) {
                    friend.FirstName = data.results[index].name.first
                    friend.LastName = data.results[index].name.last;
                    friends.push(friend);
                    friend = {}
                }
            },
            error: function(xhr, text, error) {
                alert("somthing gone wrong!!");
            }
        });

    }

    quoteinfo = function() {
        $.ajax({
            method: "GET",
            url: 'https://goquotes-api.herokuapp.com/api/v1/random?count=1',
            success: function(data) {
                quote.tag = data.quotes[0].tag;
                quote.text = data.quotes[0].text;
                quote.author = data.quotes[0].author;
            },
            error: function(xhr, text, error) {
                alert("somthing gone wrong!!");
            }
        });
    }

    pokemon = function() {
        $.ajax({
            method: "GET",
            url: 'https://pokeapi.co/api/v2/pokemon/' + (Math.floor(Math.random() * 898 + 1)),
            success: function(data) {
                pokemon.img = data.sprites.front_default;
                pokemon.name = data.name;
            },
            error: function(xhr, text, error) {
                alert("somthing gone wrong!!");
            }
        });
    }

    meat = function() {
        $.ajax({
            method: "GET",
            url: 'https://baconipsum.com/api/?callback=?',
            success: function(data) {
                meat.meattext = data[Math.floor(Math.random() * data.length + 1)];
            },
            error: function(xhr, text, error) {
                alert("somthing gone wrong!!");
            }
        });
    }
}