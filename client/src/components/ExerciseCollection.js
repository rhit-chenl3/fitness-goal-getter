import React from 'react'
import { Card } from "semantic-ui-react";
import ExerciseCard from './ExerciseCard';

export default function ExerciseCollection({exerciseList, handleSelectExercise}) {
    return (
        <div>
            <Card.Group itemsPerRow={10}>
                {exerciseList.map(exercise => <ExerciseCard exerciseCard={exercise} key={exercise.id} handleSelectExercise={handleSelectExercise}/>)}
            </Card.Group>
        </div>
    )
}
