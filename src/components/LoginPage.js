import React from "react";

const LoginPage = () =>{
    return(
        <div class="row ">
        <div class="col-sm-6 login-img">
        <div class="overlay"></div>
        </div>
        <div class="col-sm-6 login-container">
        <div class="slogan">
        <h1>So-Me</h1>
        <h2>Social media that's free from adverts!</h2>
        </div>
        <div class= "login">
        
        <h2 class="login-title">Login</h2>
       
            <input className="login-input" type="text" placeholder="Username" />
            <input className="login-input" type="password" placeholder="Password" />
            <a href="/posts"><button className="login-btn btn btn-primary btn-lg">Log In</button></a>
        
</div>
        </div>
        </div>
    )
}

export default LoginPage;