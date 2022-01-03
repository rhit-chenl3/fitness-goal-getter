import React from 'react'
import { Card } from "semantic-ui-react";

export default function ExerciseCard({exerciseCard, handleSelectExercise}) {
    return (
        <Card>
            <div onClick={() => handleSelectExercise(exerciseCard)}>
                <div className="content" >
                <div className="header">{exerciseCard.name}</div>
                </div>

                <div className="image" >
                <img alt={exerciseCard.target_area} src={exerciseCard.img}/>
                </div>
                
                <br/>
            </div>
        </Card>
    )
}
