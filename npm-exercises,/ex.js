//EX!
var validator = require('validator');

const isMail = validator.isEmail('shoobert@dylan');
console.log(isMail);
//Ex2
const isValidNum = validator.isMobilePhone("786-329-9958");
console.log(isValidNum);


//Ex2
var faker = require('faker');
const makeHuman = function(UsersNum) {
    const Users = []
    let user = {}
    for (let i = 0; i < UsersNum; i++) {
        user.name = faker.name.firstName()
        user.img = faker.image.image()
        user.company = faker.company.companyName()
        console.log(user.name, ", ", user.img, ", ", user.company)
        Users.push(user)
        user = {}
    }
    return Users
}

const users = makeHuman(2)