import React from 'react'
import { Card, Image } from "semantic-ui-react";

export default function ExerciseCard({exerciseCard, handleSelectExercise}) {
    return (
        <Card onClick={() => handleSelectExercise(exerciseCard)} fluid={true} centered={false}>
            <Image src={exerciseCard.img} />
            <Card.Content>
                <Card.Description>
                    {exerciseCard.name}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}
