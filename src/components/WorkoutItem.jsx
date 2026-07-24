import { useState } from 'react';

export default function WorkoutItem({ workout, onAddExercise, onRemoveExercise, onRemoveWorkout}) {

    const [exerciseName, setExerciseName] = useState("");
    const [defaultSets, setDefaultSets] = useState(3);

    // Function to clear exercise field
    const handleAddExercise = () => {
        onAddExercise(workout.id, exerciseName, defaultSets);
        setExerciseName('');
        setDefaultSets(3);
    }

    return (
    <li key={workout.id}>
        <h3>{workout.name}</h3>

        <input
            type="text"
            value={exerciseName}
            onChange={(event) => setExerciseName(event.target.value)}
            placeholder="Exercise name"
            style={{ maxWidth: '200px'}}
        />

        <input
            type="number"
            value={defaultSets}
            onChange={(event) => setDefaultSets(Number(event.target.value))}
            min="1"
            style={{ maxWidth: '48px'}}
        />

        <button onClick={handleAddExercise}>
            Add Exercise
        </button>

        <button onClick={() => onRemoveWorkout(workout.id)}>
            Remove Workout
        </button>

        <ul>
            {workout.exercises.map((exercise) => (
            <li key={exercise.id}>
                <h3>{exercise.name}</h3>
                <h3>{exercise.defaultSets}</h3>

                <button onClick={() => onRemoveExercise(workout.id, exercise.id)}>
                Remove Exercise
                </button>
            </li>
            ))}
        </ul>

        </li>
    );
}