import React from 'react'
import ExerciseCard from './ExerciseCard'
import ExerciseCollection from './ExerciseCollection'
import ExerciseSearch from './ExerciseSearch'

export default function WorkoutPage() {
    const [exerciseList, setExerciseList] = useState([]); // original list DO NOT MODIFY
    const [isLoaded, setIsLoaded] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredExerciseList, setFilteredExerciseList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/pokemon")
        .then(resp => resp.json())
        .then(exerciseData => {
            setExerciseList(exerciseData)
            setFilteredExerciseList(exerciseData)
            setIsLoaded(true)
        })
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value)
        setFilteredExerciseList(exerciseList.filter(exercise => exercise.name.includes(e.target.value)))
    }

    const handleSelectExercise = (exercise) => {
        setSelectedExercise(exercise)
      }

    if (!isLoaded) return <h1> Loading... </h1>;

    return (
        <Container>
          <h1>Workout Program</h1>
          <br />
          {selectedExercise ? <ExerciseDetail selectedExercise={selectedExercise} /> : null}
          <br />
          <h2>Exercise List</h2>
          <ExerciseSearch search={search} handleSearch={handleSearch}/>
          <br />
          <ExerciseCollection exerciseList={filteredExerciseList} handleSelectPokemon={handleSelectPokemon}/>
          <br />
        </Container>
      );
}
