Run code using:  nest start
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