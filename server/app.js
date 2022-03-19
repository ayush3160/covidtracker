const express = require('express')
require('./database/db')
const graphqlHttp = require('express-graphql').graphqlHTTP
const app = express();

const graphqlSchema = require('./graphql/schema/index')
const graphqlResolvers = require('./graphql/resolvers/auth')

app.use(express.json());

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if(req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });

app.use('/',(req,res) => {
    res.send("Hi I am server")
})

app.use('/login',graphqlHttp({
    schema : graphqlSchema,
    root : graphqlResolvers,
    graphiql: true
}))

app.listen(5000,() => {
    console.log("Server is Running on port 5000")
})