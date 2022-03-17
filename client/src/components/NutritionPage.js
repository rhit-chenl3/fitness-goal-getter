import React, {useState} from "react";
import Button from "react-bootstrap/Button";


export default function NutritionPage({user}) {
    let fitnessGoal= (user?.profiles[0].fitness_goal)
    const nutritionGoal = (user?.profiles[0].nutrition_goal);
    const userWeight = (user?.profiles[0].weight);
    const userHeight = (user?.profiles[0].height);
    const userGender = (user?.profiles[0].gender);
    const userAge = (user?.profiles[0].age);
    const [intake, setIntake] = useState("");
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState(null);
    const [isSearching, setIsSearching] = useState(false);

    const handleNutritionGoal = () => {
        if(nutritionGoal === "protein"){
            setIntake(userWeight*1.6)
        }else{
            let newActivityFactor = 0;
            if(fitnessGoal === "size"){
                newActivityFactor = 1.7;
            }else if(fitnessGoal === "strength"){
                newActivityFactor = 1.5;
            }else{
                newActivityFactor = 1.3;
            }
            let newIntake = 0;
            if(userGender === "male"){
                newIntake = ((10*userWeight + 6.25*userHeight - 5*userAge + 5)*newActivityFactor)
            }else{
                newIntake = ((10*userWeight + 6.25*userHeight - 5*userAge - 161)*newActivityFactor)
            }
            setIntake(newIntake);
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleRequest = (e) => {
        e.preventDefault();
        setIsSearching(true);
        fetch("https://api.api-ninjas.com/v1/nutrition?query=" + search, {
            method: "GET",
            headers: {
                "X-Api-Key": "kF76JGdVzVshQBBR4J2ZvA==Y7gJdqjNqN8CQamj"
            }
        })
        .then(response => response.json())
        .then(data => 
            {
                setIsSearching(false);
                console.log(data);
                setSearchResults(data);
            })
        .catch(err => {
            console.error(err);
        });
    }

    return user ? (
        <div className="Home">
            <div className="lander">
                <h2>🥑Nutrition Tracker</h2>
                {intake ? (
                    <>
                        <h4>{nutritionGoal.toUpperCase()}</h4>
                        <p className="text-muted">
                            Recommended daily {nutritionGoal.toLowerCase()} intake: {intake}{nutritionGoal === "protein" ? (<>g</>):(<>kcal</>)}
                        </p>
                        <p className="text-muted">*Please note that the above number is a rough calculation*</p>
                    </>
                ):(
                    <>
                        <p className="text-muted" onClick={handleNutritionGoal}>
                            Click here to show current nutrition goal details
                        </p>
                    </>
                )}
                <p className="text-muted">
                    Feel free to search up any food item to see its nutritional value!
                </p>
                <div className="ui search">
                    <div className="ui icon input" style={{width: "100%"}}>
                        <input className="prompt"  type="text" onChange={handleSearch} value={search}/>
                        <i className="search icon" />
                    </div>
                </div>
                <br/>
                <Button id="nutrition-button" block size="lg" onClick={handleRequest} >{isSearching ? "Searching..." : "Search!"}</Button>

                {searchResults ? (
                    <>
                        <br/>
                        {searchResults.length > 0 ? (
                            <>  
                                <h5>✔️Search Success!</h5>
                                <div>
                                    Name: {searchResults[0].name} <br/>
                                    Serving Size: {searchResults[0].serving_size_g}g <br/>
                                    Calories: {searchResults[0].calories}kcal <br/>
                                    Protein: {searchResults[0].protein_g}g <br/>
                                    Total Fat: {searchResults[0].fat_total_g}g <br/>
                                    Total Carbs: {searchResults[0].carbohydrates_total_g}g <br/>
                                    Sodium: {searchResults[0].sodium_mg}mg
                                </div>
                                
                            </>
                        ):(
                            <>
                                <h5>❌No Results Found</h5>
                            </>
                        )}
                    </>
                ) : (
                    <>
                    </>
                )}

            </div>
        </div>
    ):(<h1> Loading...🌱</h1>)
}
