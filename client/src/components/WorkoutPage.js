import React, {useState, useEffect} from "react";
import ExerciseCollection from './ExerciseCollection'
import ExerciseSearch from './ExerciseSearch'
import { Container } from "semantic-ui-react";
import ExerciseDetail from "./ExerciseDetail";


export default function WorkoutPage({user}) {
    const [exerciseList, setExerciseList] = useState([]); // original list DO NOT MODIFY
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoadedMore, setIsLoadedMore] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredExerciseList, setFilteredExerciseList] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [workoutPrograms, setWorkoutPrograms] = useState([]);
    const [userProgram, setUserProgram] = useState([]);

    useEffect(() => {
        fetch("/exercises")
        .then(resp => resp.json())
        .then(exerciseData => {
            setExerciseList(exerciseData)
            setFilteredExerciseList(exerciseData)
            setIsLoaded(true)
        })
        fetch("/programs")
        .then(resp => resp.json())
        .then(programData => {
            setWorkoutPrograms(programData)
            setIsLoadedMore(true)
        })
        
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value)
        setFilteredExerciseList(exerciseList.filter(exercise => exercise.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    const handleSelectExercise = (exercise) => {
        console.log(exercise)
        setSelectedExercise(exercise)
    }

    const handleUserProgram = () => {
        workoutPrograms.forEach(program => {
            // console.log(program)
            if(program.name.toLowerCase() === user.profiles[0].fitness_goal.toLowerCase()){
                setUserProgram(program)
            }
        })
        // console.log(userProgram)
    }

    if (!isLoaded || !isLoadedMore || !user) return <h1> Loading... </h1>;

    return (
        <div className="">
            <Container >
                <h1>Workout Program</h1>
                {userProgram.name ? (
                    <>
                        <h4>{userProgram.name.toUpperCase()}</h4>
                        <p className="text-muted">
                            Recommendations <br/>
                            Frequency: {userProgram.times_per_week} times per week <br/>
                            Reps: {userProgram.reps}-{userProgram.reps+2} <br/>
                            Sets: {userProgram.sets-1}-{userProgram.sets} <br/>
                            Workout 1: Chest, Triceps, Calves | Workout 2: Back, Biceps, Core | Workout 3: Shoulders, Traps, Calves | Workout 4: Legs, Core
                        </p>
                    </> 
                ):(
                    <>
                        <p className="text-muted" onClick={handleUserProgram}>
                            Click here to show current workout program details
                        </p>
                    </>
                )}
                

                
                {selectedExercise ? <ExerciseDetail selectedExercise={selectedExercise} /> : null}
                
                <h3>Exercise List</h3>
                <p className="text-muted">
                    Feel free to click on each exercise card for more info!
                </p>
                <ExerciseSearch search={search} handleSearch={handleSearch}/>
                <br />
                <ExerciseCollection exerciseList={filteredExerciseList} handleSelectExercise={handleSelectExercise}/>
                <br />
            </Container>
        </div>
    );
        
        
}
