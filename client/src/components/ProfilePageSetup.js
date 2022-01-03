import React,  { useState } from 'react';
import "../index.css";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";




export default function ProfilePageSetup({user}) {
    let history = useHistory();
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [fitness_goal, setFitness_goal] = useState("");
    const [nutrition_goal, setNutrition_goal] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function validateForm() {
        return age.length > 0 && gender.length > 0 && height.length > 0 && weight.length > 0 && fitness_goal.length > 0 && nutrition_goal.length > 0;
    }

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/profiles", {
          method: "POST",
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
            r.json().then(history.push("/"));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
    }

    return (
        <div className="Signup">
            <Form onSubmit={handleSubmit}>
                
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
                    <option></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
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
                    <option></option>
                    <option value="endurance">Endurance</option>
                    <option value="strength">Strength</option>
                    <option value="size">Size</option>
                </Form.Control>
                </Form.Group>

                <Form.Group size="lg" controlId="nutrition_goal">
                <Form.Label>Nutrition Goal</Form.Label>
                <Form.Control as="select" onChange={(e) => setNutrition_goal(e.target.value)}> 
                    <option></option>
                    <option value="calories">Calories</option>
                    <option value="protein">Protein</option>
                </Form.Control>
                </Form.Group>

                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    {isLoading ? "Loading..." : "Complete Profile"}
                </Button>

                <Form.Group>
                {errors.map((err) => (
                    <Alert key={err}>{err}</Alert>
                ))}
                </Form.Group>

            </Form>
        </div>
    )
}
