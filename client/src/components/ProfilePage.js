import React, {useState, useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function ProfilePage({user}) {
    
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [fitness_goal, setFitness_goal] = useState("");
    const [nutrition_goal, setNutrition_goal] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        fetch("/me").then((r) => {
        if (r.ok) {
            r.json().then((userData) => {
                setProfile(userData.profiles[0])
                setAge(userData.profiles[0].age)
                setGender(userData.profiles[0].gender)
                setHeight(userData.profiles[0].height)
                setWeight(userData.profiles[0].weight)
                setFitness_goal(userData.profiles[0].fitness_goal)
                setNutrition_goal(userData.profiles[0].nutrition_goal)
            });
        }
        });
    }, []);


    function validateForm() {
        return age.length > 0 || gender.length > 0 || height.length > 0 || weight.length > 0 || fitness_goal.length > 0 || nutrition_goal.length > 0;
    }
    
    function handleUpdate(e) {
        console.log(age, gender, height, weight, fitness_goal, nutrition_goal)
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch(`/profiles/${profile.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            age: parseInt(age),
            gender,
            height: parseInt(height),
            weight: parseInt(weight),
            fitness_goal,
            nutrition_goal,
            
          }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            alert("profile updated!");
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
    }

    return user ? (
        <>
            <div className="Home">
                <div className='lander'>
                    <h2>📝Welcome to your profile!</h2>
                    <p className="text-muted" >Here you can view and update your personal info</p>
                </div>
            </div>

            <div className='row'>
                <div className='column'>
                    <h3 >{user.last_name}, {user.first_name} </h3>
                    <Form >
                        <Form.Group size="lg" controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            type="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        </Form.Group>

                        <Form.Group size="lg" controlId="gender">
                        <Form.Label>Sex (Male/Female)</Form.Label>
                        <Form.Control as="select" onChange={(e) => setGender(e.target.value)}> 
                            {profile.gender==="male" ? (
                                <>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </>
                            ):(
                                <>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                </>
                            )}                                    
                        </Form.Control>
                        </Form.Group>
                        

                        <Form.Group size="lg" controlId="height">
                        <Form.Label>Height(cm)</Form.Label>
                        <Form.Control
                            type="height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group size="lg" controlId="weight">
                        <Form.Label>Weight(kg)</Form.Label>
                        <Form.Control
                            type="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                        </Form.Group>

                        <Form.Group size="lg" controlId="fitness_goal">
                        <Form.Label>Fitness Goal</Form.Label>
                        <Form.Control as="select" onChange={(e) => setFitness_goal(e.target.value)}>
                            {profile.fitness_goal==="endurance" ? (
                                <>
                                    <option value="endurance">Endurance</option>
                                    <option value="strength">Strength</option>
                                    <option value="size">Size</option>
                                </>
                            ):profile.fitness_goal==="strength" ?(
                                <>
                                    <option value="strength">Strength</option>
                                    <option value="size">Size</option>
                                    <option value="endurance">Endurance</option>
                                </>
                            ):(
                                <>
                                    <option value="size">Size</option>
                                    <option value="endurance">Endurance</option>
                                    <option value="strength">Strength</option>
                                </>
                            )}                                    
                        </Form.Control>
                        </Form.Group>

                        <Form.Group size="lg" controlId="nutrition_goal">
                        <Form.Label>Nutrition Goal</Form.Label>
                        <Form.Control as="select" onChange={(e) => setNutrition_goal(e.target.value)}>
                            {profile.nutrition_goal==="calorie" ? (
                                <>
                                    <option value="calorie">Calorie</option>
                                    <option value="protein">Protein</option>
                                </>
                            ):(
                                <>
                                    <option value="protein">Protein</option>
                                    <option value="calorie">Calorie</option>
                                </>
                            )}
                        </Form.Control>
                        </Form.Group>

                        <Button block size="lg" type="submit" disabled={!validateForm()} onClick={handleUpdate}>
                            {isLoading ? "Loading..." : "Update Profile"}
                        </Button>

                        <Form.Group>
                        {errors.map((err) => (
                            <Alert key={err}>{err}</Alert>
                        ))}
                        </Form.Group>
                    </Form>
                </div>

                <div className='BMIcolumn' >
                    {user ? (
                        <>
                            {profile ? (
                                <div>

                                <br/>
                                <h5>Your current BMI: {(weight / ((height * 0.01)^2)).toFixed(0)}</h5>
                                
                                <p className="text-muted">*Please note that BMI is not always an accurate indicator of health*</p>
                                <img src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/269885323_931586591060761_5927827463391069206_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=0nFzWryjdJ8AX8GwEcj&tn=J0W_7GHedW-k0UGO&_nc_ht=scontent-lga3-2.xx&oh=03_AVJJVxCVNFULAeM8ey76nMf2KhvUAdLNTXvFkgQ4KtXtLw&oe=61F986FA" alt="BMI_Chart" width="150"/>
                                <br/>
                                <a href='https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html'>Learn more from the CDC</a>

                                </div>
                            ) : (
                                <>
                                </>
                                
                            )}
                        </>
                    ) : (
                        <div></div>   
                    )}
                </div>
            
            </div>
                
        
        </>

        
    ):(<h1> Loading... </h1>)
}
