const { faker } = require("@faker-js/faker");

const express = require("express");
const app = express();
const PORT = 8000;

const createUser = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password()
});

const createCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        country: faker.address.country()
    }
});

app.get("/api/users/new", (request, response) => {
    const newUser = createUser();
    response.json(newUser);
});

app.get("/api/companies/new", (request, response) => {
    const newCompany = createCompany();
    response.json(newCompany);
});

app.get("/api/user/company", (request, response) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const responseObject = {
        user: newUser,
        company: newCompany
    }
    response.json(responseObject);
});

app.listen( PORT, () => console.log(`server running on port ${PORT}`))