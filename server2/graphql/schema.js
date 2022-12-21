const {buildSchema}=require('graphql');
const locationSchema=require("./schemas/location")

module.exports= buildSchema(`
${locationSchema.Location}
${locationSchema.LocationInput}

type RootQuery{
    ${locationSchema.LocationQueries}
}

type RootMutation{
    ${locationSchema.LocationMutation}
}
schema{
    query:RootQuery
    mutation:RootMutation
}


`)