const { buildSchema } = require("graphql");

module.exports = buildSchema(`

    type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
    }

    type User {
        _id : String!
    }

    type RootQuery {
        login(email: String!, password: String!) : AuthData!
    }

    type RootMutation {
        Register(name : String!,email : String!,password : String!) : User
    }

    schema {
    query: RootQuery
    mutation: RootMutation
    }
`);
