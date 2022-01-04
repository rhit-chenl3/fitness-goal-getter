import React from 'react';

export default function ExerciseDetail({selectedExercise}) {

    return (
        <div className="exercise">
            <h1>{selectedExercise.name}</h1>
            <div className="image">
                <img height="200px" alt={selectedExercise.name} src={selectedExercise.img}/>
            </div>
            <div>
                Target Area: {selectedExercise.target_area}
                <br/>
                Video Demo: 
                <br/>
                <iframe title="ExerciseVideo" width="420" height="315" src={selectedExercise.video}/>
                
            </div>
            
            <br/>
        </div>
    )
}
