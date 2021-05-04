// ex1
const bestBook = function(data) {
    console.log(data.items[0].volumeInfo.title);
}

const GetBestBook = function(isdn) {
        $.ajax({
            method: "GET",
            url: 'https://www.googleapis.com/books/v1/volumes?q=' + isdn,
            success: bestBook,
            error: function(xhr, text, error) {
                alert("somthing gone wrong!!");
            }
        })
    }
    // GetBestBook("9782806269171");
    // GetBestBook("1440633908");
    // GetBestBook("9781945048470");
    // GetBestBook("9780307417138");

// ex2

const bookData = function(data) {
    console.log(data)
}
const getData = function(queryType, queryValue) {
        $.ajax({
            method: "GET",
            url: 'https://www.googleapis.com/books/v1/volumes?q=' + queryType + ":" + queryValue,
            success: bestBook,
            error: function(xhr, text, error) {
                alert("somthing gone wrong!!");
            }
        })
    }
    // getData("isbn", 9789814561778)
    // getData("title", "How to Win Friends and Influence People")

// ex3

const relevantData = function(data) {
    const source = $('#menu-template').html();
    const template = Handlebars.compile(source);
    let bookData = {};
    for (let item of data.items) {
        bookData.title = item.volumeInfo.title,
            bookData.author = item.volumeInfo.authors,
            bookData.ISBN = item.volumeInfo.industryIdentifiers[0].identifier
        const newHTML = template(bookData);
        $("#container").append(newHTML)
        bookData = {}
    }

}
const bookrelvData = function(word) {
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + word,
        success: relevantData,
        error: function(xhr, text, error) {
            alert("somthing gone wrong!!");
        }
    })
}

// bookrelvData("world")

// ex4+5
// import { GiphyFetch } from '@giphy/js-fetch-api'

// const gf = new GiphyFetch('0wrG6ItiPBQTHtOJoe2geoBpOqiRTmkP')

// // fetch 10 gifs
// const { data: gifs } = await gf.search('dogs', { sort: 'relevant', lang: 'es', limit: 10, type: 'stickers' })