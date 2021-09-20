import React from "react";

const LoginPage = () =>{
    return(
        <div className="row ">
        <div className="col-sm-6 login-img">
        <div className="overlay"></div>
        </div>
        <div className="col-sm-6 login-container">
        <div className="slogan">
        <h1>So-Me</h1>
        <h2>Social media that's free from adverts!</h2>
        </div>
        <div className= "login">
        
        <h2 className="login-title">Login</h2>
       
            <input className="login-input" type="text" placeholder="Username" />
            <input className="login-input" type="password" placeholder="Password" />
            <a href="/posts"><button className="login-btn btn btn-primary btn-lg">Log In</button></a>
        
</div>
        </div>
        </div>
    )
}

export default LoginPage;