const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Query {
    getSingleUser: []!
  }

  type Mutation {
    CreateUser()
      
    saveBook()

    deleteBook()
      
  }
`;

module.exports = typeDefs;
