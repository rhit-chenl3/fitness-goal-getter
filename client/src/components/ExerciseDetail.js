import React from 'react';

export default function ExerciseDetail({selectedExercise}) {

    return (
        <div className="row">
            <h2>{selectedExercise.name}</h2>
            <div className="column">
                Target Area: {selectedExercise.target_area} <br/>
                <img height="315px" alt={selectedExercise.name} src={selectedExercise.img}/>
            </div>
            <div className="column">
                Video Demo: 
                <br/>
                <iframe width="560" height="315" src={selectedExercise.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            
            <br/>
        </div>
    )
}
