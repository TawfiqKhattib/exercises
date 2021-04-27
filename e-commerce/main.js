let cart = [];
let products = [
    { name: "mouse", price: "30 shekl", img: "urhttps://images-na.ssl-images-amazon.com/images/I/71gK7VlDnGL._AC_SL1280_.jpgl" },
    { name: "headset", price: "100 shekl", img: "https://images-na.ssl-images-amazon.com/images/I/61CqYq%2BxwNL._AC_SL1500_.jpg" },
    { name: "webcam", price: "350 shekl", img: "https://images-na.ssl-images-amazon.com/images/I/61f6zWBYNiL._AC_SL1426_.jpg" },
    { name: "mic", price: "330 shekl", img: "https://images-na.ssl-images-amazon.com/images/I/61Ly9zgVyIL._AC_SL1500_.jpg" },
    { name: "QGeeM", price: "30 shekl", img: "https://images-na.ssl-images-amazon.com/images/I/51x6RGUbZIL._AC_SL1000_.jpg" }
];



const aboutUs = function() {
    document.getElementById("containerMsg").innerHTML = "";
    const title = document.createElement("h3");
    title.innerHTML = "whoe are we";
    document.getElementById("containerMsg").appendChild(title);
    const par1 = document.createElement("p");
    par1.innerHTML = "i am Software Developer learning to make a websit";
    document.getElementById("containerMsg").appendChild(par1);
    const par2 = document.createElement("p");
    par1.innerHTML = "i am Software Developer learning to make a websit";
    document.getElementById("containerMsg").appendChild(par2);

}

const productsList = function() {
    document.getElementById("containerMsg").innerHTML = "";
    const ul = document.createElement("ul");
    for (item of products) {
        const itemproduct = document.createElement("li");
        const mimg = document.createElement("img");
        mimg.src = item["img"];
        mimg.style.width = "150px";
        mimg.style.height = "150px";
        itemproduct.appendChild(mimg);

        const name = document.createElement("p");
        name.innerHTML = item["name"];
        name.style.display = "inline-block";
        name.style.padding = "10px"
        itemproduct.appendChild(name);

        const price = document.createElement("p");
        price.innerHTML = item["price"];
        price.style.display = "inline-block";
        itemproduct.appendChild(price);

        const butn = document.createElement("button");
        butn.innerHTML = "add to cart page";
        butn.style.backgroundColor = "#769dbf";
        butn.style.margin = "15px";
        butn.setAttribute("onclick", "addtoCart(this)");
        itemproduct.setAttribute("class", "addProduct");
        itemproduct.appendChild(butn);

        ul.appendChild(itemproduct);
    }
    document.getElementById("containerMsg").appendChild(ul);

}

const cartPage = function() {
    document.getElementById("containerMsg").innerHTML = "";
    const ul = document.createElement("ul");
    for (item of cart) {
        const itemproduct = document.createElement("li");
        const mimg = document.createElement("img");
        mimg.src = item["img"];
        mimg.style.width = "150px";
        mimg.style.height = "150px";
        itemproduct.appendChild(mimg);

        const name = document.createElement("p");
        name.innerHTML = item["name"];
        name.style.display = "inline-block";
        name.style.padding = "10px"
        itemproduct.appendChild(name);

        const price = document.createElement("p");
        price.innerHTML = item["price"];
        price.style.display = "inline-block";
        itemproduct.appendChild(price);

        const butn = document.createElement("button");
        butn.innerHTML = "delete";
        butn.style.backgroundColor = "#769dbf";
        butn.style.margin = "15px";
        butn.setAttribute("onclick", "deleteFromCart(this)");
        itemproduct.setAttribute("class", "addProduct");
        itemproduct.appendChild(butn);
        ul.appendChild(itemproduct);

    }
    document.getElementById("containerMsg").appendChild(ul);
}
const addtoCart = function(x) {
    const par = x.parentElement.querySelectorAll("p");
    const namel = par[0].innerHTML;
    const pricel = par[1].innerHTML;
    const imgl = x.parentElement.querySelector("img");
    cart.push({ name: namel, price: pricel, img: imgl.src });
}
const deleteFromCart = function(x) {
    const par = x.parentElement.querySelectorAll("p");
    const namel = par[0].innerHTML;
    const pricel = par[1].innerHTML;
    const imgl = x.parentElement.querySelector("img");

    const theIndex = (nme) => (nme.name === namel && nme.price === pricel && nme.img === imgl.src);
    cart.splice(cart.findIndex(theIndex), 1);
    // cart.pop({ namel, pricel, imgl });
    cartPage();
}