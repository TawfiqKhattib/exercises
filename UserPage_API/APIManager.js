//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {};
    }

    userinfo = function() {
        let self = this;
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/',
            success: function(data) {
                self.data.user = {
                    userFirstName: data.results[0].name.first,
                    userLastName: data.results[0].name.last,
                    userImg: data.results[0].picture.medium,
                    state: data.results[0].location.state,
                    city: data.results[0].location.city
                }
            },
            error: function(xhr, text, error) {
                alert("somthing gone wrong!!");
            }
        });

    }

    friendsinfo = function() {
        let self = this;
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?results=6',
            success: function(data) {
                let friend = {};
                self.data.friends = [];
                for (let index in data.results) {
                    friend.FirstName = data.results[index].name.first
                    friend.LastName = data.results[index].name.last;
                    self.data.friends.push(friend);
                    friend = {}
                }
            },
            error: function(xhr, text, error) {
                alert("somthing gone wrong!!");
            }
        });

    }

    quoteinfo = function() {
        let self = this;
        $.ajax({
            method: "GET",
            url: 'https://goquotes-api.herokuapp.com/api/v1/random?count=1',
            success: function(data) {
                self.data.quote = {
                    tag: data.quotes[0].tag,
                    text: data.quotes[0].text,
                    author: data.quotes[0].author
                }
            },
            error: function(xhr, text, error) {
                alert("somthing gone wrong!!");
            }
        });
    }

    pokemon = function() {
        let self = this;
        $.ajax({
            method: "GET",
            url: 'https://pokeapi.co/api/v2/pokemon/' + (Math.floor(Math.random() * 898 + 1)),
            success: function(data) {
                self.data.pokemon = {
                    img: data.sprites.front_default,
                    name: data.name
                }
            },
            error: function(xhr, text, error) {
                alert("somthing gone wrong!!");
            }
        });
    }

    meat = function() {
        let self = this;
        $.ajax({
            method: "GET",
            url: 'https://baconipsum.com/api/?callback=?',
            success: function(data) {
                self.data.meat = {
                    meattext: data[Math.floor(Math.random() * data.length + 1)]
                }
            },
            error: function(xhr, text, error) {
                alert("somthing gone wrong!!");
            }
        });
    }
}