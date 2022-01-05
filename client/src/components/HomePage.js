import React from "react";
import "../index.css";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";



export default function HomePage({user}) {
    let history = useHistory();

    //fetch user profile information


    return (
        <div className="Home">
            <div className="lander">
                <h1>FitnessGG</h1>
                <p className="text-muted">Aim for the stars!</p>
                {/* user = true => page functionality, false => none */}
                {user ? (
                    <>
                        {user.profiles[0] ? (
                            <div>
                            Welcome back, {user.first_name}!
                            <br/> <br/>
                            <p>FitnessGoalGetter is an app designed to help guide you to reach your personal health goals.</p>
                            </div>
                        ) : (
                            <>
                                <div>Welcome, {user.username}!</div>
                                <div>Let's get you started by setting up your profile!</div>
                                <Button id="home-button" block size="lg" onClick={(e) => history.push("/newprofile")}>Let's go!</Button>
                            </>
                            
                        )}
                    </>
                    ) : (
                        <div></div>   
                )}
            </div>
        </div>
        
    )
}
