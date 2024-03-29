import React, { useEffect, useState } from "react";
import NavBar from "./NavBar"
import HomePage from "./HomePage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom";
import "../App.css";
import ProfilePageSetup from "./ProfilePageSetup";
import ProfilePage from "./ProfilePage";
import WorkoutPage from "./WorkoutPage";
import NutritionPage from "./NutritionPage";


function App() {
    const [user, setUser] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // auto-login
    useEffect(() => {
        fetch("/me").then((r) => {
        if (r.ok) {
            r.json().then((userData) => setUser(userData));
            // setIsLoaded(true);
        }
        });
    }, []);

    function handleUpdateUser(){
        fetch(`/me`)
        .then((r) => r.json())
        .then((userData) => setUser(userData));
    }

    return (
        <div className="App container py-3">
            
            <NavBar user={user} setUser={setUser}/>
            <Switch>
                <Route exact path="/">
                    <HomePage user={user} setUser={setUser}/>
                </Route>
                <Route exact path="/login">
                    <LoginPage onLogin={setUser}/>
                </Route>
                <Route exact path="/signup">
                    <SignUpPage onLogin={setUser}/>
                </Route>
                <Route exact path="/newprofile">
                    <ProfilePageSetup handleUpdateUser={handleUpdateUser}/>
                </Route>
                <Route exact path="/profile">
                    <ProfilePage user={user}/>
                </Route>
                <Route exact path="/workout">
                    <WorkoutPage user={user}/>
                </Route>
                <Route exact path="/nutrition">
                    <NutritionPage user={user}/>
                </Route>

                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </div>
    );
}

export default App;