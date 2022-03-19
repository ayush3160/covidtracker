import React, { useState } from "react";

export default function Login(){
    const [login,setLogin] = useState({})
    const [register,setRegister] = useState({})

    const handleRegisterChange = (e) => {
          if(e.target.name === 'name'){
              register.name = e.target.value.toLowerCase();
          }else if(e.target.name === 'email'){
              register.email = e.target.value.toLowerCase();
          }else if(e.target.name === 'password'){
              register.password = e.target.value
          }
        setRegister(register)
    }

    const handleLoginChange = (e) => {
        if(e.target.name === 'email'){
            login.email = e.target.value.toLowerCase();
        }else if(e.target.name === 'password'){
            login.password = e.target.value
        }
      setLogin(login)
  }

  const handleLogin = () => {
    const {email,password} = login
    let requestBody = {
        query: `
          query Login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
              userId
              token
              tokenExpiration
            }
          }
        `,
        variables: {
          email,
          password
        }
      };

  }

  const handleRegister = () => {
    const {name,email,password} = register

    let requestBody = {
        query : `
            mutation Register($name : String!,$email : String!,$password : String!){
                Register(name : $name,email : $email,password: $password){
                    _id
                }
            }
        `,
        variables : {
            name,
            email,
            password
        }
    }

    fetch('http://localhost:5000/login',{
        method : 'POST',
        body : JSON.stringify({"new" : register}),
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then((response) => {
        return response.json()
    }).then((data) => {
        const result = JSON.parse(data)
        console.log(result)
    }).catch((err) => {
        throw new Error(err)
    })
}


    return (
        <>
        <div class="row my-5">
        <div class="col-sm-3 mx-auto">
          <div class="card bg-dark" style={{ width: "25rem" }}>
            <div class="card-body text-light">
              <h3 class="card-title" style={{textAlign :"center"}}>Login</h3>
              <br/>
              <label>Email Id :</label><input style={{margin : "10px"}} type={"email"} name = "email" placeholder="john@example.com" onChange={(e) => {handleLoginChange(e)}}/>
              <br/>
              <br/>
              <label>Password :</label><input style={{margin : "10px"}} type={"password"} name = "password" placeholder="******" onChange={(e) => {handleLoginChange(e)}}/>
              <br/>
              <br/>
              <br/>
              <br/>
              <button className="btn btn-success" style={{marginLeft : "9rem"}} onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
        <div class="col-sm-3 mx-auto">
          <div class="card bg-dark" style={{ width: "25rem" }}>
            <div class="card-body text-light">
              <h3 class="card-title" style={{textAlign :"center"}}>Register</h3>
              <br/>
              <label>Name : </label><input style={{margin : "10px"}} type={"text"} name="name" placeholder="john" onChange={(e) => {handleRegisterChange(e)}}/>
              <br/>
              <br/>
              <label>Email Id :</label><input style={{margin : "10px"}} type={"email"} name="email" placeholder="john@example.com" onChange={(e) => {handleRegisterChange(e)}}/>
              <br/>
              <br/>
              <label>Password :</label><input style={{margin : "10px"}} type={"password"} name="password" placeholder="******" onChange={(e) => {handleRegisterChange(e)}}/>
              <br/>
              <br/>
              <button className="btn btn-success" style={{marginLeft : "9rem"}} onClick={handleRegister}>Register</button>
            </div>
          </div>
        </div>
        </div>
        </>
    )
}