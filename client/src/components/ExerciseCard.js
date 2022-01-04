import React from 'react'
import { Card } from "semantic-ui-react";

export default function ExerciseCard({exerciseCard, handleSelectExercise}) {
    return (
        <Card onClick={() => handleSelectExercise(exerciseCard)}>
            <div >
                <div className="content" >
                <div className="image" >
                <img alt={exerciseCard.target_area} src={exerciseCard.img} width="90px"/>
                </div>

                <div className="header">{exerciseCard.name}</div>
                </div>

                
                
                <br/>
            </div>
        </Card>
    )
}
