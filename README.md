Run code using:  nest start

localhost:3000/graphql

Sample Query to insert User:
  mutation {
  signUp(
    username:"denver"
    email:"gemini@j.cc"
    password:"pass123"
  ){
    email
  }
    
}