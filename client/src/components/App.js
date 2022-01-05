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
    
    // auto-login
    useEffect(() => {
        fetch("/me").then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
        }
        });
    }, []);


    if (!user) return <h1> </h1>;

    return (
        <div className="App container py-3">
            
            <NavBar user={user} setUser={setUser}/>
            <Switch>
                <Route exact path="/">
                    <HomePage user={user}/>
                </Route>
                <Route exact path="/login">
                    <LoginPage onLogin={setUser}/>
                </Route>
                <Route exact path="/signup">
                    <SignUpPage onLogin={setUser}/>
                </Route>
                <Route exact path="/newprofile">
                    <ProfilePageSetup user={user}/>
                </Route>
                <Route exact path="/profile">
                    <ProfilePage user={user} profile={user.profiles[0]}/>
                </Route>
                <Route exact path="/workout">
                    <WorkoutPage user={user} />
                </Route>
                <Route exact path="/nutrition">
                    <NutritionPage user={user} />
                </Route>

                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </div>
    );
}

export default App;