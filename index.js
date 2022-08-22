import { ApolloServer, gql } from 'apollo-server'
import { addUser } from './resolvers.js'
import CustomEnv from 'custom-env'
import mongoose from 'mongoose'
import { myLog } from './myLib.js'

CustomEnv.env()

myLog.greenJ(process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
})

const typeDefs = gql`
    
  type User {
      id: ID
      name: String
      age: String
      companyId: String
  } 
    
  type Query {
    hello: String 
  }
  
  type Mutation {
      addUserForMutation(name: String, age: Int, companyId: String): User
  }
`

const resolvers = {
  Query: {
    hello: (parent, args) => "Salam"
  },
  Mutation: {
    addUserForMutation: addUser,
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log("Salam Arash jan url: ", url)
})
