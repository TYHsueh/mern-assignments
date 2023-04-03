const express = require("express");
const app = express();
const port = 8000;
//to import faker
const {faker} = require('@faker-js/faker');

// ! make sure these lines are above any app.get or app.post code blocks
//both express.urlencoded() and express.json() are Express middleware functions. They are responsible for providing and parsing the request.body data
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//try faker
console.log(faker.name.firstName()); // firstname is a function to produce random firstname

const createUser =() =>{
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        _id: faker.datatype.uuid(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }
}

const createCompany =() =>{
    return{
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}

app.get("/api/users/new", (req, res) =>{
    const newUser = createUser();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) =>{
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) =>{
    const newUser = createUser();
    const newCompany = createCompany();
    const userCompany = {
        user: newUser,
        company: newCompany,
    };
    res.json(userCompany);

})


console.log("Oh");
//this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
// this is runing the server and allow it to listen to client and run
