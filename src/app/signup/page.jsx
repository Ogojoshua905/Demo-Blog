import React from "react";
import Button from "../comps/Button";
import Navbar from "../comps/Nav";
import Input from "../comps/Input";
import image from "../comps/styles.module.css";

export default function Signup() {

    return(
        <div className={image.login}>

       <section className="m-auto w-1/2">
        <form>
            <ul>

            <Input type="text" place="your username" userid="user"/>
            <Input type="email" place="your email address" userid="email"/>
            <Input type="password" place="your password" userid="pswd"/>

            </ul>
                    <Button status='SignUp' />
        </form>
       </section>
        </div>
    )
}